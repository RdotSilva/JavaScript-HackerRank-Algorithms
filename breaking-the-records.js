// https://www.hackerrank.com/challenges/breaking-best-and-worst-records/problem

const breakingRecords = scores => {
	let minScore = scores[0];
	let maxScore = scores[0];
	let maxCount = 0;
	let minCount = 0;

	for (let i = 0; i < scores.length; i++) {
		if (scores[i] > maxScore) {
			maxScore = scores[i];
			maxCount++;
		} else if (scores[i] < minScore) {
			minScore = scores[i];
			minCount++;
		}
	}
	return [maxCount, minCount];
};

breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1]);
