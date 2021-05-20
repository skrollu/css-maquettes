import { Scene, PerspectiveCamera, AxesHelper, WebGLRenderer, Mesh, BoxBufferGeometry, MeshNormalMaterial} from 'three'
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'

const scene = new Scene();
const camera = new PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000);

scene.add(new AxesHelper(1));
scene.add(camera);
camera.position.z = 2;
camera.position.y = 0.5;
camera.position.x = 0.5;

const cube = new Mesh(new BoxBufferGeometry(1,1,1), new MeshNormalMaterial()) //obj composé d'une géométrie quiest un ens de pts pour créer des formes et un Material qui permet d'y poser des textures (simplifié)
scene.add(cube)

const renderer = new WebGLRenderer({ antialias: true }); //antialias enlève l'alisaing sur les bords du cube
renderer.setSize( window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); //Evite de trop détailler le rendu ce qui augmente la perte de performance si l'ecran a une résolution forte
document.body.appendChild( renderer.domElement ); //créer un element canvas dans le dom

const controls = new OrbitControls(camera, renderer.domElement);

function tick() {
    renderer.render(scene, camera)
    controls.update()
    requestAnimationFrame(tick)
}

tick();

window.addEventListener('resize', e => {
    camera.aspect = window.innerWidth/window.innerHeight;
    camera.updateProjectionMatrix(); //met à j la cam
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));  //si on glisse la fenetre sur un nouvel ecran le ratio des pixel doit etre recalculé
})