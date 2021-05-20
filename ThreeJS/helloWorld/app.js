import { OrbitControls } from 'https://cdn.skypack.dev/three@0.128.0/examples/jsm/controls/OrbitControls.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000);

scene.add(new THREE.AxesHelper(1));
scene.add(camera);
camera.position.z = 2;
camera.position.y = 0.5;
camera.position.x = 0.5;

const cube = new THREE.Mesh(new THREE.BoxBufferGeometry(1,1,1), new THREE.MeshNormalMaterial()) //obj composé d'une géométrie quiest un ens de pts pour créer des formes et un Material qui permet d'y poser des textures (simplifié)
scene.add(cube)

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); //Evite de trop détailler le rendu ce qui augmente la perte de performance si l'ecran a une résolution forte
document.body.appendChild( renderer.domElement ); //créer un element canvas dans le dom

const controls = new OrbitControls(camera, renderer)

function tick() {
    renderer.render(scene, camera)
/*     camera.position.x += 0.01;
    camera.lookAt(0,0,0) */
    requestAnimationFrame(tick)
}

tick();

window.addEventListener('resize', e => {
    camera.aspect = window.innerWidth/window.innerHeight;
    camera.updateProjectionMatrix(); //met à j la cam
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));  //si on glisse la fenetre sur un nouvel ecran le ratio des pixel doit etre recalculé
})