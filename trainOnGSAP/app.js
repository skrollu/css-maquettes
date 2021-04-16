//const animation = gsap.to(".green", { duration: 1, y: -200});
/* const one = gsap.fromTo(".one",
            { x: -300}, 
             { duration: 4, delay: 1, x: 300, y: -300, ease: "power1.inOut"})
const two = gsap.fromTo(".two",
            { x: -300}, 
            { duration: 4, delay: 1, x: 300, y: -300, ease: "power2.inOut"})
const three = gsap.fromTo(".three",
            { x: -300}, 
             { duration: 4, delay: 1, x: 300, y: -300, ease: "power3.inOut"})
const four = gsap.fromTo(".four",
            { x: -300}, 
            { duration: 4, delay: 1, x: 300, y: -300, ease: "power4.inOut"})    */         

const box = gsap.fromTo(".box",
        { opacity: 0}, 
        { duration: 2, opacity: 1, height: 75, width: 75, y: -300, repeat: 1, yoyo: true, stagger: 0.1,
            onComplete: boxCompleted, onCompleteParams:["coucou je suis un parametre"],
            onStart: (/* params */) => {
                //console.log(params)
                console.log("This doesn't work within arrow functions because of how arrow functions are scoped so make sure to use a regular function if you need access to the targets. ")
                console.log("ici this créé une erreur", this.duration())
            }, onStartParams: ['uesh']
        })


function boxCompleted(param) {
    console.log('Le param de box: ', param)
    console.log("This duration: ", this.duration())
}

console.log("Lanimation de two dur: " , two.duration())
two.duration(3);
console.log("Lanimation de two dur: " , two.duration())
/* 
const tl = gsap.timeline({
    repeat: 2,
    yoyo: true,
    delay: 0.5,
    repeatDelay: 0.5,
    onComplete: timelineCompleted
});

tl.duration(0.2)

function timelineCompleted() {
    console.log("timelineCompleted")
}

tl.fromTo(".red", {x: -500, y:-300}, {duration: 1, x: 500, y: 300})
    .to(".red", {duration: 1, y:-200})
    .to(".yellow", { duration: 0, x:-100})
    .to(".green", { duration: 1, x:-100}, "<")
    .to(".one", { duration: 1, y:300}, "+=1")

console.log("la timeline dure: ",  tl.duration())

     */