/** @format */

import type { NextPage } from 'next';
import Image from 'next/image';
import {BiDownArrowAlt} from 'react-icons/bi';
import PhoneInput from './UI/PhoneInput';
import {
	motion,
	useTransform,
	useScroll,
	useAnimationControls,
} from 'framer-motion';

interface HeaderProps {}

const Header: NextPage<HeaderProps> = () => {
	const { scrollYProgress } = useScroll();
	const controls = useAnimationControls();
	const translate = useTransform(scrollYProgress, [0, 0.4], [0, 100]);
	return (
		<>
			<motion.div className=' hidden md:block absolute  w-[600px] h-40 top-0 -left-40 lg:left-0'>
				<Image src='/wave_up.png' alt='' fill />
			</motion.div>
			<header className='container  relative min-h-[800px] flex justify-center md:justify-between px-3 md:px-8 pb-20 '>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					className=' absolute w-[950px] h-[950px] -top-10 -right-44 md:-right-96 lg:-right-44 -z-10'>
					<Image src='/earth_bg.png' alt='' fill />
				</motion.div>
				<div className=' max-w-md md:max-w-2xl flex flex-col text-center md:text-left gap-16 pt-24'>
					<motion.h1
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.2 }}>
						Ежедневные пассажирские{' '}
						<motion.span
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 0.2 }}
							className=' relative inline-flex mt-4 pb-2.5 pt-1 px-5 md:pb-5 md:pt-2 md:px-10 border-accent border-4'>
							<motion.div
								initial={{ left: '50%', top: -14 }}
								animate={{
									opacity: [0, 1],
									left: -14,
								}}
								transition={{
									type: 'spring',
									bounce: 0,
									damping: 15,
									stiffness: 100,
									delay: 0.2,
								}}
								className=' absolute -left-3 -top-3 w-6 h-6 bg-base-100 border-accent border-4'></motion.div>
							<motion.div
								initial={{ right: '50%', top: -14 }}
								animate={{
									opacity: [0, 1],
									left: 'auto',
									right: -14,
								}}
								transition={{
									type: 'spring',
									bounce: 0,
									damping: 15,
									stiffness: 100,
									delay: 0.2,
								}}
								className=' absolute w-6 h-6 bg-base-100 border-accent border-4'></motion.div>
							<motion.div
								initial={{ right: '50%', bottom: -14 }}
								animate={{
									opacity: [0, 1],
									left: 'auto',
									right: -14,
								}}
								transition={{
									type: 'spring',
									bounce: 0,
									damping: 15,
									stiffness: 100,
									delay: 0.2,
								}}
								className=' absolute -right-3 -bottom-3 w-6 h-6 bg-base-100 border-accent border-4'></motion.div>
							<motion.div
								initial={{ left: '50%', bottom: -14 }}
								animate={{
									opacity: [0, 1],
									left: -14,
								}}
								transition={{
									type: 'spring',
									bounce: 0,
									damping: 15,
									stiffness: 100,
									delay: 0.2,
								}}
								className=' absolute -left-3 -bottom-3 w-6 h-6 bg-base-100 border-accent border-4'></motion.div>
							<motion.span
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ delay: 0.5 }}>
								перевозки
							</motion.span>
						</motion.span>
					</motion.h1>
					<motion.div
						initial={{ translateY: 500, opacity: 0 }}
						animate={{ translateY: 0, opacity: 1 }}
						transition={{
							type: 'spring',
							damping: 30,
							bounce: 0,
							delay: 0.7,
						}}
						className=' flex flex-col gap-5'>
						<h3 className=' max-w-xl'>
							Отправте ваш номер и мы с вами свяжемся!
						</h3>
						<div className=' max-w-xl flex flex-col items-center gap-2'>
                            <motion.a
					            whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                href='#Контакты'
                                className=' flex gap-1 items-center rounded-xl text-3xl leading-7 text-accent-content bg-accent  py-7 px-8 drop-shadow-down'>
                            {/* <BiDownArrowAlt className='text-5xl'/> */}
					            Отправить
                            {/* <BiDownArrowAlt className='text-5xl'/> */}
				            </motion.a>
                        </div>
					</motion.div>
				</div>
				<div className='hidden lg:flex flex-col'>
					<div className=' grow'></div>
					<motion.div
						initial={{ translateX: 3000, translateY: -300 }}
						animate={controls}
						custom={{
							translateX: 0,
							translateY: 0,
						}}
						transition={{
							type: 'spring',
							damping: 30,
							bounce: 0,
							delay: 1,
						}}
						style={{ translateY: translate }}
						className=' relative w-[800px] h-[500px] xl:translate-x-20 '>
						<Image
							src='/car_header.png'
							loading='eager'
							onLoad={() => {
								controls.start((i)=>i);
							}}
							alt=''
							fill
							className=' object-cover object-left-bottom'
						/>
					</motion.div>
				</div>
			</header>
		</>
	);
};

export default Header;
