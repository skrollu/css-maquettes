const imgLetters = document.querySelectorAll(".img-letter");

const numberOfLetters = imgLetters.length;
const circleSize = 360; //360 deg in a circle

imgLetters.forEach((el, index) => {
	el.style.transform = "rotate(" + index * (circleSize / numberOfLetters) + "deg)";
});
