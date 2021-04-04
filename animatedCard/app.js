const card = document.querySelector(".card");
const imageZoom = document.querySelector('.image-zoom')
const blocFocusTop = document.querySelector(".bloc-focus-top");
const blocFocusBottom = document.querySelector(".bloc-focus-bottom");
const blocContent = document.querySelector(".bloc-content-show");
const title = document.querySelector(".bloc-content-show h2");
const downloadLogo = document.querySelector(".bloc-content-show img");
const separation = document.querySelector(".card hr");
const allTxt = document.querySelectorAll(".card p");

const TLANIM = gsap.timeline({ paused: true });

TLANIM
  .fromTo(imageZoom, {scale: 1}, {scale: 2, y: -50, x:200, duration: 0.4,  ease:ExpoScaleEase.config(1, 2,"power2.inOut")})
  .to(blocFocusTop, { top: -30, left: -30, duration: 0.1 }, 0.5)
  .to(blocFocusBottom, { bottom: -30, right: -30, duration: 0.1 }, "-=0.1")
  //Dernier arg "-=0.1" est le départ de cette anim dans la timeline de l'anim globale
  .to(blocContent, { bottom: 200, duration: 0.2 }, '-=0.1')
  .from(title, { opacity: 0, duration: 0.2 }, '-=0.1')
  .from(downloadLogo, {scale: 0, duration: 0.2})
  .from(separation, { width: 0, duration: 0.2 }, '-=0.2')
  .from(allTxt, { opacity: 0, duration: 0.3, stagger: 0.2 });

card.addEventListener("mouseenter", () => {
  TLANIM.play();
});

card.addEventListener("mouseleave", () => {
     TLANIM.reverse();
});
