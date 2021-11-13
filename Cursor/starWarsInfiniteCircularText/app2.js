//split plain text in span
const letters = document.querySelectorAll(".letter");
const numberOfLetters = letters.length;
const circleSize = 360; //360 deg in a circle

letters.forEach((el, index) => {
	el.style.transform = "rotate(" + index * (circleSize / numberOfLetters) + "deg)";
});

/* document.addEventListener("mousemove", (e) => {
	text.style.left = e.pageX + "px";
	text.style.top = e.pageY + "px";
});
 */
