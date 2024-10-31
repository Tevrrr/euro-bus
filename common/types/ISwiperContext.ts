export interface ISwiperContext {
	isOpen: boolean;
	activeSwide: number;
	setIsOpen: (value: boolean) => void;
	setActiveSwide: (value: number) => void;
}