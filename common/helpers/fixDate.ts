export const fixDate = (date: Date): string => {
    const fixDate = new Date(date);
	return fixDate.toLocaleString('ru', {
		year: 'numeric',
		month: '2-digit',
		day: '2-digit',
		hour: 'numeric',
		minute: 'numeric',
		second: 'numeric',
		hour12: false,
		timeZoneName: 'short',
	});
}