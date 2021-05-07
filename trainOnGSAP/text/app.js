const timeline = gsap.timeline();

timeline.to("#text", {
    delay: 1,
    text: {
        speed: 1,
        value: "Vue.js",
        delimiter: "",
        newClass: "vue",
        oldClass: "normal"
    },
    ease: "none"
}).to('#text', {
    delay: 1,
    duration: 1,
    text: {
        value: "Angular",
        delimiter: "",
        newClass: "angular",
        oldClass: "normal"
    },
    ease: "power2"
}).to('#text', {
    delay: 1,
    text: {
        speed: 1,
        padSpace: true,
        value: "React",
        delimiter: "",
        newClass: "react",
    },
    ease: "none"
});