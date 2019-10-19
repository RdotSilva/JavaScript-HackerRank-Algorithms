// https://www.hackerrank.com/challenges/staircase/problem

const staircase = n => {
	for (let i = 1; i <= n; i++) {
		for (var j = 0; j < n - i; j++) {
			process.stdout.write(" ");
		}
		for (var k = 0; k < n - j; k++) {
			process.stdout.write("#");
		}
		process.stdout.write("\n");
	}
};

staircase(6);
