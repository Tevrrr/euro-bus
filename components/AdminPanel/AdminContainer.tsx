/** @format */

import type { NextPage } from 'next';
import Head from 'next/head';
import { ReactNode } from 'react';
import AdminNavbar from './AdminNavbar';

interface AdminContainerProps {
	title: string;
    children: ReactNode;
    navbar?: boolean;
}

const AdminContainer: NextPage<AdminContainerProps> = ({
	children,
	title,
	navbar = true,
}) => {
	return (
		<div className='flex flex-col min-h-screen'>
			<Head>
				<title>{title}</title>
			</Head>
			{!navbar ||<AdminNavbar />}
			{children}
		</div>
	);
};

export default AdminContainer;
