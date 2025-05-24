const timer = (ms: number) => {
	return new Promise((resolve) => setTimeout(resolve, ms));
};

const requestTimes: number[] = [];

export const limitFetch = async (requestFunction: () => Promise<any>): Promise<any> => {
	// get the date
	const now = Date.now();
	// convert it minute format
	const oneSecondAgo = now - 1000;
	const oneMinuteAgo = now - 60000;

	// c
	const recentPerSecond = requestTimes.filter((t) => t > oneSecondAgo);
	const recentPerMinute = requestTimes.filter((t) => t > oneMinuteAgo);

	while (recentPerSecond.length >= 3 || recentPerMinute.length >= 60) {
		await timer(100);
		return limitFetch(requestFunction);
	}
	
	requestTimes.push(now);
	return await requestFunction();
};
