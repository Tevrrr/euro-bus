/** @format */

import { useContext } from 'react';
import AnchorContext from '../AnchorContext';
import { IAnchorTarget } from '../types/IAnchorTarget';
export const useAnchorTarget = (name: string): IAnchorTarget => {
	const { addAnchorLink, setTarget, delTarget } = useContext(AnchorContext);
	const id = `${name}`;
    
	addAnchorLink({ id, name });
	return {
		id,
		onViewportEnter() {
			setTarget(id);
		},
		onViewportLeave() {
			delTarget(id);
		},
		viewport: { amount: 0.1 },
	};
};
