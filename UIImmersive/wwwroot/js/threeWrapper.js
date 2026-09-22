    import * as THREE from '/js/three.module.js';
let scene, camera, renderer, cube;
export function initThree(canvasId) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;

    // 1. Создаем сцену и камеру
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x111111); // Темно-серый фон

    camera = new THREE.PerspectiveCamera(75, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
    camera.position.z = 3; // Отодвигаем камеру назад, чтобы видеть куб

    // 2. Настраиваем рендерер
    renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true });
    renderer.setSize(canvas.clientWidth, canvas.clientHeight, false);

    // 3. Создаем куб (Геометрия + Сетчатый материал)
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({
        color: 0x00ffcc,
        wireframe: true // Делаем куб сеточным, чтобы вращение было отчетливо видно
    });
    cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // 4. Запускаем цикл анимации
    animate();
}

function animate() {
    requestAnimationFrame(animate);

    // Вращаем куб по двум осям на каждом кадре
    if (cube) {
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
    }

    renderer.render(scene, camera);
}
