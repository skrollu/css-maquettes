gsap.registerPlugin(MotionPathPlugin);

gsap.to('.rect', {
    duration: 4,
    ease: "power3.in",
    // cubic bezier coordinates (anchor, two control points, anchor, two control points, etc.):
    motionPath: {
        path: [{ x: 0, y: 0 }, { x: 200, y: 0 }, { x: 300, y: 500 }, { x: 500, y: 500 }],
    }
})