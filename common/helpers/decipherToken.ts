/** @format */

import { IUser } from '@/common/types/IUser';
/** @format */

import { NextApiRequest, NextApiResponse } from 'next';
import { JwtPayload, verify } from 'jsonwebtoken';
import findSecretKey from '../../common/helpers/findSecretKey';

interface IDecipherTokenResult {
	user?: IUser;
	errorMessage?: string;
}

const decipherToken = (
	req: NextApiRequest,
	res: NextApiResponse<IDecipherTokenResult>
): IDecipherTokenResult | void => {
	try {
		const token = req.headers.authorization?.split(' ')[1];
		if (!token) {
			return res
						.status(400)
						.json( { errorMessage: 'Пользователь не авторизован по токену!' });
		}

		const secretKey = findSecretKey();

		const decodedData: string | JwtPayload = verify(token, secretKey);

		if (typeof decodedData !== 'string') {
			//@ts-ignore
			return { user: decodedData };
		}
		return res
			.status(400)
			.json( { errorMessage: 'Ошибка авторизации по токену!' });
	} catch (error) {
		console.log(error);
		return res
			.status(400)
			.json({ errorMessage: 'Пользователь не авторизован по токену!' });
	}
};
export default decipherToken;
