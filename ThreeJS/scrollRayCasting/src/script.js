import './style.css'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import * as dat from 'dat.gui'
import { Mesh, MeshBasicMaterial, PlaneBufferGeometry, TextureLoader, WebGLRenderer, Vector2, Scene, PointLight, PerspectiveCamera, Clock, Raycaster } from 'three'

//texture Loader
const textureLoader = new TextureLoader()

// Debug
const gui = new dat.GUI()

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new Scene()

const geometry = new PlaneBufferGeometry(1, 1.3)

for(let i = 0; i < 4; i++) {
    const material = new MeshBasicMaterial({
        map: textureLoader.load(`./img/${i}.jpg`)
    })

    const image = new Mesh(geometry, material);
    image.position.set(Math.random() + 0.3, -i*1.8)
    scene.add(image);
}
let objs = []

scene.traverse(object => {
    if (object.isMesh) {
        console.log(object)
    }
})

// Lights
const pointLight = new PointLight(0xffffff, 0.1)
pointLight.position.x = 2
pointLight.position.y = 3
pointLight.position.z = 4
scene.add(pointLight)

/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
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
const camera = new PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.x = 0
camera.position.y = 0
camera.position.z = 2
scene.add(camera)

gui.add(camera.position, 'y').min(-5).max(5)

// Controls
// const controls = new OrbitControls(camera, canvas)
// controls.enableDamping = true

/**
 * Renderer
 */
const renderer = new WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

/** Mouse */
window.addEventListener('wheel', onMouseWheel)

let y = 0;
let position = 0;

function onMouseWheel(event) {
    y = event.deltaY * 0.0007;}

/**
 * Animate
 */
const raycaster = new Raycaster();
const mouse = new Vector2();
window.addEventListener('mousemove', e => {
    mouse.x = e.clientX / sizes.width * 2 - 1;
    mouse.y = -( e.clientY / sizes.height ) * 2 + 1;
})

const clock = new Clock()

const tick = () =>
{

    const elapsedTime = clock.getElapsedTime()

    // Update objects
    position += y;
    y *= 0.9;

    camera.position.y = - position

    //Raycaster
    raycaster.setFromCamera(mouse, camera)
    const intersects = raycaster.intersectObjects(objs);
    for(const intersect of intersects) {
        //console.log('intersected')
        intersect.object.scale.set(1.1, 1.1)

    }

    for(const object of objs) {
        if(!intersects.find(intersect => intersect.object === object)) {
            //console.log('not intersected')
            object.position.scale.set(1, 1)
        }
    }
    // Update Orbital Controls
    // controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()