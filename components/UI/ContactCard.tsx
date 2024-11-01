import type { NextPage } from 'next';
import { FaViber, FaTelegram, FaWhatsapp } from 'react-icons/fa';
import ContactLink from './ContactLink';

interface ContactCardProps {
	phone: string;
}

const ContactCard: NextPage<ContactCardProps> = ({ phone }) => {
	return (
		<div className='flex flex-col p-8 gap-4 bg-accent text-accent-content rounded-2xl'>
			<div className='flex flex-col-reverse sm:flex-row items-center justify-between'>
				<h4>
					<a href={`tel:${phone}`}>{phone}</a>{' '}
				</h4>
			</div>
			<div className='flex flex-col sm:flex-row gap-4'>
				<ContactLink
					href={`https://t.me/${phone.split(' ').join('')}`}
					icont={<FaTelegram />}
					text='Telegram'
				/>
				<ContactLink
					href={`https://api.whatsapp.com/send?phone=${phone
						.split(' ')
						.join('')
						.split('+')
						.join('')}`}
					icont={<FaWhatsapp />}
					text='WhatsApp'
				/>
				<ContactLink
					href={`viber://chat?number=${phone
						.split(' ')
						.join('')
						.split('+')
						.join('')}`}
					icont={<FaViber />}
					text='Viber'
				/>
			</div>
		</div>
	);
};

export default ContactCard;
