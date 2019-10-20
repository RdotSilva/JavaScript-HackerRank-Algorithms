// https://www.hackerrank.com/challenges/apple-and-orange/problem

const countApplesAndOranges = (s, t, a, b, apples, oranges) => {
	let apple = 0;
	let orange = 0;

	for (let i = 0; i < apples.length; i++) {
		if (a + apples[i] >= s && a + apples[i] <= t) {
			apple++;
		}
	}

	for (let i = 0; i < oranges.length; i++) {
		if (b + oranges[i] >= s && b + oranges[i] <= t) {
			orange++;
		}
	}
	console.log(apple);
	console.log(orange);
};

countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6]);
