/** @format */

import { UserContext } from '@/common/UserContext';
import { IUser } from '@/common/types/IUser';
import { deleteUser } from '@/service/user';
import type { NextPage } from 'next';
import { useContext, useState } from 'react';
import toast from 'react-hot-toast';

interface UserCardProps {
	User: IUser;
    reloadPage?: () => void;
}

const UserCard: NextPage<UserCardProps> = ({ User, reloadPage = () =>{} }) => {
	const { username, _id } = User;
	const { token } = useContext(UserContext);

	const removeUser = () => {
		const loadID = toast.loading('Подождите...', {
			position: 'bottom-center',
		});
		if (token)
			deleteUser(_id, token, (value, error) => {
				if (!value) {
					toast.error(error || 'Ошибка удаления адимнистратора!', {
						position: 'bottom-center',
						id: loadID,
					});
					return;
				}
				toast.success('Адимнистратор был успешно удален!', {
					position: 'bottom-center',
					id: loadID,
				});
				reloadPage();
			});
	};

	return (
		<div className=' w-full lg:w-1/2 2xl:w-1/3 flex justify-center p-4'>
			<div
				className={` relative min-h-[130px] w-full h-full flex flex-col justify-between gap-2 p-4 bg-neutral text-neutral-content rounded-2xl border-2 border-accent`}>
				<h4>{username}</h4>
				<h5>{_id}</h5>
				<button
					onClick={removeUser}
					className=' z-10 absolute -top-5 -right-5 rounded-full flex items-center justify-center pt-1 hover:scale-110 bg-error transition-all duration-300  w-12 h-12'>
					<svg width='30' height='30' viewBox='0 0 23 23'>
						<path
							fill='transparent'
							strokeWidth='3'
							stroke='#470000'
							strokeLinecap='round'
							d='M 4 16.5 L 19 2.5'
						/>

						<path
							fill='transparent'
							strokeWidth='3'
							stroke='#470000'
							strokeLinecap='round'
							d='M 4 2.5 L 19 16.346'
						/>
					</svg>
					{/* <FaCheck /> */}
				</button>
			</div>
		</div>
	);
};

export default UserCard;
