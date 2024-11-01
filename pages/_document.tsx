/** @format */

import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html lang='ru'>
			<Head>
				<noscript>
					<div>
						<img
							src='https://mc.yandex.ru/watch/12345678'
							style={{ position: 'absolute', left: '-9999px' }}
							alt=''
						/>
					</div>
				</noscript>

				<link rel='preconnect' href='https://fonts.googleapis.com' />
				<link
					rel='preconnect'
					href='https://fonts.gstatic.com'
					crossOrigin=''
				/>
				<link
					href='https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap'
					rel='stylesheet'
				/>

				<meta
					name='keywords'
					content='Пассажирские перевозки, ЛНР, ДНР, РФ, Страны ЕС, Украина, Комфортабельный транспорт, Помощь при пересечении границы, Перегон автомобиля, Денежные переводы, Обмен валют,'
				/>
				<meta
					name='description'
					content='Ежедневные пассажирские перевозки из ЛНР, ДНР и РФ в страны ЕС и Украину. Консьерж сервис в Варшаве. Транспортировка животных. Перегон автомобиля. Денежные переводы и обмен валют'></meta>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
