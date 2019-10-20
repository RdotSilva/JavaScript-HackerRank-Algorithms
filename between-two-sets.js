// https://www.hackerrank.com/challenges/between-two-sets/problem

const getTotalX = (a, b) => {
	let counter = 0;
	let aMax = Math.max(...a);
	let bMax = Math.max(...b);
	let maxOfBoth = aMax > bMax ? aMax : bMax;

	for (let i = 1; i <= maxOfBoth; i++) {
		if (a.every(num => i % num == 0)) {
			if (b.every(num => num % i == 0)) {
				counter++;
			}
		}
	}
	return counter;
};

getTotalX([2, 4], [16, 32, 96]);
