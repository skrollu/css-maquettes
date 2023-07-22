// const $card = document.querySelector('.card');
// let bounds;

// function rotateToMouse(e) {
//     const mouseX = e.clientX;
//     const mouseY = e.clientY;
//     const leftX = mouseX - bounds.x;
//     const topY = mouseY - bounds.y;
//     const center = {
//         x: leftX - bounds.width / 2,
//         y: topY - bounds.height / 2
//     }
//     const distance = Math.sqrt(center.x ** 2 + center.y ** 2);

//     // scale3d(1.07, 1.07, 1.07)

//     //${ -center.x / 100 },
//     $card.style.transform = `
//     rotate3d(
//       ${center.y / 100},
//       0
//       0,
//       ${Math.log(distance) * 2}deg
//     )
//   `;

//     $card.querySelector('.glow').style.backgroundImage = `
//         radial-gradient(
//           circle at
//           ${center.x * 2 + bounds.width / 2}px
//           ${center.y * 2 + bounds.height / 2}px,
//           #ffffff10,
//           #0000000f
//         )
//       `;
// }

// $card.addEventListener('mouseenter', () => {
//     bounds = $card.getBoundingClientRect();
//     document.addEventListener('mousemove', rotateToMouse);
// });

// $card.addEventListener('mouseleave', () => {
//     document.removeEventListener('mousemove', rotateToMouse);
//     $card.style.transform = '';
//     $card.style.background = '';
// });
const multiple = 20;
const mouseOverContainer = document.querySelector(".rotate-container");
const element = document.querySelector(".card");

function transformElement(x, y) {
    let box = element.getBoundingClientRect();
    let calcX = -(y - box.y - (box.height / 2)) / multiple;
    let calcY = (x - box.x - (box.width / 2)) / multiple;

    element.style.transform = "rotateX(" + calcX + "deg) "
        + "rotateY(" + calcY + "deg)";
}

element.addEventListener('mousemove', (e) => {
    window.requestAnimationFrame(function () {
        transformElement(e.clientX, e.clientY);
    });
});

element.addEventListener('mouseleave', (e) => {
    window.requestAnimationFrame(function () {
        element.style.transform = "rotateX(0) rotateY(0)";
    });
});