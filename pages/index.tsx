/** @format */

import Contatcts from '@/components/Contacts';
import Header from '@/components/Header';
import MainContainer from '@/components/MainContainer';
import OurAdvantages from '@/components/OurAdvantages';
import OurCars from '@/components/OurCars';
import OurServices from '@/components/OurServices';
import SwiperContainer from '@/components/SwiperContainer';

export default function Home() {
	return (
		<MainContainer
			title='Ежедневные пассажирские перевозки'>
			<div className=' overflow-hidden min-h-screen w-full flex flex-col items-center justify-center'>
				<Header />
				<main className='w-full flex flex-col items-center justify-center'>
					<OurServices />
					<OurAdvantages />
				</main>
				<OurCars />
				<Contatcts />
				<SwiperContainer />
			</div>
		</MainContainer>
	);
}
