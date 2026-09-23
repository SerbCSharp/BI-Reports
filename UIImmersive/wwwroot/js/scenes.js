import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

let scene, camera, renderer, model;

export function defaultScene(canvasId) {
    const canvas = document.getElementById(canvasId);
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(45, canvas.clientWidth / canvas.clientHeight, 0.1, 100);

    renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true, alpha: true });
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const geometry = new THREE.TorusKnotGeometry(1, 0.3, 100, 16);
    const material = new THREE.MeshNormalMaterial();
    model = new THREE.Mesh(geometry, material);
    scene.add(model);

    camera.position.z = 5;
    const orbitControls = new OrbitControls(camera, canvas);
    orbitControls.enableDamping = true;

    function tick() {
        orbitControls.update();
        if (model) model.rotation.y += 0.01
        renderer.render(scene, camera);
        window.requestAnimationFrame(tick);
    }
    tick();
}

export function sceneTransition(sceneId) {
    if (!model) return;

    if (sceneId === "home") {
        model.position.set(0, 0, 0);
        model.scale.set(1, 1, 1);
    } else if (sceneId === "features") {
        model.position.set(-2, 0, 0);
        model.scale.set(1.5, 1.5, 1.5);
    } else if (sceneId === "contacts") {
        model.position.set(0, -5, -2);
    }
}