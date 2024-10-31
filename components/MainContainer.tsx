/** @format */

import type { NextPage } from 'next';
import Head from 'next/head';
import { ReactNode } from 'react';
import Navbar from './UI/Navbar';
import { AnchorProvider } from '@/common/AnchorContext';
import { SwiperProvider } from '@/common/SwiperContext';
import UserProvider from '@/common/UserContext';
import { Toaster } from 'react-hot-toast';

interface MainContainerProps {
	title: string;
	children: ReactNode;
}

const MainContainer: NextPage<MainContainerProps> = ({ children, title }) => {
	return (
		<div className='flex flex-col min-h-screen'>
			<Head>
				<title>{title}</title>
			</Head>

			<AnchorProvider>
				<Navbar />
				<SwiperProvider>
					{children}
				</SwiperProvider>
			</AnchorProvider>
		</div>
	);
};

export default MainContainer;
