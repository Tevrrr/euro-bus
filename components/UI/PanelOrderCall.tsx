/** @format */
import { ICall } from '@/common/types/ICall';
import { postCall } from '@/service/call';
import { motion } from 'framer-motion';
import type { NextPage } from 'next';
import { useForm, SubmitHandler } from 'react-hook-form';
import toast from 'react-hot-toast';

interface PanelOrderCallProps {}

const PanelOrderCall: NextPage<PanelOrderCallProps> = () => {
	const {
		register,
		handleSubmit,
		setValue,
		formState: { errors },
	} = useForm<ICall>();
	const onSubmit: SubmitHandler<ICall> = (data) => {
		const loadID = toast.loading('Мы отправляем ваш номер...', {
			position: 'bottom-center',
		});
		postCall(data, (value, error) => {
			// toast.dismiss(loadID);
			if (!value) {
				toast.error(error || 'Ошибка добавления телефона', {
					position: 'bottom-center',
					id: loadID,
				});
				return;
			}
			setValue('phone', '');
			setValue('additionalInformation', '');
			toast.success('Телефон был успешно добавлен! Мы с вами свяжемся', {
				position: 'bottom-center',
				id: loadID,
			});
		});
	};
	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className=' overflow-hidden flex flex-col items-center gap-8 p-6 md:p-8 bg-accent text-accent-content rounded-3xl w-full'>
			<div className='flex flex-col gap-4 w-full'>
				<h4>Ваш номер телефона</h4>
				<div className=' w-full'>
					<div className=' text-error-content'>
						<motion.p
							initial={{
								translateX: -500,
							}}
							animate={{
								translateX: errors.phone ? 0 : -500,
							}}>
							Укажит корректный номер телефона
						</motion.p>
					</div>
					<input
						{...register('phone', {
							required: true,
							pattern: /^[\d\+][\d\(\)\ -]{4,14}\d$/,
						})}
						onClick={() => {
              //@ts-ignore
          ym(94133484,'reachGoal','order')
        }}
						type='tel'
						className=' w-full bg-accent-focus px-7 py-5 rounded-2xl placeholder:text-accent-content outline-none'
						placeholder='Номер телефона'
					/>
					<div>*Укажите ваши мессенджеры (Viber, WhatsApp или Telegram), чтобы мы точно смогли связаться с вами!</div>
				</div>
			</div>
			<div className='flex flex-col gap-4 w-full'>
				<h4>Дополнительная информация</h4>
				<textarea
					{...register('additionalInformation')}
					className=' h-60 bg-accent-focus px-7 py-5 rounded-2xl rounded-br-none placeholder:text-accent-content outline-none'
					placeholder='Укажите ваши мессенджеры (Viber, WhatsApp или Telegram) и дополнительную информацию'
				/>
			</div>
			<motion.button
				whileHover={{ scale: 1.05 }}
				whileTap={{ scale: 0.95 }}
				className=' bg-neutral text-neutral-content rounded-xl text-3xl px-7 py-4'>
				Отправить
			</motion.button>
		</form>
	);
};

export default PanelOrderCall;
