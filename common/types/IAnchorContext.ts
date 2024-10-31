/** @format */

import { IAnchorLink } from './IAnchorLink';

export interface IAnchorContext {
	targetID: string;
	anchorLinks: IAnchorLink[];
	addAnchorLink: (link: IAnchorLink) => void;
	setTarget: (newTarget: string) => void;
	delTarget: (target: string) => void;
}
