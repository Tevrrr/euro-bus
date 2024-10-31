/** @format */

import type { NextPage } from 'next';
import { FaTelegram } from 'react-icons/fa';
import ContactCard from './ContactCard';
import ContactLink from './ContactLink';
interface ContactListProps {}

const ContactList: NextPage<ContactListProps> = () => {
	return (
		<div className=' flex flex-col gap-10 justify-between  grow'>
			<ContactCard phone='+380 95 047 53 07' />
			<ContactCard phone='+380 95 861 93 76' />
			<div className='grow'></div>
		</div>
	);
};

export default ContactList;
