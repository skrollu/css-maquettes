const container = document.querySelector(".container");
const button = document.querySelector('.drop-btn')

container.addEventListener("mouseenter", () => {
  container.style.height = `${container.scrollHeight}px`
});

container.addEventListener("mouseleave", () => {
  container.style.height = `${button.scrollHeight}px`
});
