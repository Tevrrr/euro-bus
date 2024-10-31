/** @format */

import type { NextPage } from 'next';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import { useContext, useEffect } from 'react';
import Link from 'next/link';
import { toast } from 'react-hot-toast';
import { UserContext } from '@/common/UserContext';
import { motion } from 'framer-motion';
import AdminContainer from '@/components/AdminPanel/AdminContainer';
interface ILoginForm {
	username: string;
	password: string;
}

const Login: NextPage = () => {
	const { login, checkLocalToken, username } = useContext(UserContext);
	const router = useRouter();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<ILoginForm>();

	useEffect(() => {
		if (!username) {
			checkLocalToken();
		}
    }, []);
    
	const onSubmit: SubmitHandler<ILoginForm> = (data) => {
		const loadID = toast.loading('Подождите...', {
			position: 'bottom-center',
		});
        login(data.username, data.password, (result) => {

            
			if (!result?.username) {
				toast.error('Неправильное имя пользователя или пароль!', {
					position: 'bottom-center',
					id: loadID,
				});
			} else {
				toast.success('Добро пожаловать!', {
					position: 'bottom-center',
					id: loadID,
				});
				router.push('/calls');
			}
		});
	};

    return (
		<AdminContainer title='Вход' navbar={false}>
			<div className=' flex w-full h-screen items-center justify-center'>
				<form
					onSubmit={handleSubmit(onSubmit)}
					className=' max-w-lg overflow-hidden flex flex-col items-center gap-8 p-6 md:p-8 bg-accent text-accent-content rounded-3xl w-full'>
					<div className='flex flex-col gap-4 w-full'>
						<div className=' w-full'>
							<div className=' text-error-content'>
								<motion.p
									initial={{
										translateX: -500,
									}}
									animate={{
										translateX: errors.username ? 0 : -500,
									}}>
									Введите имя пользователя
								</motion.p>
							</div>
							<input
								{...register('username', {
									required: true,
								})}
								type='text'
								className=' w-full bg-accent-focus px-7 py-5 rounded-2xl placeholder:text-accent-content outline-none'
								placeholder='Имя пользователя'
							/>
						</div>
						<div className=' w-full'>
							<div className=' text-error-content'>
								<motion.p
									initial={{
										translateX: -500,
									}}
									animate={{
										translateX: errors.password ? 0 : -500,
									}}>
									Введите пароль
								</motion.p>
							</div>
							<input
								{...register('password', {
									required: true,
								})}
								type='password'
								className=' w-full bg-accent-focus px-7 py-5 rounded-2xl placeholder:text-accent-content outline-none'
								placeholder='Пароль'
							/>
						</div>
					</div>
					<motion.button
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						type='submit'
						className=' w-full bg-neutral text-neutral-content rounded-xl text-3xl px-7 py-4'>
						Войти
					</motion.button>
					{!username || (
						<Link href='/calls' className=' w-full'>
							<motion.button
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								type='submit'
								className=' w-full bg-accent-focus text-accent-content rounded-xl text-3xl px-7 py-4'>
								Войти в старый акаунт
							</motion.button>
						</Link>
					)}
				</form>
			</div>
		</AdminContainer>
	);
};

export default Login;
