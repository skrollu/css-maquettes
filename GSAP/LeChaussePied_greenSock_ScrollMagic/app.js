// init controller
var controller = new ScrollMagic.Controller();

//Tween Gsap
var tween = TweenMax.from("#reebook-img", 1, { y: -200, x: -500, rotation: -50, ease: Power2.easeInOut})
var tween2 = TweenMax.from("#lacoste-img", 1, { y: 50, x:-150, rotation: 15, ease: Power2.easeInOut})
var tween3 = TweenMax.staggerFromTo(".reeLi", 0.5,
      { opacity: 0, y: -20, ease: Power4.easeIn},
      { opacity: 1, y: 0, ease: Power4.easeIn},
      0.1
)

var tween4 = TweenMax.staggerFromTo(".btn", 0.5,
      { opacity:0, rotationX: -180, ease: Power2.linear},
      { opacity:1, rotationX: 0, ease: Power2.linear},
      0
)

// create a scene
var scene = new ScrollMagic.Scene({
    //duration: 100, // the scene should last for a scroll distance of 100px
    offset: 100, // start this scene after scrolling for 50px
    reverse: false,
    triggerHook: 0.5 //position du trigger sur l'écran valeur en tre 0 (haut) et  1(bas) 0.5 = milieu
})
    /*.addIndicators({
        name: 'Reebook img',
        indent: 200,
        colorStart: 'red'
    })*/
    .setPin('animate1') // pins the element for the the scene's duration
    .setTween(tween)
    .addTo(controller); // assign the scene to the controller

// create a scene
var scene2 = new ScrollMagic.Scene({
    //duration: 100, // the scene should last for a scroll distance of 100px
    offset: 750, // start this scene after scrolling for 50px
    reverse: false,
    triggerHook: 0.5 //position du trigger sur l'écran valeur en tre 0 (haut) et  1(bas) 0.5 = milieu
})
    /*.addIndicators({
        name: 'Lacoste img',
        indent: 200,
        colorStart: 'green'
    })*/
    .setPin('animate2') // pins the element for the the scene's duration
    .setTween(tween2)
    .addTo(controller); // assign the scene to the controller

    // create a scene for li apparition
var scene3 = new ScrollMagic.Scene({
    //duration: 100, // the scene should last for a scroll distance of 100px
    offset: 100, // start this scene after scrolling for 50px
    //reverse: false,
    triggerHook: 0.5 //position du trigger sur l'écran valeur en tre 0 (haut) et  1(bas) 0.5 = milieu
})
    /*.addIndicators({
        name: 'Ree LI',
        indent: 100,
        colorStart: 'blue'
    })*/
    .setPin('reeLi') // pins the element for the the scene's duration
    .setTween(tween3)
    .addTo(controller); // assign the scene to the controller

    var scene4 = new ScrollMagic.Scene({
    //duration: 100, // the scene should last for a scroll distance of 100px
    offset: 400, // start this scene after scrolling for 50px
    //reverse: false,
    triggerHook: 0.5 //position du trigger sur l'écran valeur en tre 0 (haut) et  1(bas) 0.5 = milieu
})
    /*.addIndicators({
        name: 'BTN',
        indent: 100,
        colorStart: 'green'
    })*/
    .setPin('btn') // pins the element for the the scene's duration
    .setTween(tween4)
    .addTo(controller); // assign the scene to the controller