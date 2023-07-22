const MULTIPLE = 20;
const mouseOverContainer = document.querySelector(".rotate-container");
const element = document.querySelector(".card");

function transformElement(x, y) {
    let box = element.getBoundingClientRect();
    let calcX = -(y - box.y - (box.height / 2)) / MULTIPLE;
    let calcY = (x - box.x - (box.width / 2)) / MULTIPLE;

    element.style.transform = "rotateX(" + calcX + "deg) "
        + "rotateY(" + calcY + "deg)";
}

function glowyEffect(x, y) {
    let box = element.getBoundingClientRect();

    element.querySelector('.glow').style.backgroundImage = `
        radial-gradient(circle at  
            ${x - box.x}px
            ${y - box.y}px,
            #ffffff15,
            #0000000f,
            #ffffff15 15%, 
            transparent 20%
        )
      `;
}

mouseOverContainer.addEventListener('mousemove', (e) => {
    window.requestAnimationFrame(function () {
        transformElement(e.clientX, e.clientY);
        glowyEffect(e.clientX, e.clientY);
    });
});

mouseOverContainer.addEventListener('mouseleave', (e) => {
    window.requestAnimationFrame(function () {
        element.style.transform = "rotateX(0) rotateY(0)";
        element.querySelector('.glow').style.backgroundImage = `
        radial-gradient(circle at center, #ffffff15, #0000000f, #ffffff15 15%, transparent 20%
        )
      `;
    });
});