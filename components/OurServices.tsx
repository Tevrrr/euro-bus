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
							isEven
							number={2}
							title='Транспортировка граждан Украины через ✈️Шереметьево. '
							content={
								<p className=' text-lg  border-l-2 border-text-accent p-2'>
									Для граждан у которых нет Паспорта РФ а
									только лишь Украинский загранпаспорт!
								</p>
							}
							items={[
								'Везем из ЕС и Украины в Минский аэропорт',
								'Садим вас в самолет и встречаем в Шереметьево',
								'Везем вас в Донецк, Луганск, Мариуполь и други города',
							]}
						/>
						<NeonCard
							className=''
							number={3}
							title='Денежные переводы и обмен валют'
							items={[
								'Помощь в отправке денежных средств из ДНР, ЛНР и РФ в Европу или Украину и так же обратно',
								'Снятие денежных средств с украинских банковских карт',
								'Обмен рублей на гривну и наоборот. Обмен возможен безналичным или наличным путем',
							]}
						/>
					</div>
					<div className='w-full flex flex-col xl:flex-row gap-14 xl:gap-24 '>
						<NeonCard
							number={4}
							isEven
							title='Перегон автомобиля'
							items={[
								'Перегон вашего авто из Донецка и области , Луганска и области, городов РФ в Европу, Украину или в обратном направлении',
								'Перегон осуществляется как с хозяином, так и без хозяина транспортного средства',
							]}
						/>
						<NeonCard
							className='opacity-0 cursor-default relative -z-50'
							number={5}
							title=''
							items={[]}
						/>
					</div>
				</div>
				{/* <div className=' flex gap-24 pt-14 px-4'>
					<div className=' w-1/2 flex flex-col gap-14 grow pb-8'>
						<NeonCard
							number={1}
							title='Ежедневные пассажирские перевозки из ДНР, ЛНР и РФ в страны ЕС и Украину'
							items={[
								'2 водителя в пути',
								'Новый  комфортабельный транспорт',
								'Помощь при пересечении границы',
								'Скидка детям до 12 лет ',
								'Можно с животными',
							]}
						/>
						<NeonCard
							number={2}
							title='Транспортировка животных'
							items={[
								'Привезем вашего любимого питомца без хозяина из Донецка, Мариуполя, Луганска в страны ЕС и Украину, так же в обратном направлении',
								'Документы в виде паспорта, чипирования и прививок обязательны',
							]}
						/>
						<NeonCard
							number={4}
							title='Денежные переводы и обмен валют'
							items={[
								'Помощь в отправке денежных средств из ДНР, ЛНР и РФ в Европу или Украину и так же обратно',
								'Снятие денежных средств с украинских банковских карт',
								'Обмен рублей на гривну и наоборот. Обмен возможен безналичным или наличным путем',
							]}
						/>
					</div>
					<div className=' w-1/2 flex flex-col gap-14 grow'>
						<div className='flex flex-col gap-14 grow'>
							<div className='flex '>
								<div className='flex flex-col gap-14 border-r-4 border-dashed border-accent pr-16'>
									<h5>Забираем людей из:</h5>
									<ul className='flex flex-col items-end font-semibold text-2xl'>
										<li>Донецка (и области)</li>
										<li>Луганска (и области)</li>
										<li>Ростова</li>
										<li>Воронежа</li>
										<li>Москвы</li>
										<li>Пскова</li>
									</ul>
								</div>
								<div className='flex flex-col gap-14 pl-16'>
									<h5>Везем в:</h5>
									<ul className='flex flex-col items-start font-semibold text-2xl'>
										<li>Эстонию</li>
										<li>Латвию</li>
										<li>Литву</li>
										<li>Польшу</li>
										<li>Германию</li>
										<li>Чехию</li>
										<li>Украину</li>
									</ul>
								</div>
							</div>
							<NeonCard
								number={3}
								title='Консьерж сервис в Варшаве'
								items={[
									'Помощь в заселении пассажиров в гостиницу на любой бюджет',
									'Помощь в подаче и получении документов (внутреннего паспорта и загранпаспорта Украины)',
									'Помощь в приобретении билетов на самолет и автобус во все точки мира',
								]}
							/>
							<NeonCard
								number={5}
								title='Перегон автомобиля'
								items={[
									'Перегон вашего авто из Донецка и области , Луганска и области, городов РФ в Европу, Украину или в обратном направлении',
									'Перегон осуществляется как с хозяином, так и без хозяина транспортного средства',
								]}
							/>
						</div>
					</div>
				</div> */}
			</div>
		</motion.section>
	);
};

export default OurServices;
