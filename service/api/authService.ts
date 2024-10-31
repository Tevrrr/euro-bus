/** @format */


import { hashSync, compareSync } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import findSecretKey from '../../common/helpers/findSecretKey';
import { IUser } from '@/common/types/IUser';
import User from '@/models/User';

const generationAccessToken = (_id: string, username:string) => {
	const payload = { _id, username };
	const secretKey = findSecretKey();

	return sign(payload, secretKey, { expiresIn: '7d' });
};

interface IFilterResult {
	user?: IUser;
	token?: string;
	errorMessage?: string;
}

class authService {
	async registration(
		username: string,
		password: string
	): Promise<IFilterResult> {
		try {
			const userFind = await User.findOne({ username });
			if (userFind) {
				return { errorMessage: 'Такой пользователь уже существует!' };
			}

			const hashPassword = hashSync(password, 5);


			const user = await User.create({
				username,
				password: hashPassword,
			});
			return { user };
		} catch (error) {
			console.log(error);
			return { errorMessage: 'Ошибка регистрации!' };
		}
	}
	async login(username: string, password: string): Promise<IFilterResult> {
		try {
			const user = await User.findOne({ username });
			if (!user) {
				return { errorMessage: 'Пользователь не найден!' };
			}

			const validPassword = compareSync(password, user.password);
			if (!validPassword) {
				return { errorMessage: 'Пароль неверен!' };
			}
			const token = generationAccessToken(user.id, user.username);
			return { user, token };
		} catch (error) {
			console.log(error);
			return { errorMessage: 'Ошибка логина!' };
		}
	}
}

export default new authService();
