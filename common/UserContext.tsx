/** @format */

import type { NextPage } from 'next';
import { ReactNode, createContext, useEffect, useState } from 'react';
import { IUser } from './types/IUser';
import { IUserContext, IUserResponse } from './types/IUserContext';
import { loginUserByToken, loginUser } from '@/service/login';

const initialState: IUserContext = {
	username: null,
	token: null,
	login: () => {},
	checkLocalToken: () => {},
};

export const UserContext = createContext<IUserContext>(initialState);

interface UserProviderProps {
	children: ReactNode;
}

const UserProvider: NextPage<UserProviderProps> = ({ children }) => {
	const [username, setUsername] = useState<string | null>(null);
	const [token, setToken] = useState<string | null>(null);

	useEffect(() => {
		if (token) {
			localStorage.setItem('token', token);
		}
	}, [token]);

	const checkLocalToken = async (
		props?: (username: string | null, token: string) => void
	) => {
		if (token) return;
		const localToken = localStorage.getItem('token');
		if (localToken) {
			try {
				const user = await loginUserByToken(localToken);
				if (user) {
					setToken(localToken);
					setUsername(user.username);
				}

				if (props) props(user?.username || null, localToken);
			} catch (error) {}

		}
		else if (props) props(null, '');
	};

	const login = async (
		username: string,
		password: string,
		props?: (result: IUserResponse | null) => void
	) => {
		const result = await loginUser(username, password);

		if (result?.username && result?.token) {
			setUsername(result.username);
			setToken(result.token);
			localStorage.setItem('token', result.token);
		}
		if (props) props(result || null);
	};

	return (
		<UserContext.Provider
			value={{ username, token, login, checkLocalToken }}>
			{children}
		</UserContext.Provider>
	);
};

export default UserProvider;
