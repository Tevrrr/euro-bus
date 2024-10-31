import decipherToken from '@/common/helpers/decipherToken';
import { IUser } from '@/common/types/IUser';
/** @format */

import dbConnect from '@/lib/dbConnect';
import Call from '@/models/Call';
import authService from '@/service/api/authService';
import userService from '@/service/api/userService';
import { NextApiRequest, NextApiResponse } from 'next';




interface Data {
	username?: string;
	token?:string;
	errorMessage?: string;
}

export default async function hendler(req: NextApiRequest, res: NextApiResponse<Data>) {
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
				const { user, errorMessage } = await userService.getUser(
					decipherData.user?._id || ''
				);
				if (errorMessage) {
					return res.status(400).json({ errorMessage });
				}
				if (!user) {
					return res.status(400).json({
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
		case 'PUT':
			try {
				const { username, password } = req.body;
				const { user, token, errorMessage } = await authService.login(
					username,
					password
				);
				if (errorMessage) {
					return res.status(200).json({ errorMessage });
				}
				res.status(200).json({ username: user?.username, token });
			} catch (error) {
				res.status(400).json({
					errorMessage: 'Ошибка при авторизации пользователя!',
				});
			}
			break;
		case 'POST':
			try {
				const { username, password } = req.body;
				const { user, errorMessage } = await authService.registration(
					username,
					password
				);
				if (errorMessage) {
					return res.status(200).json({ errorMessage });
				}
				res.status(200).json({ username: user?.username });
			} catch (error) {
				res.status(400).json({
					errorMessage: 'Ошибка при регистрации пользователя!',
				});
			}
			break;
		default:
			res.status(400).json({
				errorMessage: 'Ошибка запроса!',
			});
			break;
	}
};
