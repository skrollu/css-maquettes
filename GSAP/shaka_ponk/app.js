gsap.registerPlugin(ScrollTrigger);

const title = document.querySelectorAll('.title h1 span')
console.log(title)
const span1 = title[0]
const span2 = title[2]

charming(span1, {
  classPrefix: 'shaka'
})
charming(span2, {
  classPrefix: 'ponk'
})

const letters1 = Array.from(span1.childNodes)
const letters2 = Array.from(span2.childNodes)

console.log(letters1)

const timeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".background",
    start: 'top top',
    scrub: true,
    /*   markers: {
    startColor: "green",
    endColor: "red",
    fontSize: "18px",
    fontWeight: "bold",
    indent: 20
  } */
  }
})

timeline.to('.social-network', { y: -400 })
  .to('.blur', { y: -250 }, "<")

for (let i = 0; i < letters1.length; i++) {
  timeline.to(`.shaka${i + 1}`, {
    x: (-500 + (i * 100)),
    y: 250,
    scale: 0.3,
  }, "<")
}

for (let i = 0; i < letters2.length; i++) {
  timeline.to(`.ponk${i + 1}`, {
    x: (100 + (i * 100)),
    y: 250,
    scale: 0.3,
  }, "<")
}

const tl2 = gsap.timeline({
  reversed: false,
  scrollTrigger: {
    trigger: ".song",
    start: "top 80%"
  }})

tl2.from(".youtube-one", { duration: 1, x: -200, y:-50, alpha: 0 })
  .from(".youtube-two", { duration: 1, x: 200, y: -50, alpha: 0 })
.from('.description-text', { y: -50, alpha: 0, stagger: 0.1})