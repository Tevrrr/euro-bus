/** @format */

'use client';
import type { NextPage } from 'next';
import { ReactNode, createContext, useEffect, useState } from 'react';
import { ISwiperContext } from './types/ISwiperContext';

interface SwiperContextProps {
	children: ReactNode;
}

const SwiperContext = createContext<ISwiperContext>({
	activeSwide: 0,
	isOpen: false,
	setActiveSwide(value) {},
	setIsOpen(value) {},
});

export const SwiperProvider: NextPage<SwiperContextProps> = ({ children }) => {
	const [activeSwide, setActiveSwide] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    
    

	return (
		<SwiperContext.Provider
			value={{ activeSwide, isOpen, setActiveSwide, setIsOpen }}>
			{children}
		</SwiperContext.Provider>
	);
};

export default SwiperContext;
