/** @format */

import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html lang='ru'>
			<Head>
				{/* Google Tag Manager  */}
				<script
					dangerouslySetInnerHTML={{
						__html: `
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f); (https://www.googletagmanager.com/gtm.js?id=%27+i+dl;f.parentNode.insertBefore(j,f))
})(window,document,'script','dataLayer','GTM-NH9ZK22J');
              `,
					}}
				/>
				{/* End Google Tag Manager */}

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
				<noscript>
					<iframe
						src='https://www.googletagmanager.com/ns.html?id=GTM-NH9ZK22J'
						height='0'
						width='0'
						style={{
							display: 'none',
							visibility: 'hidden',
						}}></iframe>
				</noscript>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
