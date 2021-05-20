gsap.registerPlugin(ScrollTrigger)

gsap.to(".e", 
{ 
    scrollTrigger: {
        trigger: ".e",
        /*  onEnter, onLeave, onEnterBack, onLeaveBack*/
        //toggleActions: "play pause resume reset",
        scrub: 2,
        /* Pin an element means it will appear to "stick" in 
        its starting position while the rest of the content c
        ontinues scrolling underneath it.  */
        pin: ".e",
        /* top bottom by default */
        start: "top center",
        /* bottom top by default */
        end: "50% 100px",
        markers: true,
    },
    duration: 4,
    x: 400,
    rotation: 360
})