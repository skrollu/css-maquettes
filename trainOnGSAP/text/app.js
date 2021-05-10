const words = [ "Mathieu", "a french developer" ]

gsap.to('.cursor', { duration: 0.7, opacity: 0, repeat: -1 })

let masterTL = gsap.timeline({ repeat: -1 })

masterTL
.from(".box", { duration: 1, x: "-50rem", ease: "power3.out"})
/* .from('.hi', { duration: 1, y: "50rem", ease: "power1.out"})
.to('.box', { height: "7rem" })

words.forEach(word => {
    let tl = gsap.timeline({ repeat: 1, yoyo: true, repeatDelay: 1});
    tl.to(".text", {
        duration: 1,
        text: {
            value: word,
        }
    })
    masterTL.add(tl);
}) */