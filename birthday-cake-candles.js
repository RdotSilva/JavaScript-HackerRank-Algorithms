//https://www.hackerrank.com/challenges/birthday-cake-candles/problem

const birthdayCakeCandles = arr => {
	let total = 0;
	let highest = 0;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > highest) {
			highest = arr[i];
		}
	}

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === highest) {
			total++;
		}
	}

	return total;
};

birthdayCakeCandles([4, 4, 1, 3]);
