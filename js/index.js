import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { CSS3DRenderer, CSS3DObject } from 'three/addons/renderers/CSS3DRenderer.js';

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x111111);

const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 0, 1);

const axesHelper = new THREE.AxesHelper(3);
scene.add(axesHelper);

const loader = new GLTFLoader();
loader.load( '../assets/pcModel.glb', function ( gltf ) {
	const model = gltf.scene;
	model.position.set(1,-1.5,-2);
	scene.add( model );
}, undefined, function ( error ) {
	console.error( error );
} );

const scene2 = new THREE.Scene();
const textClick = document.createElement('div');
textClick.innerHTML = `<svg class="glitch-filter-example__demo" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="100%" height="100%">
<text class="startButton" y="50%" text-anchor="middle" x="50%" transform="scale(1.1)">Click Me!</text>
</svg>`;
textClick.className = 'startButton';
const objectCSS = new CSS3DObject( textClick );
objectCSS.position.set(0,0.2,-5);
scene2.add(objectCSS)

const renderer2 = new CSS3DRenderer();
renderer2.setSize(window.innerWidth, window.innerHeight);
renderer2.domElement.style.position = 'absolute';
renderer2.domElement.style.top = 0;
document.body.appendChild(renderer2.domElement);

const mousePosition = new THREE.Vector2();
window.addEventListener('mousemove', function(e) {
    mousePosition.x = (e.clientX / (window.innerWidth)) * 2 - 1;
    mousePosition.y = - (e.clientY / (window.innerHeight)) * 2 + 1;
});

window.addEventListener('resize', () => {
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize(window.innerWidth, window.innerHeight);
});
  
function animate() {
	requestAnimationFrame(animate);
	if((camera.position.x + (-mousePosition.x - camera.position.x)*0.05) < 1 &&
		(camera.position.x + (-mousePosition.x - camera.position.x)*0.05) > -1
	){
		camera.position.x += (-mousePosition.x - camera.position.x)*0.05
	}

	if((camera.position.y + (-mousePosition.y - camera.position.y)*0.05) < 1 &&
		(camera.position.y + (-mousePosition.y - camera.position.y)*0.05) > -1
	){
		camera.position.y += (-mousePosition.y - camera.position.y)*0.05
	}
	camera.lookAt(scene.position)
	renderer.render(scene, camera);
	renderer2.render(scene2, camera);
}
  
animate();