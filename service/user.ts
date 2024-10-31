
import { IUser } from '@/common/types/IUser';
import axios from 'axios';


export const getUsers = async (
    token: string,
	props?: (value: IUser[]) => void
): Promise<IUser[] | null> => {
	try {
		const URL = process.env.NEXT_PUBLIC_URL || 'http://localhost:3000';

		const response = await axios.get(`${URL}/api/user`, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
		if (props) props(response.data.users);
		return response.data.users;
	} catch (error) {
		console.log(error);
		return null;
	}
};

export const deleteUser = async (
	id: string,
	token: string,
	props?: (value: IUser | null, errorMessage?: string) => void
): Promise<IUser | null> => {
	try {
		const URL = process.env.NEXT_PUBLIC_URL || 'http://localhost:3000';

		const response = await axios.delete(`${URL}/api/user`, {
			params: {
				id,
			},
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
		if (props) props(response.data.user);
		return response.data.user;
	} catch (error: any) {
		console.log(error);
		if (props) props(null, error.response.data.message);
		return null;
	}
};

export const registerUser = async (
	username: string,
	password: string,
	token: string,
	props?: (value: IUser | null, errorMessage?: string) => void
): Promise<IUser | null> => {
	try {
		const URL = process.env.NEXT_PUBLIC_URL || 'http://localhost:3000';

		const response = await axios.post(
			`${URL}/api/auth`,
			{ username, password },
			{
				headers: {
					Authorization: `Bearer ${token}`,
				},
			}
		);
		if (props) props(response.data);
		return response.data;
	} catch (error: any) {
		console.log(error);
		if (props) props(null, error.response.data.message);
		return null;
	}
};