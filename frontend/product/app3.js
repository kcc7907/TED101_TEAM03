let container;
let camera;
let renderer;
let scene;
let house;
let src = ['./3d/chair3d-1.glb', './3d/chair3d-2.glb', './3d/chair3d-3.glb', './3d/chair3d-4.glb']; //改路徑
var skin = '' || src[0];

// function init() {
container = document.querySelector("#threejs");  //改ID

//Create scene
scene = new THREE.Scene();

const fov = 8;
const aspect = container.clientWidth / container.clientHeight;
const near = 0.1;
const far = 1000;

//Camera setup
camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
camera.position.set(10, 3, 0);
// camera.position.set(10, 10, 10);
camera.lookAt(scene.position);

const ambient = new THREE.AmbientLight(0x404040, 2);
scene.add(ambient);

// const light = new THREE.DirectionalLight(0xffffff, 2);
// light.position.set(50, 50, 100);
// scene.add(light);

const light = new THREE.DirectionalLight(0xffffff, 2, 1000);
light.position.set(10, 5, -5);
scene.add(light);

//Renderer
renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize(container.clientWidth, container.clientHeight);
renderer.setPixelRatio(window.devicePixelRatio);
container.appendChild(renderer.domElement);

// const axesHelper = new THREE.AxesHelper(5);
// scene.add(axesHelper);

const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.minDistance = 1;
controls.maxDistance = 100;

//Load Model
let loader = new THREE.GLTFLoader();

function reload() {
    loader.load(skin, function (gltf) {
        scene.add(gltf.scene);
        house = gltf.scene.children[0];
        house.position.set(-2, -1, 0.2);
        animate();
    });
}
// }

function animate() {
    requestAnimationFrame(animate);
    // house.rotation.z += 0.005;
    renderer.render(scene, camera);
}
reload();
// init();

function onWindowResize() {
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(container.clientWidth, container.clientHeight);
}

window.addEventListener("resize", onWindowResize);


// document.addEventListener('click', e => console.log(e.target))

let wood = document.querySelectorAll('.wood');

wood.forEach((x, a) => {
    x.addEventListener('click', () => {
        skin = src[a];
        reload();
    });
});