/** @format */

import type { NextPage } from 'next';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { useContext, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import SwiperClass from 'swiper/types/swiper-class';
import SwiperContext from '@/common/SwiperContext';
import { useLockScroll } from '@/common/hooks/useLockScroll';

interface SwiperContainerProps {}

const SwiperContainer: NextPage<SwiperContainerProps> = () => {
	const target = useRef(null);
	const [swiper, setSwiper] = useState<SwiperClass>();
	const { isOpen, activeSwide, setIsOpen } = useContext(SwiperContext);
    useLockScroll(target, isOpen);

	const slideTo = (index: number) => swiper?.slideTo(index, 0);

	const closeSwiper = () => {
		setIsOpen(false);
	};
	// useEffect(() => {
	// 	if (target.current) {
	// 		if (isOpen) {
	// 			disableBodyScroll(target.current);
	// 		} else {
	// 			enableBodyScroll(target.current);
	// 		}
	// 	}
	// 	return () => {
	// 		clearAllBodyScrollLocks();
	// 	};
	// }, [target, isOpen]);
	useEffect(() => {
		slideTo(activeSwide);
	}, [activeSwide, slideTo]);
	return (
		<div
			ref={target}
			className={`fixed top-0 bottom-0 left-0 right-0 bg-neutral z-30 flex ${
				isOpen ? '' : ' hidden'
			}`}>
			<button
				onClick={closeSwiper}
				className=' z-30 absolute top-5 right-5 rounded-full flex items-center justify-center pt-1 hover:bg-accent-focus transition-all duration-300 bg-accent w-12 h-12'>
				<svg width='30' height='30' viewBox='0 0 23 23'>
					<path
						fill='transparent'
						strokeWidth='3'
						stroke='#351F00'
						strokeLinecap='round'
						d='M 4 16.5 L 19 2.5'
					/>

					<path
						fill='transparent'
						strokeWidth='3'
						stroke='#351F00'
						strokeLinecap='round'
						d='M 4 2.5 L 19 16.346'
					/>
				</svg>
			</button>
			<Swiper
				navigation={true}
				onSwiper={setSwiper}
				modules={[Navigation]}
				className='w-full'>
				{/* <SwiperSlide>1</SwiperSlide> */}
				<SwiperSlide>
					<Image
						src='/ford-1.jpg'
						alt='1'
						fill
						className=' object-contain'
					/>
				</SwiperSlide>
				<SwiperSlide>
					<Image
						src='/ford-2.jpg'
						alt='2'
						fill
						className=' object-contain'
					/>
				</SwiperSlide>
				<SwiperSlide>
					<Image
						src='/ford-3.jpg'
						alt='3'
						fill
						className=' object-contain'
					/>
				</SwiperSlide>
				<SwiperSlide>
					<Image
						src='/ford-4.jpg'
						alt='4'
						fill
						className=' object-contain'
					/>
				</SwiperSlide>
				<SwiperSlide>
					<Image
						src='/ford-5.jpg'
						alt='5'
						fill
						className=' object-contain'
					/>
				</SwiperSlide>
			</Swiper>
		</div>
	);
};

export default SwiperContainer;
