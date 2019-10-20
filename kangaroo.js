// https://www.hackerrank.com/challenges/kangaroo/problem

const kangaroo = (x1, v1, x2, v2) => {
	let k1 = x1 + v1;
	let k2 = x2 + v2;

	if (k1 === k2) {
		return "YES";
	}

	for (let i = 0; i < 10000; i++) {
		k1 += v1;
		k2 += v2;
		if (k1 === k2) {
			return "YES";
		}
	}
	return "NO";
};

console.log(kangaroo(2564, 5393, 5121, 2836));
