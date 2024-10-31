/** @format */

import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import type { NextPage } from 'next';
import { useContext, useEffect, useRef, useState } from 'react';
import MenuToggle from './MenuToggle';
import { useLockScroll } from '@/common/hooks/useLockScroll';
import AnchorContext from '@/common/AnchorContext';

interface NavbarProps {}

const Navbar: NextPage<NavbarProps> = () => {
	const { anchorLinks,targetID } = useContext(AnchorContext);
	const target = useRef(null);
	const { scrollY } = useScroll();
	const [bgMod, setBgMod] = useState(false);
	const [isOpen, setIsOpen] = useState(false);
	useLockScroll(target, isOpen);

	useMotionValueEvent(scrollY, 'change', (latest) => {
		if (latest > 100) {
			setBgMod(true);
		} else {
			setBgMod(false);
		}
	});

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
			className={`w-full flex justify-center gap-4 fixed   text-xl transition-all duration-300 border-neutral z-30 ${
				bgMod ? 'bg-base-200 border-b-2 !translate-y-0 ' : ' '
			}`}>
			<div className=' container relative max-w-screen-2xl flex gap-4 top-full p-2 md:pb-6 md:pt-10 lg:pr-32 justify-end  text-base-content'>
				<ul
					className={` absolute md:static min-h-screen md:min-h-min flex flex-col-reverse md:flex-row-reverse items-center  p-4 pt-36 md:p-0 text-center gap-14 transition-all duration-300 top-0 right-0 w-full lg:w-auto bg-base-200 md:bg-opacity-0 ${
						isOpen ? ' ' : ' translate-x-full md:translate-x-0'
					}`}>
					<li className='grow md:hidden'></li>
					{anchorLinks.map((item) => {
						return (
							<li key={item.id} onClick={closeMenu}>
								<a
									href={`#${item.id}`}
									className={`p-4  tracking-wide  ${
										targetID === item.id
											? ' font-extrabold cursor-auto'
											: ' cursor-pointer '
									}`}>
									{item.name}
								</a>
							</li>
						);
					})}
					{/* <li>
						<a className=' p-4  font-bold'>Услуги</a>
					</li>
					<li>
						<a className=' p-4 cursor-pointer'>Перимущества</a>
					</li>
					<li>
						<a className=' p-4  cursor-pointer'>Автомобили</a>
					</li>
					<li>
						<a className=' p-4  cursor-pointer'>Контакты</a>
					</li> */}
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

export default Navbar;
