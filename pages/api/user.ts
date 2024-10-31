/** @format */

import UserService from '@/service/api/userService';
/** @format */

import { IUser } from './../../common/types/IUser';
/** @format */

import decipherToken from '@/common/helpers/decipherToken';
import dbConnect from '@/lib/dbConnect';
import User from '@/models/User';
import { NextApiRequest, NextApiResponse } from 'next';
import calls from '../calls';

interface Data {
	users?: IUser[];
	user?: IUser;
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

				const { users, errorMessage } = await UserService.getUsers();
				if (errorMessage) {
					return res.status(400).json({ errorMessage });
				}
				res.status(200).json({ users });
			} catch (error) {
				res.status(400).json({
					errorMessage: 'Ошибка получения пользователей!',
				});
			}
			break;
		case 'DELETE':
			try {
				const decipherData = decipherToken(req, res);
				if (!decipherData) {
					return;
				}
				if (decipherData.errorMessage) {
					return res.status(400).json({
						errorMessage: decipherData.errorMessage,
					});
				}
                const {user} = await UserService.deleteUser(req.query.id?.toString() || '');
				res.status(200).json({ user });
			} catch (error) {
				res.status(400).json({
					errorMessage: 'Ошибка удаления пользователя!',
				});
			}
			break;
		default:
			res.status(400).json({
				errorMessage: 'Ошибка удаления пользователя!',
			});
			break;
	}
}
