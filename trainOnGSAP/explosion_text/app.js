const title = document.querySelector('h1')
const snap = document.querySelector('h2')

charming(title)
charming(snap)

title.addEventListener('mouseenter', e => {
    
    let lettres = Array.from(e.target.childNodes)
    
    console.log(lettres)
    
    for(i = 0; i < lettres.length; i++) {
        TweenMax.to(lettres[i], {
            duration: 1,
            x: Math.floor(Math.random() * 500 - 250), // [-250; 250]
            y: Math.floor(Math.random() * 500 - 250), // [-250; 250]
            z: Math.floor(Math.random() * 500 - 250), // [-250; 250]
            rotation: Math.floor(Math.random() * 500 - 250),
            ease: Circ.easeOut
        })
    }
    
    title.addEventListener('mouseleave' , e => {
        
        for (let index = 0; index < lettres.length; index++) {
            TweenMax.to(lettres[index], {
                duration: 1,
                x: 0, // [-250; 250]
                y: 0, // [-250; 250]
                z: 0, // [-250; 250]
                rotation: 0,
                ease: Power4.easeIn
            })
        }
    })
})

let nodes = Array.from(snap.childNodes)

console.log(nodes)

for(i = 0; i < nodes.length; i++) {
    gsap.from(nodes[i], {
        duration: 2.5,
        x: Math.floor(Math.random() * 1000 - 500), // [-250; 250]
        y: Math.floor(Math.random() * -250), // [-250; 250]
        ease: Power4.easeIn
    })
}