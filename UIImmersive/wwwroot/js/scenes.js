import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

export function defaultScene(canvasId) {

    const canvas = document.getElementById(canvasId);
    const scene = new THREE.Scene();

    const planeGeometry = new THREE.PlaneGeometry(28.2, 48.6);
        const planeMaterial = new THREE.MeshBasicMaterial({
            color: "slategrey",
            side: THREE.DoubleSide,
        });
        const plane = new THREE.Mesh(planeGeometry, planeMaterial);
        plane.receiveShadow = true;
        plane.rotateZ(-0.5 * Math.PI);
        plane.position.y = -0.82;

    scene.add(plane);

    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 200);
    camera.position.z = 40;

    const renderer = new THREE.WebGLRenderer({
        canvas: canvas,
        antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const orbitControls = new OrbitControls(camera, canvas);
    orbitControls.enableDamping = true;

    const renderloop = () => {
        orbitControls.update();
        renderer.render(scene, camera);
        window.requestAnimationFrame(renderloop);
    };

    renderloop();

    window.addEventListener("resize", () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });
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