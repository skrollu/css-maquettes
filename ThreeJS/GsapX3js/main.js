import { Scene, Mesh, Raycaster, Vector2, Clock, PerspectiveCamera, AxesHelper, WebGLRenderer, SphereGeometry, MeshLambertMaterial, PointLight, BoxGeometry } from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

const div = document.querySelector('.three-app')

var scene = new Scene();
//scene.add(new AxesHelper(1));
var camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
camera.position.z = 5;

var renderer = new WebGLRenderer({ antialias: true });
renderer.setClearColor("#e5e5e5");
renderer.setSize(window.innerWidth, window.innerHeight);
div.appendChild(renderer.domElement);

window.addEventListener('resize', () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;

  camera.updateProjectionMatrix();
})

var raycaster = new Raycaster();
var mouse = new Vector2();

var geometry = new SphereGeometry(1,30,30)
var geometry2 = new BoxGeometry(1, 1, 1);
var material = new MeshLambertMaterial({ color: 0xF7F7F7 });
var material2 = new MeshLambertMaterial({ color: "red" });
//var mesh = new Mesh(geometry, material);

//scene.add(mesh);

var meshX = -10;
for (var i = 0; i < 5; i++) {
  var mesh = new Mesh(geometry, material);
  mesh.position.x = (Math.random() - 0.5) * 10;
  mesh.position.y = (Math.random() - 0.5) * 10;
  mesh.position.z = (Math.random() - 0.5) * 10;
  scene.add(mesh);

  var mesh2 = new Mesh(geometry2, material2);
  mesh2.position.x = (Math.random() - 0.5) * 10;
  mesh2.position.y = (Math.random() - 0.5) * 10;
  mesh2.position.z = (Math.random() - 0.5) * 10;
  scene.add(mesh2);
}

var light = new PointLight(0xFFFFFF, 1, 1000)
light.position.set(0, 0, 0);
scene.add(light);

var light2 = new PointLight(0xFFFFFF, 2, 1000)
light2.position.set(0, 0, 25);
scene.add(light2);

const controls = new OrbitControls(camera, renderer.domElement);

var render = function () {
  raycaster.setFromCamera(mouse, camera);
  controls.update()
  renderer.render(scene, camera);
  requestAnimationFrame(render);
}

function onMouseMove(event) {
  event.preventDefault();

  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;

  var intersects = raycaster.intersectObjects(scene.children, true);
  for (var i = 0; i < intersects.length; i++) {
    this.tl = new TimelineMax();
    this.tl.to(intersects[i].object.scale, 1, { x: 2, ease: Expo.easeOut })
    this.tl.to(intersects[i].object.scale, .5, { x: .5, ease: Expo.easeOut })
    this.tl.to(intersects[i].object.position, .5, { x: 2, ease: Expo.easeOut })
    this.tl.to(intersects[i].object.rotation, .5, { y: Math.PI * .5, ease: Expo.easeOut }, "=-1.5")
  }
}

window.addEventListener('mousemove', onMouseMove);
render();

/** 
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

function onMouseMove(event) {
  // calculate mouse position in normalized device coordinates
  // (-1 to +1) for both components
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;
}

function render() {
  // update the picking ray with the camera and mouse position
  raycaster.setFromCamera(mouse, camera);
  // calculate objects intersecting the picking ray
  const intersects = raycaster.intersectObjects(scene.children);
  for (let i = 0; i < intersects.length; i++) {
    intersects[i].object.material.color.set(0xff0000);
  }
  renderer.render(scene, camera);
}
*/