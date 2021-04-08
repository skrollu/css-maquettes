const closeBtn = document.querySelector("#btn-close");
const openBtn = document.querySelector("#btn-open");
const menu = document.querySelector('.menu')
const content = document.querySelector('.content')
const mainContent = document.querySelector('.main-content')

let menuIsOpen = 0;

openBtn.addEventListener("click", () => {
    menuIsOpen = 1;
    menu.style.transform = `translateX(0px)`;
    content.style.marginLeft = `300px`;
    openBtn.style.opacity = '0'
})

closeBtn.addEventListener("click", () => {
    if(menuIsOpen === 1) {
        menuIsOpen = 0;
    }
    menu.style.transform = `translateX(-${300}px)`;
    content.style.marginLeft = `0px`;
    openBtn.style.opacity = '1'
});

mainContent.addEventListener('click', () => {
    if(menuIsOpen === 1) {
        menuIsOpen = 0;
        menu.style.transform = `translateX(-${300}px)`;
        content.style.marginLeft = `0px`;
        openBtn.style.opacity = '1'
    }
})