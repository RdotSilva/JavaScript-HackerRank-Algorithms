// https://www.hackerrank.com/challenges/a-very-big-sum/problem

const aVeryBigSum = ar => {
	let total = 0;

	for (let i = 0; i < ar.length; i++) {
		total += parseInt(ar[i]);
	}

	return total;
};

aVeryBigSum([1000000001, 1000000002, 1000000003, 1000000004, 1000000005]);
