import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

function main() {
	const canvas = document.querySelector(".card-screen");
	const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, canvas });
	renderer.setClearColor(0x000000, 0);

	// Camera
	const fov = 75;
	const aspect = 2; // the canvas default
	const near = 0.1;
	const far = 5;
	const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);

	camera.position.z = 2;
	camera.position.y = 0.5;
	camera.lookAt(new THREE.Vector3(0, 0, 0));

	const scene = new THREE.Scene();

	// Light
	{
		const color = 0x0000ff;
		const intensity = 1;
		const light = new THREE.DirectionalLight(color, intensity);
		light.position.set(-1, 2, 4);
		scene.add(light);
	}

	const loader = new GLTFLoader();
	let mesh = null;

	loader.load(
		"./assets/three_models/x-wing/scene.glb",
		function (gltf) {
			mesh = gltf.scene.children[0];
			scene.add(gltf.scene);
		},
		undefined,
		function (error) {
			console.error("error", error);
		}
	);

	function resizeRendererToDisplaySize(renderer) {
		const canvas = renderer.domElement;
		const pixelRatio = window.devicePixelRatio;
		const width = (canvas.clientWidth * pixelRatio) | 0;
		const height = (canvas.clientHeight * pixelRatio) | 0;
		const needResize = canvas.width !== width || canvas.height !== height;
		if (needResize) {
			renderer.setSize(width, height, false);
		}
		return needResize;
	}

	function render(time) {
		time *= 0.001;

		if (resizeRendererToDisplaySize(renderer)) {
			const canvas = renderer.domElement;
			camera.aspect = canvas.clientWidth / canvas.clientHeight;
			camera.updateProjectionMatrix();
		}

		if (mesh != null) {
			mesh.rotation.y -= 0.004;
		}

		renderer.render(scene, camera);

		requestAnimationFrame(render);
	}

	requestAnimationFrame(render);
}

main();
