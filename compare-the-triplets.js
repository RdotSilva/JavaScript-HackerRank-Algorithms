// https://www.hackerrank.com/challenges/compare-the-triplets/problem

const compareTriplets = (a, b) => {
	let alice = 0;
	let bob = 0;
	let container = [0, 0];

	for (let i = 0; i < a.length; i++) {
		if (a[i] === b[i]) {
			continue;
		} else if (a[i] > b[i]) {
			container[0]++;
		} else {
			container[1]++;
		}
	}
	return container;
};

compareTriplets([5, 6, 7], [3, 6, 10]);
