/** @format */

import { motion, } from 'framer-motion';
import type { NextPage } from 'next';
import {  useEffect, useRef, useState } from 'react';
import { useLockScroll } from '@/common/hooks/useLockScroll';
import MenuToggle from '../UI/MenuToggle';
import Link from 'next/link';

interface AdminNavbarProps {}

const AdminNavbar: NextPage<AdminNavbarProps> = () => {
	const target = useRef(null);
	const [isOpen, setIsOpen] = useState(false);
	useLockScroll(target, isOpen);

	useEffect(() => {
		const handleResize = (event: Event) => {
			//@ts-ignore
			if (event.target?.innerWidth > 768) {
				setIsOpen(false);
			}
		};
		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	const togleMenu = () => {
		setIsOpen(!isOpen);
	};

	const closeMenu = () => {
		setIsOpen(false);
	};

	return (
		<motion.nav
			ref={target}
			className={`w-full flex justify-center gap-4 fixed   text-xl transition-all duration-300 border-neutral z-30 bg-base-200 border-b-2 !translate-y-0 `}>
			<div className=' container relative max-w-screen-2xl flex gap-4 top-full p-2 md:pb-6 md:pt-10 lg:pr-32 justify-end  text-base-content'>
				<ul
					className={` absolute md:static min-h-screen md:min-h-min flex flex-col md:flex-row items-center md:justify-end p-4 pt-36 md:pt-0 text-center gap-14 transition-all duration-300 top-0 right-0 w-full lg:w-auto bg-base-200 md:bg-opacity-0 ${
						isOpen ? ' ' : ' translate-x-full md:translate-x-0'
					}`}>
					<li onClick={closeMenu}>
						<Link href={'/calls'}>Звонки</Link>{' '}
					</li>
					<li onClick={closeMenu}>
						<Link href={'/users'}>Администраторы</Link>{' '}
					</li>
				</ul>
				<MenuToggle
					className={`md:hidden z-20 select-none pt-2 w-14 h-14  rounded-full flex justify-center  items-center`}
					toggle={togleMenu}
					isOpen={isOpen}
				/>
				{/* <button onClick={togleMenu} className='md:hidden z-20'>
					{' '}
					Menu
				</button> */}
			</div>
		</motion.nav>
	);
};

export default AdminNavbar;
