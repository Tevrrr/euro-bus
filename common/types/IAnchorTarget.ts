/** @format */

interface ViewportOptions {
	once?: boolean;
	margin?: string;
	amount?: 'some' | 'all' | number;
}

export interface IAnchorTarget {
	id: string;
	onViewportEnter: () => void;
	onViewportLeave: () => void;
	viewport: ViewportOptions;
}
