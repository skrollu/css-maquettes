//split plain text in span
const plainText = document.querySelector(".plain-text");
plainText.innerHTML = plainText.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

const element = document.querySelectorAll(".letter");
const size = element.length;
const circleSize = 360; //360 deg in a circle

element.forEach((el, index) => {
	el.style.transform = "rotate(" + index * (circleSize / size) + "deg)";
});

/* document.addEventListener("mousemove", (e) => {
	text.style.left = e.pageX + "px";
	text.style.top = e.pageY + "px";
});
 */
