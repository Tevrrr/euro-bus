/** @format */


/** @format */
import { IUser } from '@/common/types/IUser';
import { IUserResponse } from '@/common/types/IUserContext';
import axios from 'axios';

export const loginUser = async (
	username: string,
	password: string,
	props?: (user: IUserResponse | null) => void
): Promise<IUserResponse | null> => {
	try {
		const URL = process.env.NEXT_PUBLIC_URL || 'http://localhost:3000';

		const result = { username, password };
		console.log(result);
		const response = await axios.put(`${URL}/api/auth`, result);
		console.log(response);
		if (props) props(response.data);
		return response.data;
	} catch (error: any) {
		console.log(error.response.data);
		if (props) props(null);
		return null;
	}
};

export const loginUserByToken = async (
	token: string,
	props?: (user: IUser | null) => void
): Promise<IUser | null> => {
	try {
		const URL = process.env.NEXT_PUBLIC_URL || 'http://localhost:3000';

		const response = await axios.get(`${URL}/api/auth`, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});

		if (props) props(response.data || null);
		return response.data || null;
	} catch (error) {
		console.log(error);
		return null;
	}
};
