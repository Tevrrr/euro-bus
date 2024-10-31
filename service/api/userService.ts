/** @format */

import { IUser } from "@/common/types/IUser";
import User from "@/models/User";




interface IUserResult {
	user?: IUser;
	users?: IUser[];
	errorMessage?: string;
}

class UserService {
	async getUser(id: string): Promise<IUserResult> {
		try {
			const user = await User.findById(id);
			if (!user) {
				return { errorMessage: 'Пользователь не найден!' };
			}
			return { user };
		} catch (error) {
			console.log(error);
			return { errorMessage: 'Ошибка поиска пользователя!' };
		}
	}

	async getUsers(): Promise<IUserResult> {
		try {
			const users = await User.find({});
			return { users };
		} catch (error) {
			console.log(error);
			return { errorMessage: 'Ошибка поиска пользователей!' };
		}
	}
	async deleteUser(id: string): Promise<IUserResult> {
		try {
			const deletedUser = await User.findByIdAndDelete(id);
			if (!deletedUser) {
				return { errorMessage: 'Пользователь не найден!' };
			}
			return { user: deletedUser };
		} catch (error) {
			console.log(error);
			return { errorMessage: 'Ошибка удаленя пользователя!' };
		}
	}
	async updateUser(id: string, user: IUser): Promise<IUserResult> {
		try {
			const updatedUser = await User.findByIdAndUpdate(id, user, {
				new: true,
			});
			if (!updatedUser) {
				return { errorMessage: 'Пользователь не найден!' };
			}
			return { user: updatedUser };
		} catch (error) {
			console.log(error);
			return { errorMessage: 'Ошибка обновления пользователя!' };
		}
	}
}
export default new UserService();
