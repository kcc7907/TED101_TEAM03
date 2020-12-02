import * as THREE from '../../donotupload/three.js-master/build/three.module.js';
import { OrbitControls } from '../../donotupload/three.js-master/examples/jsm/controls/OrbitControls.js';

// document.addEventListener("load", constructor);
function constructor() {
    // ==== step1: 建基礎場景、相機、渲染器，並加到html中 ==== // 此時看起來只有一塊小小的平面2D的矩形圖
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000) // 相機視野大小、相機視圖長寬比、相機近景、相機遠景
    var renderer = new THREE.WebGLRenderer({ antialias: true });
    document.body.appendChild(renderer.domElement);

    // ==== step4: 建立控制 ==== //此時可通過鼠標滾輪進行縮放，鼠標左鍵可拖曳，右鍵可換面
    var controls = new OrbitControls(camera, renderer.domElement);
    // this.enabled = true;
    controls.enableZoom = false;
    controls.enableDamping = true; // an animation loop is required when either damping or auto-rotation are enabled
    controls.dampingFactor = 0.05;
    controls.screenSpacePanning = false;
    controls.minDistance = 100;
    controls.maxDistance = 500;
    controls.maxPolarAngle = Math.PI / 2;
    // controls.maxPolarAngle = 0;


    // ==== step1.2: 設置舞場景大小: ==== // 跟瀏覽器大小相同但未RWD
    renderer.setSize(window.innerWidth, window.innerHeight);

    // ==== step1.3: 呼叫renderer RWD ==== // 監聽視窗大小並引用 onWindowResize 函式，函式額外寫
    window.addEventListener("resize", onWindowResize, false); // TODO: 這什麼寫法??

    // ==== step1.4: 建立renderer RWD函式
    function onWindowResize() {
        renderer.setSize(window.innerWidth, window.innerHeight);
        //相機RWD
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
    }

    // ==== step2: 建立物體(以下為正方體) ====
    // ==== step2.1: 建立外框 ====
    var geometry = new THREE.BoxGeometry(10, 10, 10); // three.js無長度單位，建構以比例計算
    // ==== step2.2: 物體上色 ====
    var material = new THREE.MeshBasicMaterial({ color: '#ff4400' });
    // ==== step2.9: 建立物體紋理函式 ====
    var textureLoader = new THREE.TextureLoader();
    // var texture = textureLoader.load('./textures/box.jpg');
    // var material = new THREE.MeshBasicMaterial({ map: texture, side: THREE.DoubleSide }); // 用圖片就用map；DoubleSide表雙面渲染
    // ==== step2.3: 物體成形 ====
    var mesh = new THREE.Mesh(geometry, material);
    // ==== step2.7: 改變相機位置 ==== // 此時看到的物體畫面只有正面，可利用自動旋轉看到物體其他面
    camera.position.set(0, 0, 100); // 調z軸可以拉近相機，數字越小越近

    // ==== step2.4: 將物體加入場景 ==== // 此時還看不到物體，物體要被渲染才有畫面
    scene.add(mesh);
    //WIREFRAME:TRUE 看到物件原型
    //ajax換最新消息




    // ====step5: 建立背景 ====
    var bckGeometry = new THREE.BoxGeometry(800, 800, 800); //相機位置在(0, 0, 5)，因此相機包含在box內
    var texture1 = textureLoader.load('./textures/room1.jpg');
    var bckMaterial = [
        new THREE.MeshBasicMaterial({ map: texture1, side: THREE.DoubleSide }), // 右
        new THREE.MeshBasicMaterial({ color: 'blue', side: THREE.DoubleSide }), // 左
        new THREE.MeshBasicMaterial({ color: 'yellow', side: THREE.DoubleSide }), // 上
        new THREE.MeshBasicMaterial({ color: 'green', side: THREE.DoubleSide }), // 下
        new THREE.MeshBasicMaterial({ color: 'orange', side: THREE.DoubleSide }), // 後
        new THREE.MeshBasicMaterial({ color: 'purple', side: THREE.DoubleSide }), // 前
    ]
    var bck = new THREE.Mesh(bckGeometry, bckMaterial);
    bck.name = 'bck'; // 為了在下方渲染取得名字(但因為我寫在function內所以其實是不用取名，只是練習一下)
    scene.add(bck);






    // ==== 建立床 ===

    // ==== step2.6: 呼叫渲染 ==== // 此時還看不到物體，要改變相機位置才有畫面
    render();

    // ==== step2.5: 建立渲染物體函式 ====
    function render() {
        //==== step3.1: FTP數值即時更新 ====
        // stats.begin();
        requestAnimationFrame(() => render());
        renderer.render(scene, camera);

        //==== step5.2: 背景旋轉 ====
        // var bck = scene.getObjectByName('bck');
        // bck.rotation.y += 0.001;

        //==== step2.8: 物體旋轉函式 ====
        // mesh.rotation.x += 0.01; //繞x軸每次旋轉0.01
        // mesh.rotation.y += 0.01;
        // mesh.rotation.z += 0.01;
        // stats.end();
    }

    // 建立文字
    const loader = new THREE.FontLoader();

    loader.load('fonts/helvetiker_regular.typeface.json', function (font) {

        const geometry = new THREE.TextGeometry('Hello three.js!', {
            font: font,
            size: 80,
            height: 5,
            curveSegments: 12,
            bevelEnabled: true,
            bevelThickness: 10,
            bevelSize: 8,
            bevelSegments: 5
        });
    });
};

constructor();