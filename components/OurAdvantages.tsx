/** @format */

import type { NextPage } from 'next';
import RubberCard from './UI/RubberCard';
import { motion } from 'framer-motion';
import { useAnchorTarget } from '@/common/hooks/useAnchorTarget';

interface OurAdvantagesProps {}

const OurAdvantages: NextPage<OurAdvantagesProps> = () => {
    const value = useAnchorTarget('Преимущества');
	return (
		<motion.section
            {...value}

			className=' bg-neutral w-full flex flex-col items-center'>
			<div className='container w-full min-h-screen pt-20 pb-24 px-2'>
				<h2 className=' text-center'>Наши преимущества </h2>
				<div className='flex lg:flex-row flex-col gap-7 pt-16'>
					<RubberCard
						stretched
						title='Профессиональные водители'
						text='Наши водители - высококвалифицированные профессионалы, знающие маршруты и соблюдающие все правила дорожного движения. Вы можете быть уверены в своей безопасности, путешествуя с нами.'
					/>
					<RubberCard
						title='Поездка с комфортом'
						text='Удобные кресла с регулировкой наклона, кондиционер, WI-FI и печка для поездок зимой. Современные комфортабельные микроавтобусы сделанные для людей.'
					/>
				</div>
				<div className='flex lg:flex-row flex-col gap-7 pt-7 lg:pt-16'>
					<RubberCard
						title='Опыт и надежность'
						text='Мы являемся проверенным и надежным перевозчиком с большим  опытом в пассажирских перевозках, гарантирующим безопасность и комфорт вашего путешествия.'
					/>
					<RubberCard
						stretched
						title='Конкурентные цены'
						text='Мы предлагаем конкурентоспособные цены без ущерба качеству и комфорту. Мы стремимся сделать пассажирские перевозки доступными и экономически выгодными для всех наших клиентов.'
					/>
				</div>
			</div>
		</motion.section>
	);
};

export default OurAdvantages;
