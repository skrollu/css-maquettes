const canvas = document.querySelector('canvas')
const video = document.querySelector('video')
const ctx = canvas.getContext('2d');

let posX = 100, posY = 0;

canvas.addEventListener('mousemove', e => {
    posX = e.offsetX;
    posY = e.offsetY;
    //console.log(posX, posY)
})

function anim() {
    ctx.clearRect(0,0,canvas.width, canvas.height);

    ctx.save(); //sauvegarde un état du canvas
    ctx.beginPath();
    ctx.rect(posX - 350/2, 0, 350, 750);
    //ctx.fill();
    ctx.clip();
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height)//utilise la balise video du code html que l'on dessine dans le canvas

    ctx.restore(); //restore l'état sauvegardé précédemment
    requestAnimationFrame(anim); //appelle environ 60 fois par sec 
}

anim();