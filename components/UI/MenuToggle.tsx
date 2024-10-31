import type { NextPage } from 'next'
import { motion } from 'framer-motion';
interface MenuToggleProps {
	toggle: () => void;
	isOpen: boolean;
	className?: string;
};


const MenuToggle: NextPage<MenuToggleProps> = ({ toggle,isOpen, className='' }) => {
	return (
		<button className={className} onClick={toggle}>
			<motion.svg  width='30' height='30' viewBox='0 0 23 23'>
				<motion.path
					fill='transparent'
					strokeWidth='3'
					stroke='#D6CBCB'
					strokeLinecap='round'
					animate={isOpen ? 'open' : 'closed'}
					variants={{
						closed: { d: 'M 2 2.5 L 20 2.5' },
						open: { d: 'M 4 16.5 L 19 2.5' },
					}}
				/>
				<motion.path
					fill='transparent'
					strokeWidth='3'
					stroke='#D6CBCB'
					strokeLinecap='round'
					d='M 2 9.423 L 20 9.423'
					animate={isOpen ? 'open' : 'closed'}
					variants={{
						closed: { opacity: 1 },
						open: { opacity: 0 },
					}}
					transition={{ duration: 0.1 }}
				/>
				<motion.path
					fill='transparent'
					strokeWidth='3'
					stroke='#D6CBCB'
					strokeLinecap='round'
					animate={isOpen ? 'open' : 'closed'}
					variants={{
						closed: { d: 'M 2 16.346 L 20 16.346' },
						open: { d: 'M 4 2.5 L 19 16.346' },
					}}
				/>
			</motion.svg>
		</button>
	);
};

export default MenuToggle;