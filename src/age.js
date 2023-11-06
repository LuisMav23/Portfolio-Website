const year = 2003;
const month = 4;
const day = 23;
const hours = 0;
const minutes = 0;
const seconds = 0;
const milliseconds = 0;

const dateInGMTPlus8 = new Date(Date.UTC(year, month, day, hours - 8, minutes, seconds, milliseconds));

const timestampInMilliseconds = dateInGMTPlus8.getTime();

let ageEl = document.getElementById("age");

setInterval(() => {
	let time = (new Date() - new Date(timestampInMilliseconds)) / (1000 * 60 * 60 * 24 * 365.25); // milliseconds per year
	ageEl.innerText = time.toString().substring(0, 12);
}, 50);