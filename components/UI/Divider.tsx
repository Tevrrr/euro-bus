/** @format */

import type { NextPage } from 'next';

interface DividerProps {
	text?: string;
}

const Divider: NextPage<DividerProps> = ({ text = '' }) => {
	return (
		<div className='flex xl:flex-col items-center gap-4 self-stretch'>
			<div className='grow border-b-4 xl:border-r-4 xl:border-b-0 border-dashed border-accent'></div>
			{text ? (
				<>
					<p className=' font-bold text-5xl'>{text}</p>
					<div className='grow border-b-4 xl:border-r-4 xl:border-b-0 border-dashed border-accent'></div>
				</>
			) : (
				<></>
			)}
		</div>
	);
};

export default Divider;
