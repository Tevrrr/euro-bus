/** @format */

'use client';
import type { NextPage } from 'next';
import { ReactNode, createContext, useRef, useState } from 'react';
import { IAnchorContext } from './types/IAnchorContext';
import { IAnchorLink } from './types/IAnchorLink';

interface AnchorContextProps {
	children: ReactNode;
}

const AnchorContext = createContext<IAnchorContext>({
	targetID: '',
	anchorLinks: [],
	setTarget(newTarget) {},
	delTarget(target) {},
	addAnchorLink(link) {},
});

export const AnchorProvider: NextPage<AnchorContextProps> = ({ children }) => {
	const [targetID, setTargetID] = useState('');
	const [queueTargets, setQueueTargets] = useState<string[]>([]);
	const [anchorLinks, setAnchorLinks] = useState<IAnchorLink[]>([]);

	const addAnchorLink = (link: IAnchorLink) => {
		// if (anchorLinks.current.some(item => item.id === link.id)) {
		//     return;
		// }

		// anchorLinks.current.push(link);
		if (anchorLinks.some((item) => item.id === link.id)) {
			return;
		}
		setAnchorLinks([...anchorLinks, link]);
	};

	const setTarget = (newTarget: string) => {
		// setQueueTargets([...queueTargets, newTarget]);
		if (!targetID) {
			setTargetID(newTarget);
		}
		setQueueTargets([...queueTargets, newTarget]);
	};
	const delTarget = (target: string) => {
		let nevQueueTargets = queueTargets.filter((item) => target !== item);
		if (target !== targetID) {
			setQueueTargets(nevQueueTargets);
			return;
		}
		// setTargetID('');
		setTargetID(nevQueueTargets.shift() || '');
		setQueueTargets(nevQueueTargets);
	};

	return (
		<AnchorContext.Provider
			value={{
				targetID,
				anchorLinks: anchorLinks,
				setTarget,
				delTarget,
				addAnchorLink,
			}}>
			{children}
		</AnchorContext.Provider>
	);
};

export default AnchorContext;
