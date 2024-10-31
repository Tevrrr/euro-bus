/** @format */

import { IUser } from "./IUser";

export interface IUserResponse {
	username: string | null;
	token: string | null;
}

export interface IUserContext extends IUserResponse {
	checkLocalToken: (
		props?: (user: string | null, token: string) => void
	) => void;
	login: (
		username: string,
		password: string,
		props?: (result: IUserResponse | null) => void
	) => void;
}
