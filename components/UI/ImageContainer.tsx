/** @format */


import SwiperContext from '@/common/SwiperContext';
import { motion, useInView } from 'framer-motion';
import type { NextPage } from 'next';
import Image from 'next/image';
import { useContext, useRef } from 'react';
import { FaSearch } from 'react-icons/fa';

interface ImageContainerProps {
	id: number;
	src: string;
	className?: string;
}

const ImageContainer: NextPage<ImageContainerProps> = ({
	id,
	src,
	className = '',
}) => {
	const { setIsOpen, setActiveSwide } = useContext(SwiperContext);
	const conainer = useRef(null);
	const isInView = useInView(conainer, { once: true, amount: 0.6 });
	const openSwiper = () => {
		setIsOpen(true);
		setActiveSwide(id);
	};

	return (
		<motion.div
			ref={conainer}
			onClick={openSwiper}
			whileHover={{ scale: 1.01 }}
			transition={{ type: 'spring', bounce: 0 }}
			className={` relative flex items-center justify-center overflow-hidden  rounded-xl grow h-40 md:h-80 cursor-pointer ${className}`}>
			<motion.div
				initial={{ opacity: 0 }}
				whileHover={{ opacity: 1, scale: 1.2 }}
				transition={{ type: 'spring', bounce: 0 }}
				className=' absolute z-10 top-0 bottom-0 left-0 right-0 flex items-center justify-center bg-neutral bg-opacity-50'>
				<FaSearch className=' text-5xl' />
			</motion.div>
			<motion.div
				initial={{
					borderRadius: 99,
				}}
				whileHover={{ scale: 1.05 }}
				animate={{
					width: isInView ? '100%' : 0,
					height: isInView ? '100%' : 0,
					borderRadius: isInView ? 12 : 99,
				}}
				transition={{ type: 'spring', bounce: 0 }}
				className=' overflow-hidden relative bg-accent-content'>
				<Image
					src={src}
					alt=''
					fill
					className=' object-cover'
				/>
			</motion.div>
		</motion.div>
	);
};

export default ImageContainer;
