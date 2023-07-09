import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// const geometry = new THREE.BoxGeometry(1, 1, 1);
// const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
// const cube = new THREE.Mesh(geometry);
// scene.add(cube);

camera.position.z = 2;
camera.position.x = 0.5;
camera.position.y = 0.5;
camera.lookAt(new THREE.Vector3(0, 0, 0));

const loader = new GLTFLoader();
let mesh;

loader.load(
	"./assets/mya-wing/scene.glb",
	function (gltf) {
		mesh = gltf.scene.children[0];
		scene.add(gltf.scene);
	},
	undefined,
	function (error) {
		console.error("error", error);
	}
);

// Light
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(2, 2, 5);
scene.add(light);

function animate() {
	requestAnimationFrame(animate);

	mesh.rotation.y += 0.01;
	// cube.rotation.x += 0.01;
	// cube.rotation.y += 0.01;

	renderer.render(scene, camera);
}

animate();

renderer.render(scene, camera);
