/** @format */
import type { NextPage } from 'next';
import NeonCard from './UI/NeonCard';
import Image from 'next/image';
import { useAnchorTarget } from '@/common/hooks/useAnchorTarget';
import { motion } from 'framer-motion';

interface OurServicesProps {}

const OurServices: NextPage<OurServicesProps> = () => {
	const value = useAnchorTarget('Услуги');

	return (
		<motion.section
			{...value}
			className='relative w-full flex flex-col items-center'>
			<div className=' hidden md:block absolute right-0 top-[15%] h-[700px] w-40 -z-10'>
				<Image src='/wave_right.png' alt='' fill />
			</div>
			<h2 className='  w-full text-center p-14 bg-neutral text-neutral-content'>
				Наши услуги
			</h2>
			<div className='container'>
				<div className=' flex flex-col gap-14 translate-y-20 xl:translate-y-0 xl:pt-20 pb-8 px-4'>
					<div className='w-full flex flex-col xl:flex-row gap-14 xl:gap-24'>
						<NeonCard
							number={1}
							title='Ежедневные пассажирские перевозки из Украины и ЕС (Польши Германии Чехии) в Донецк, Луганск, Мариуполь, Бердянск, Мелитополь и другие города'
							items={[
								'2 водителя в пути',
								'Новый  комфортабельный транспорт',
								'Помощь при пересечении границы',
								'Скидка детям до 12 лет ',
								'Можно с животными',
							]}
						/>
						<div className=' w-full md:w-auto xl:w-1/2 self-end xl:self-start flex justify-center pr-5 xl:even:translate-y-24'>
							<div className='flex flex-col justify-between gap-14 text-right border-r-4 border-dashed border-accent pr-4 md:pr-16'>
								<h5 className=' h-12'>Забираем людей из:</h5>
								<ul className='flex flex-col grow items-end font-semibold text-xl md:text-2xl'>
									<li>Украина</li>
									<li>Польша</li>
									<li>Германия</li>
									<li>Чехия</li>
									<li>Литва</li>
									<li>Латвия</li>
									<li>Эстония</li>
								</ul>
							</div>
							<div className='flex flex-col justify-between gap-14 pl-4 md:pl-16 pr-6 sm:pr-16'>
								<h5 className=' h-12'>Везем в:</h5>
								<ul className='flex flex-col  grow items-start font-semibold text-xl md:text-2xl'>
									<li>Донецкая обл</li>
									<li>Луганская обл</li>
									<li>Запорожская обл</li>
									<li>РФ</li>
								</ul>
							</div>
						</div>
					</div>
					{/*  */}
					<div className='w-full flex flex-col xl:flex-row gap-14 xl:gap-24'>
						<NeonCard
							className=''
							number={2}
							title='Доставка посылок'
							items={[
								'Помощь в отправке ваших посылок из Европы или Украины в Донецкую, Луганскую и Запорожскую области и так же обратно',
							]}
						/>
						<NeonCard
							number={3}
							isEven
							title='Перегон автомобиля'
							items={[
								'Перегон вашего авто из Европы и Украины в Донецкую, Луганскую и Запорожскую области, города РФ или в обратном направлении',
								'Перегон осуществляется как с хозяином, так и без хозяина транспортного средства',
							]}
						/>
					</div>
					<div className='w-full flex flex-col xl:flex-row gap-14 xl:gap-24 '>
						<NeonCard
							isEven
							number={4}
							title='Ежедневное отправление Украины через ✈️Шереметьево. '
							content={
								<p className=' text-lg  border-l-2 border-text-accent p-2'>
									Для граждан у которых нет Паспорта РФ, а
									только лишь Украинский загранпаспорт!
								</p>
							}
							items={[
								'Везем из ЕС и Украины в Минский аэропорт',
								'Садим вас в самолет и встречаем в Шереметьево',
								'Везем вас в Донецк, Луганск, Мариуполь и другие города',
							]}
						/>
						<NeonCard
							className=''
							number={5}
							title='Денежные переводы и обмен валют'
							items={[
								'Помощь в отправке денежных средств из Европы или Украины в Донецкую, Луганскую и Запорожскую области и так же обратно',
								'Снятие денежных средств с украинских банковских карт',
								'Обмен рублей на гривну и наоборот. Обмен возможен безналичным или наличным путем',
							]}
						/>
					</div>
				</div>
			</div>
		</motion.section>
	);
};

export default OurServices;
