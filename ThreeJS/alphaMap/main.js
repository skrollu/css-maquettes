import './style.css'
import * as THREE from 'three'
//import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import * as dat from 'dat.gui'

//Texture loader
const loader = new THREE.TextureLoader() 
const height = loader.load('./img/height.png')
const height2 = loader.load('./img/height2.jpg')
const height3 = loader.load('./img/height3.png')
const alpha = loader.load('./img/alpha.png')
const texture = loader.load('./img/texture.jpg')

// Debug
const gui = new dat.GUI()

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Objects
const geometry = new THREE.PlaneBufferGeometry(2,2,64,64)
const material = new THREE.MeshStandardMaterial({
  color: "gray",
  map: texture,
  displacementMap: height2,
  displacementScale: .4,
  alphaMap: alpha,
  transparent: true,
  depthTest: false
})
const plane = new THREE.Mesh(geometry, material)
scene.add(plane);
plane.rotation.x = 181;

//gui.add(plane.rotation, 'x',0,600)

// Lights
const pointLight = new THREE.PointLight('#00b3ff', 3)
pointLight.position.x = .2
pointLight.position.y = 10
pointLight.position.z = 4.4
scene.add(pointLight)

/*
gui.add(pointLight.position, 'x', 0 , 10)
gui.add(pointLight.position, 'y', 0 , 10)
gui.add(pointLight.position, 'z', 0 , 10) 

const color = { color: '#00ff00' }
 gui.addColor(color, 'color').onChange(() => {
  pointLight.color.set(color.color)
}) 
*/
/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth * 0.7, // to make the canvas smaller
    height: window.innerHeight
}

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth * 0.7 // to make the canvas smaller on repaint
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.x = 0
camera.position.y = 0
camera.position.z = 2
scene.add(camera)

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

/**
 * Animate
 */
document.addEventListener('mousemove', animateTerrain)
let mouseY = 0;
function animateTerrain(event) {
  mouseY = event.clientY;
}

const clock = new THREE.Clock()

const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()
    // Update objects
    plane.rotation.z = .5 * elapsedTime
    plane.material.displacementScale = .2 + mouseY * 0.0008;

    // Render
    renderer.render(scene, camera)
    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()