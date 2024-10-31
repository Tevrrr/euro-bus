/** @format */

import decipherToken from '@/common/helpers/decipherToken';
import { ICall } from '../../common/types/ICall';
import dbConnect from '@/lib/dbConnect';
import Call from '@/models/Call';
import { NextApiRequest, NextApiResponse } from 'next';
import authService from '@/service/api/authService';
import { sendMsg } from '@/service/api/telegramMsg';

interface Data {
	calls?: ICall[];
	call?: ICall;
	countCalls?: number;
	errorMessage?: string;
}

export default async function hendler(
	req: NextApiRequest,
	res: NextApiResponse<Data>
) {
	const { method } = req;

	await dbConnect();

	switch (method) {
		case 'GET':
			try {
				const decipherData = decipherToken(req, res);
				if (!decipherData) {
					return;
				}
				if (decipherData.errorMessage) {
					return res
						.status(400)
						.json({ errorMessage: decipherData.errorMessage });
				}

				const { skip, limit } = req.query;

				const calls = await Call.find<ICall>({})
					.sort({ date: -1 })
					.skip(Number.parseInt(skip?.toString() || '0'))
					.limit(Number.parseInt(limit?.toString() || '0'));
                const countCalls = await Call.find<ICall>().countDocuments();
				res.status(200).json({ calls, countCalls });
			} catch (error) {
				res.status(400).json({ errorMessage: 'error' });
			}
			break;
		case 'POST':
			try {
				const date = new Date();

				const call = await Call.create<ICall>({
					...req.body.call,
					date,
                }); 
                sendMsg(
					req.body.call.phone,
					req.body.call.additionalInformation
				);
				res.status(201).json({ call });
			} catch (error) {
				res.status(400).json({ errorMessage: 'error' });
			}
			break;
		default:
			res.status(400).json({ errorMessage: 'error' });
			break;
	}
}
