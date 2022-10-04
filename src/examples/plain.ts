import * as THREE from 'three';
import MouseTracker from 'MouseTracker';
import animate from 'helpers/animate';

function plainExample(): void {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const ratio = width / height;
  const renderer = new THREE.WebGLRenderer();
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(70, ratio, 0.1, 1000);

  renderer.setSize(width, height, false);
  renderer.setClearColor(0x000000, 1);
  document.body.appendChild(renderer.domElement);

  camera.position.set(0, 2, 2);
  camera.rotateX(-Math.PI / 4);

  const wireframe = new THREE.Mesh(
    new THREE.PlaneBufferGeometry(10, 10, 10, 10).rotateX(-Math.PI / 2),
    new THREE.MeshBasicMaterial({
      color: 0xff0000,
      wireframe: true
    })
  );

  scene.add(wireframe);

  const mouse = new MouseTracker({
    mesh: wireframe,
    camera,
    // tracker: (xyz) => console.log(xyz),
    debug: true
  });

  scene.add(mouse.object);

  renderer.render(scene, camera);

  animate(renderer, scene, camera);
}

export default plainExample;
