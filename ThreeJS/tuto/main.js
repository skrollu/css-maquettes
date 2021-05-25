import { Scene, Mesh,  Clock, PerspectiveCamera, AxesHelper, WebGLRenderer, SphereGeometry, MeshLambertMaterial, PointLight} from 'three'
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'

const div = document.querySelector('.three-app')

const scene = new Scene();
const camera = new PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000);

scene.add(new AxesHelper(1));
scene.add(camera);
camera.position.z = 5;
camera.position.y = 0.2;
camera.position.x = 0.5;

const renderer = new WebGLRenderer({ 
  antialias: true, 
}); 

renderer.setClearColor("#e5e5e5")
renderer.setSize( window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
div.appendChild( renderer.domElement );

window.addEventListener('resize', e => {
  camera.aspect = window.innerWidth/window.innerHeight;
  camera.updateProjectionMatrix(); //met à j la cam
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));  //si on glisse la fenetre sur un nouvel ecran le ratio des pixel doit etre recalculé
})

const controls = new OrbitControls(camera, renderer.domElement);
const clock = new Clock();

var geometry = new SphereGeometry(1,30,30)
var material = new MeshLambertMaterial({color: "red"})
var mesh = new Mesh(geometry, material);

scene.add(mesh);

const light = new PointLight( 0xFFFFFFF, 1, 500 ); //Lumière blanche
light.position.set( 10, 0, 25);
scene.add( light );

function render() {
  const time = clock.getElapsedTime();
  mesh.rotation.y = time * 0.31;
  renderer.render(scene, camera)
  controls.update()
  requestAnimationFrame(render)
}
render();

const tl = gsap.timeline().delay(.3)
tl.to(mesh.scale, 10, { x: 2, ease: Expo.easeOut})


