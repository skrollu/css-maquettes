//spli text in span
const text = document.querySelector(".text");
text.innerHTML = text.textContent.replace(/\S/g, "<span>$&</span>");

const element = document.querySelectorAll("span");
element.forEach((el, index) => {
	el.style.transform = "rotate(" + index * 19 + "deg)";
});

document.addEventListener("mousemove", (e) => {
	text.style.left = e.pageX + "px";
	text.style.top = e.pageY + "px";
});
