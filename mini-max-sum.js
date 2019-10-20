// https://www.hackerrank.com/challenges/mini-max-sum/problem

const miniMaxSum = arr => {
	let sorted = arr.sort();
	let smallest = arr.slice(0, 4);
	let largest = arr.slice(1, 5);
	let min = 0;
	let max = 0;
	smallest.forEach(element => {
		min += element;
	});
	largest.forEach(element => {
		max += element;
	});
	console.log(`${min} ${max}`);
};

miniMaxSum([1, 5, 3, 7, 9]);
