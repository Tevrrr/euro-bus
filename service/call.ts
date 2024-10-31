/** @format */

import { ICall } from '@/common/types/ICall';
import axios from 'axios';

type ICallReq = Omit<ICall, '_id' | 'date'>

export const postCall = async (
	call: ICallReq,
	props?: (value: {} | null, errorMessage?: string) => void
): Promise<{} | null> => {
	try {
		const URL = process.env.NEXT_PUBLIC_URL || 'http://localhost:3000';

		const response = await axios.post(`${URL}/api/call`, { call });

		if (props) props(response.data.call);
		return response.data.call;
	} catch (error: any) {
		console.log(error);
		if (props) props(null, error.response.data.message);
		return null;
	}
};

export const getCalls = async (
	token: string,
	limit: number = 0,
	skip: number = 0,
	props?: (
		value: ICall[] | null,
		countCalls?: number,
		errorMessage?: string
	) => void
): Promise<ICall[] | null> => {
	try {
		const URL = process.env.NEXT_PUBLIC_URL || 'http://localhost:3000';

		const response = await axios.get(`${URL}/api/call`, {
			params: {
				limit,
				skip,
			},
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});

		if (props) props(response.data.calls, response.data.countCalls);
		return response.data.call;
	} catch (error: any) {
		console.log(error);
		if (props) props(null, error.response.data.message);
		return null;
	}
};
