/** @format */

import type { NextPage } from 'next';
import { FaTelegram } from 'react-icons/fa';
import ContactCard from './ContactCard';
import ContactLink from './ContactLink';
interface ContactListProps {}

const ContactList: NextPage<ContactListProps> = () => {
	return (
		<div className=' flex flex-col gap-10 justify-between  grow'>
			<ContactCard phone='+380 99 258 37 13' />
			{/* <ContactCard phone='+380 99 258 37 31' /> */}
			<div className='flex flex-col sm:flex-row justify-between  p-8 gap-4 bg-accent text-accent-content rounded-2xl'>
				<div className='flex flex-col-reverse sm:flex-row items-center justify-between'>
					<a href={`tel:+79493796689`}>
						<h4>+7 949 379 66 89</h4>
					</a>
				</div>
				<div className='flex sm:w-40'>
					<ContactLink
						href={`https://t.me/+79493796689`}
						icont={<FaTelegram />}
						text='Telegram'
					/>
				</div>
			</div>
			<div className='grow'></div>
		</div>
	);
};

export default ContactList;
