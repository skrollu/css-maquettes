gsap.registerPlugin(ScrollTrigger)

//Layered sections effect 

let sections = gsap.utils.toArray(".panel");

sections.forEach((panel, i) => {
  ScrollTrigger.create({
    trigger: panel,
    start: "top top", 
    pin: true, 
    pinSpacing: false,
    markers: true,
  });
});


ScrollTrigger.create({
  snap: 1 / (sections.length - 1) // snap whole page to the closest section!
});
