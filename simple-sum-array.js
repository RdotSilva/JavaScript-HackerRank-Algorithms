// https://www.hackerrank.com/challenges/simple-array-sum/problem
// Given an array of integers, find the sum of its elements.

const simpleArraySum = ar => {
	let total = 0;
	for (const item of ar) {
		total += item;
	}
	return total;
};

simpleArraySum([1, 4, 3]);
