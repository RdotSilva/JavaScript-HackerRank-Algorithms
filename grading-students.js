// https://www.hackerrank.com/challenges/grading/problem

const gradingStudents = grades => {
	let newGrades = [];
	for (let i = 0; i < grades.length; i++) {
		if (grades[i] <= 37) {
			newGrades.push(grades[i]);
		} else if (grades[i] % 5 > 2) {
			newGrades.push(grades[i] + 5 - (grades[i] % 5));
		} else {
			newGrades.push(grades[i]);
		}
	}
	return newGrades;
};

gradingStudents([73, 67, 38, 33]);
