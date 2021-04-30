gsap.registerPlugin(ScrollTrigger);

const title = document.querySelectorAll('.title h1 span')

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

console.log("letter 1", letters1)
for (let i = 0; i < letters1.length; i++) {
  gsap.to(`.shaka${i+1}`, {
    x : (-500 + (i * 100)),
    y: 250,
    scale: 0.3,
    scrollTrigger: {
      start: 'top, top',
      scrub: true,
    }
  })
}

for (let i = 0; i < letters2.length; i++) {
  gsap.to(`.ponk${i+1}`, {
    x : (100 + (i * 100)),
    y: 250,
    scale: 0.3,
    scrollTrigger: {
      start: 'top, top',
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
}

gsap.to(".social-network", {
  y: -400,
  scrollTrigger: {
    start: 'top, top',
    scrub: true,
  }
});

gsap.to(".blur", {
  y: -300,
  scrollTrigger: {
    start: 'top, top',
    scrub: true
  }
});