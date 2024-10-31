/** @format */

import { fixDate } from '@/common/helpers/fixDate';
import { ICall } from '@/common/types/ICall';
import { motion } from 'framer-motion';
import type { NextPage } from 'next';
import { useState } from 'react';
import { IoIosArrowUp } from 'react-icons/io';

interface CallCardProps {
	call: ICall;
}

const CallCard: NextPage<CallCardProps> = ({ call }) => {
	const [isOpen, setIsOpen] = useState(false);
	const { phone, additionalInformation, date } = call;
	return (
		<div className=' w-full lg:w-1/2 2xl:w-1/3 flex justify-center p-4'>
			<div
				onClick={() => setIsOpen(!isOpen)}
				className={`min-h-[130px] w-full h-full flex flex-col items-center gap-2 p-4 bg-neutral text-neutral-content rounded-2xl border-2 border-accent ${additionalInformation ? ' cursor-pointer' : ''}`}>
				<div className=' flex justify-between items-center gap-4 w-full '>
					<h4>{phone}</h4>
					<p className=' max-w-[160px] whitespace-normal text-right'>
						{fixDate(date)}
					</p>
				</div>
				{additionalInformation ? (
					<>
						<motion.p
							initial={{
								height: 0,
							}}
							animate={{
								height: isOpen ? 'auto' : 0,
							}}
							className=' text-lg overflow-hidden'>
							{additionalInformation}
						</motion.p>
						<motion.div
							initial={{
								rotateZ: '180deg',
							}}
							animate={{
								rotateZ: isOpen ? 0 : '180deg',
							}}>
							<IoIosArrowUp size={30} />
						</motion.div>
					</>
				) : (
					<></>
				)}
			</div>
		</div>
	);
};

export default CallCard;
