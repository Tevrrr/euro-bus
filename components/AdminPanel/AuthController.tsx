/** @format */

import { useRouter } from 'next/router';
import { ReactNode, useContext, useEffect, useState } from 'react';
import { NextPage } from 'next';
import { UserContext } from '@/common/UserContext';
import { toast } from 'react-hot-toast';

interface AuthControllerProps {
	children: ReactNode;
}

const AuthController: NextPage<AuthControllerProps> = ({ children }) => {
	const { username, checkLocalToken } = useContext(UserContext);
	const router = useRouter();
	const [access, setAccess] = useState(false);
	useEffect(() => {
		if (!username)
			checkLocalToken((username) => {
                if (!username) {
					router.push('/login');
					setAccess(false);
				} else {
					setAccess(true);
				}
			});
		else {
			setAccess(true);
		}
	}, [username]);

	if (access) {
		return <>{children}</>;
	}

	return <></>;
};

export default AuthController;
