import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from "body-scroll-lock";
import { MutableRefObject, useEffect } from "react";

export const useLockScroll = (target: MutableRefObject<null>, value:boolean) => {
	useEffect(() => {
		if (target.current) {
			if (value) {
				disableBodyScroll(target.current);
			} else {
				enableBodyScroll(target.current);
			}
		}
		return () => {
			clearAllBodyScrollLocks();
		};
	}, [target, value]);
};