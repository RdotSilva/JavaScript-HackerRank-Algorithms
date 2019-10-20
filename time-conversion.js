// https://www.hackerrank.com/challenges/time-conversion/problem

const timeConversion = s => {
	let hours = s.slice(0, 2);
	let dayNight = s.slice(-2);
	let convertedTime = "";

	if (dayNight === "PM") {
		if (hours === "12") {
			convertedTime = hours + s.slice(2, 8);
		} else {
			hours = parseInt(hours) + 12;
			convertedTime = hours + s.slice(2, 8);
		}
	} else if (hours === "12") {
		hours = "00";
		convertedTime = hours + s.slice(2, 8);
	} else {
		convertedTime = hours + s.slice(2, 8);
	}
	return convertedTime;
};

timeConversion("06:40:03AM");
