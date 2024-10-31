/** @format */

/** @format */

import decipherToken from '@/common/helpers/decipherToken';
import dbConnect from '@/lib/dbConnect';
import userService from '@/service/api/userService';
import { NextApiRequest, NextApiResponse } from 'next';

interface Data {
	username?: string;
	errorMessage?: string;
}

export default async function hendler(
	req: NextApiRequest,
	res: NextApiResponse<Data>
) {
	const { method } = req;

	await dbConnect();

	switch (method) {
		case 'PUT':
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
				const { user, errorMessage } = await userService.getUser(
					decipherData.user?._id || ''
				);
				if (errorMessage) {
					return res.status(400).json({ errorMessage });
				}
				if (!user) {
					return res
						.status(400)
						.json({
							errorMessage: 'Ошибка авторизации по токену!',
						});
				}
				return res.status(200).json({
					username: user.username,
				});
			} catch (error) {
				res.status(400).json({
					errorMessage: 'Ошибка авторизации по токену!',
				});
			}
			break;
		default:
			res.status(400).json({
				errorMessage: 'Ошибка запроса авторизации по токену!',
			});
			break;
	}
}
