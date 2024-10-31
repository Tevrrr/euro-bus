/** @format */

import { motion } from 'framer-motion';
import type { NextPage } from 'next';
import { ReactNode, useState } from 'react';

interface ContactLinkProps {
	icont: ReactNode;
	href: string;
	text: string;
}

const ContactLink: NextPage<ContactLinkProps> = ({ icont, text, href }) => {
	const [isHovered, setIsHovered] = useState(false);
	return (
		<motion.a
			whileHover={{ scale: 1.05 }}
			whileTap={{ scale: 0.95 }}
			onHoverStart={(e) => {
				setIsHovered(true);
			}}
			onHoverEnd={(e) => {
				setIsHovered(false);
			}}
			href={href}
			className='group contact-link '>
			<motion.span
				initial={{
					scale: 1,
					marginRight: '0.5rem',
				}}
				animate={{
					scale: isHovered ? 1.6 : 1,
					marginRight: isHovered ? 0 : '0.5rem',
				}}
				className='mr-2'>
				{icont}
			</motion.span>
			<motion.span
				initial={{
					width: 'auto',
				}}
				animate={{
					width: isHovered ? 0 : 'auto',
				}}
				className=' overflow-hidden'>
				{text}
			</motion.span>
		</motion.a>
	);
};

export default ContactLink;
