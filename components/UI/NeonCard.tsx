/** @format */

import { motion, useInView } from 'framer-motion';
import type { NextPage } from 'next';
import { useRef } from 'react';

interface NeonCardProps {
	number: number;
	title: string;
	items: string[];
	isEven?: boolean;
	className?: string;
}

const NeonCard: NextPage<NeonCardProps> = ({
	number,
	title,
	items,
	isEven = false,
	className,
}) => {
	const conainer = useRef(null);
	const isInView = useInView(conainer, { once: true, amount: 0.3 });
	return (
		<article
			className={`relative xl:even:translate-y-24 even:self-end xl:even:self-auto max-w-2xl xl:w-1/2 ${className}`}
			ref={conainer}>
			<motion.div
				animate={{
					translateX: isInView ? 0 : isEven ? '100vw' : '-100vw',
				}}
				transition={{ type: 'spring', bounce: 0, delay: 0.1 }}
				className=' relative h-full flex gap-4 py-11 px-6 md:pl-16 drop-shadow-neon-sm md:drop-shadow-neon text-accent bg-base-300 rounded-3xl'>
				<div className=' absolute md:relative font-bold text-5xl opacity-80'>
					{number.toString().padStart(2, '0')}
				</div>
				<div className=' grow flex flex-col gap-3'>
					<h4 className='md:pl-0 pl-16'>{title}</h4>
					<ul className=' font-bold text-xl leading-8 marker:text-accent list-square pl-8'>
						{items.map((item) => {
							return <li key={item}>{item}</li>;
						})}
					</ul>
				</div>
			</motion.div>
		</article>
	);
};

export default NeonCard;
