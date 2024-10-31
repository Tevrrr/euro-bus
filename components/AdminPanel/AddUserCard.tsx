/** @format */

import { UserContext } from '@/common/UserContext';
import { ICall } from '@/common/types/ICall';
import { IUser } from '@/common/types/IUser';
import { deleteUser, registerUser } from '@/service/user';
import { motion } from 'framer-motion';
import type { NextPage } from 'next';
import { useContext, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import toast from 'react-hot-toast';
import { FaCheck } from 'react-icons/fa';

interface AddUserCardProps {
	reloadPage?: () => void;
}

const AddUserCard: NextPage<AddUserCardProps> = ({ reloadPage = ()=>{} }) => {
	const { token } = useContext(UserContext);

	const {
		register,
		handleSubmit,
		setValue,
		formState: { errors },
	} = useForm<IUser>();

	const onSubmit: SubmitHandler<IUser> = (data) => {
		const loadID = toast.loading('Мы отправляем ваши данные...', {
			position: 'bottom-center',
		});
		registerUser(
			data.username,
			data.password,
			token || '',
			(value, error) => {
				// toast.dismiss(loadID);
				if (!value) {
					toast.error(error || 'Ошибка добавления адимнистратора!', {
						position: 'bottom-center',
						id: loadID,
					});
					return;
				}
				setValue('password', '');
                setValue('username', '');
                reloadPage();
				toast.success('Адимнистратор был успешно добавлен!', {
					position: 'bottom-center',
					id: loadID,
				});
			}
		);
	};

	return (
		<div className=' w-full lg:w-1/2 2xl:w-1/3 flex justify-center p-4'>
			<motion.form
				onSubmit={handleSubmit(onSubmit)}
				className={` relative min-h-[130px] w-full h-full flex flex-col justify-between gap-2 p-3 bg-accent text-accent-content rounded-2xl border-2 border-accent`}>
				<motion.p
					initial={{
						height: 0,
					}}
					animate={{
						height: errors.password || errors.username ? 'auto' : 0,
					}}
					className=' text-lg text-error-content overflow-hidden text-center'>
					Имя и пароль должны быть длинной больше 5 символов!
				</motion.p>
				<input
					{...register('username', {
						required: true,
						minLength: 5,
					})}
					type='text'
					className=' w-full bg-accent-focus px-4 py-3 rounded-2xl placeholder:text-accent-content outline-none'
					placeholder='Имя'
				/>
				<input
					{...register('password', {
						required: true,
						minLength: 5,
					})}
					type='password'
					className=' w-full bg-accent-focus px-4 py-3 rounded-2xl placeholder:text-accent-content outline-none'
					placeholder='Пароль'
				/>
				<button
					type='submit'
					className=' z-10 absolute -top-5 -right-5 rounded-full flex items-center justify-center  hover:scale-110 hover:bg-primary-focus text-primary-content bg-primary  transition-all duration-300  w-12 h-12'>
					<FaCheck />
				</button>
			</motion.form>
		</div>
	);
};

export default AddUserCard;
