// https://www.hackerrank.com/challenges/diagonal-difference/problem

const diagonalDifference = arr => {
	let one = 0;
	let two = 0;

	for (let i = 0; i < arr.length; i++) {
		one += arr[i][i];
		two += arr[arr.length - 1 - i][i];
	}
	return Math.abs(one - two);
};

diagonalDifference([[11, 2, 4], [4, 5, 6], [10, 8, -12]]);
