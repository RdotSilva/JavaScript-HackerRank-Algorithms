// https://www.hackerrank.com/challenges/plus-minus/problem

const plusMinus = arr => {
	let pos = 0;
	let neg = 0;
	let zero = 0;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === 0) {
			zero++;
		} else if (arr[i] > 0) {
			pos++;
		} else if (arr[i] < 0) {
			neg++;
		}
	}
	console.log(pos / arr.length);
	console.log(neg / arr.length);
	console.log(zero / arr.length);
};

plusMinus([-4, 3, -9, 0, 4, 1]);
