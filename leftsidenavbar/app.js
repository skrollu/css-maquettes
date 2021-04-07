const closeBtn = document.querySelector("#btn-close");
const openBtn = document.querySelector("#btn-open");
const menu = document.querySelector('.menu')
const content = document.querySelector('.content')

openBtn.addEventListener("click", () => {
    menu.style.transform = `translateX(0px)`;
    content.style.marginLeft = `300px`;
    openBtn.style.opacity = '0'
})

closeBtn.addEventListener("click", () => {
    menu.style.transform = `translateX(-${300}px)`;
    content.style.marginLeft = `0px`;
    openBtn.style.opacity = '1'
});