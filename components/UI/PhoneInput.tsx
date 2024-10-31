/** @format */

import { postCall } from '@/service/call';
import { motion } from 'framer-motion';
import type { NextPage } from 'next';
import { useForm, SubmitHandler } from 'react-hook-form';
import { toast } from 'react-hot-toast';

interface PhoneInputProps {}
interface Inputs {
	phone: string;
}

const PhoneInput: NextPage<PhoneInputProps> = () => {
	const {
		register,
        handleSubmit, 
        setValue,
		formState: { errors },
	} = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (data) => {
        const loadID = toast.loading('Мы отправляем ваш номер...', {
			position: 'bottom-center',
		});
        postCall(data, (value, error) => {
			if (!value) {
                toast.error(error || 'Ошибка добавления телефона', {
					position: 'bottom-center',
					id: loadID,
				});
				return;
			}
            setValue('phone','');
			toast.success('Телефон был успешно добавлен! Мы с вами свяжемся', {
				position: 'bottom-center',
				id: loadID,
			});
		});
	};

	return (
		<div className=' w-full flex flex-col gap-2 '>
			<div className='overflow-hidden md:pl-10 pt-3 font-medium -z-10  text-error'>
				<motion.p
					initial={{
						translateY: 50,
					}}
					animate={{ translateY: errors.phone ? 0 : 100 }}>
					Укажит корректный номер телефона
				</motion.p>
			</div>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className=' flex flex-col md:flex-row items-center gap-4 md:gap-0 w-full md:bg-base-300 text-base-content rounded-xl'>
				<input
					{...register('phone', {
						required: true,
						pattern: /^[\d\+][\d\(\)\ -]{4,14}\d$/,
					})}
					onClick={() => {
              //@ts-ignore
          ym(94133484,'reachGoal','order')
        }}
					className=' md:bg-opacity-0 bg-base-300  placeholder:text-base-content font-normal rounded-xl text-xl grow py-8 px-10 outline-none'
					type='tel'
					placeholder='Номер телефона'
				/>

				<motion.button
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.95 }}
					className=' rounded-xl text-3xl leading-7 text-accent-content bg-accent  py-7 px-8 drop-shadow-down'>
					Отправить
				</motion.button>
			</form>
		</div>
	);
};

export default PhoneInput;
