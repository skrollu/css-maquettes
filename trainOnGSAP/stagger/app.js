gsap.to('.box', {
    duration: 1,
    scale: 0.2,
    /* y: 40, */
    repeat: -1,
    yoyo: true, 
    ease: "power1.inOut",
    stagger: {
        /* each: 0.1, */
        amount: 1.5,
        from: "top",
        grid: "auto", /* [3, 10], */ /* "auto" */ /* [5, 12] */
        axis: "x",
        /* repeat: -1,
        yoyo: true, */
    }
})

gsap.to('.circle', {
    y: -20, 
    ease: "power1.inOut",
    stagger: {
        amount: 1,
        from: "top",
        axis: "x",
        repeat: -1,
        yoyo: true,
    }
})