import { MathUtils, Scene, PerspectiveCamera, VertexColors, AxesHelper, WebGLRenderer, Mesh, BoxBufferGeometry, MeshNormalMaterial, BufferGeometry, Points, PointsMaterial, Float32BufferAttribute, TextureLoader, Group, Clock, LineBasicMaterial, Line, SphereBufferGeometry} from 'three'
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'

const count = 100; //nb particules
const distance = 4;

const scene = new Scene();
const camera = new PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000);
const textureLoader = new TextureLoader();
const circleTexture = textureLoader.load('/circle.png');
const alphaMap = textureLoader.load('/alphaMap.png');

//scene.add(new AxesHelper(1));
scene.add(camera);
camera.position.z = 2;
camera.position.y = 0.5;
camera.position.x = 0.5;


const points = new Float32Array(count * 3);
const colors = new Float32Array(count * 3);
for (let i = 0; i < points.length; i++) {
  points[i] = MathUtils.randFloatSpread(distance * 2);
  colors[i] = Math.random() + 0.25; //+0.25 pour des couleurs plus claires
}

const geometry = new BufferGeometry();
geometry.setAttribute("position", new Float32BufferAttribute(points, 3)) //permet de prendre les points 3 par 3 pour les intégrer au système
geometry.setAttribute("color", new Float32BufferAttribute(colors, 3))

const pointMaterial = new PointsMaterial({ //creer un sprite qui fera toujours faca à la cam
  //color: 0xff0000,
  size: 0.25,
  vertexColors: VertexColors,
  /* sizeAttenuation: false */ // par defaut ceci est a true ce qui permet de mettre les elments eloigné plus petits que les plus prohces
  //map: circleTexture, texture de base
  transparent: true, //transparent et alpha test permettent de rendre les particules transparents pour celle qui se passent par dessus
  alphaTest: 0.5, // au pif pour une meilleur rendu qui permet de savoir si les element derrière doivent etre affiché ou non 
  alphaMap: alphaMap // plus efficace qu'une map avec un alpha test
})
const pointsObject = new Points(geometry, pointMaterial);
const group = new Group()
group.add(pointsObject)

const lineMaterial = new LineBasicMaterial({
  color: 0x000000,
  opacity: 0.05,
  //depthTest: false, //permet de mettre les lignes en dessous des particules pour ne pas les rendre visible quand proches de la cam 
  depthWrite: false
})
const lineObject = new Line(geometry, lineMaterial);
group.add(lineObject)

/* group.add(new Mesh(
  new SphereBufferGeometry(),
  new MeshNormalMaterial()
  )) */
  
  scene.add(group)
  
  const renderer = new WebGLRenderer({ 
    antialias: true, //antialias enlève l'alisaing sur les bords du cube
    alpha: true // alpha transparence du canvas autorisé
  }); 
  renderer.setClearColor("blue", 0)//pose une couleur pour le fond de canvas nimporte, on met l'alpha a zero (transparent)
  renderer.setSize( window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); //Evite de trop détailler le rendu ce qui augmente la perte de performance si l'ecran a une résolution forte
  document.body.appendChild( renderer.domElement ); //créer un element canvas dans le dom
  
  //const controls = new OrbitControls(camera, renderer.domElement); //permet de controler la caméra
  const clock = new Clock();
  
  let mouseX = 0;
  let mouseY = 0;
  window.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  })
  
  function tick() {
    const time = clock.getElapsedTime();
    //group.rotateY(0.001 * Math.PI) rendu sympa mais basé sur la fréquence d'appel à tick ce qui varrie selon l'ordinateur et a fréquence de l'écran on va plutot utilisé clock
    group.rotation.y = time * 0.1; // rotation en fonction du
    //permet de bouger le group suivant les mouvement de la souris
/*     const ratioX = (mouseX / window.innerWidth - 0.5) * 2; //ratio compris entre -1;1
    const ratioY = (mouseY / window.innerHeight - 0.5) * 2; //ratio compris entre -1;1
    group.rotation.y  = ratioX * Math.PI * .3
    group.rotation.x  = ratioY * Math.PI * .3 */
    
    renderer.render(scene, camera)
    //controls.update()
    requestAnimationFrame(tick)
  }
  
  tick();
  
  window.addEventListener('resize', e => {
    camera.aspect = window.innerWidth/window.innerHeight;
    camera.updateProjectionMatrix(); //met à j la cam
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));  //si on glisse la fenetre sur un nouvel ecran le ratio des pixel doit etre recalculé
  })