/** @format */

import { motion } from 'framer-motion';
import type { NextPage } from 'next';

interface RubberCardProps {
	stretched?: boolean;
	title: string;
	text: string;
}

const RubberCard: NextPage<RubberCardProps> = ({
	title,
	text,
	stretched = false,
}) => {
	return (
		<article className='group relative lg:min-h-[360px] flex text-center lg:text-left lg:even:text-right  p-6 md:p-16'>
			<motion.div
				initial={{
					// width: stretched ? '95%' : '105%',
					width:  '0',
                }}
                
				whileInView={{
					width: '100%',
				}}
				viewport={{ once: true }}
				transition={{
					type: 'spring',
					damping: 16,
					delay: 0.1,
				}}
				className=' top-0 bottom-0 group-even:right-0  group-odd:left-0  absolute bg-accent rounded-3xl'></motion.div>
			<motion.div
				initial={{
					opacity: 0,
				}}
				whileInView={{
					opacity: 1,
				}}
				viewport={{ once: true, amount: 0.4 }}
				transition={{
					delay: 0.2,
				}}
				className='text-accent-content z-10 flex flex-col justify-between gap-8'>
				<h3 className=''>{title}</h3>
				<p className='text-base sm:text-2xl font-semibold'>{text}</p>
			</motion.div>
		</article>
	);
};

export default RubberCard;
