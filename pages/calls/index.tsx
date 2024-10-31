/** @format */

import { UserContext } from '@/common/UserContext';
import { ICall } from '@/common/types/ICall';
import AdminContainer from '@/components/AdminPanel/AdminContainer';
import AuthController from '@/components/AdminPanel/AuthController';
import CallCard from '@/components/AdminPanel/CallCard';
import PageNav from '@/components/AdminPanel/PageNav';
import { getCalls } from '@/service/call';

import type { NextPage } from 'next';
import { useContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';

interface CallsProps {}

const Calls: NextPage<CallsProps> = ({}) => {
	const [calls, setCalls] = useState<ICall[]>([]);
	const [activePage, setActivePage] = useState(1);
    const [countPages, setCountPages] = useState(0);
    const SizePage = 9;
	const { token } = useContext(UserContext);
    useEffect(() => {
        const loadID = toast.loading('Подождите...', {position: 'bottom-center'})
		getCalls(
			token || '',
			SizePage,
			(activePage - 1) * SizePage,
			(calls, totalCountCalls, error) => {
				if (calls) setCalls(calls);
				if (totalCountCalls)
                    setCountPages(Math.ceil(totalCountCalls / SizePage));
                if (!error) toast.dismiss(loadID);
                else toast.error(error, {id: loadID});
			}
		);
	}, [token, activePage]);

	return (
		<AuthController>
			<AdminContainer title='Звонки'>
				<div className=' min-h-screen flex flex-col items-center pt-20 pb-4 md:pt-28'>
					<div className='container grow flex flex-wrap items-start'>
						{calls?.map((item) => {
							return <CallCard key={item._id} call={item} />;
						})}
                    </div>
                    <div className='grow'></div>
					<PageNav
						activePage={activePage}
						setPage={setActivePage}
						count={countPages}
					/>
				</div>
			</AdminContainer>
		</AuthController>
	);
};

export default Calls;
