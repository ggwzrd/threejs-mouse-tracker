function animate(renderer: THREE.WebGLRenderer, scene: THREE.Scene, camera: THREE.Camera): void {
  renderer.render(scene, camera);
  console.log(camera.position, camera.rotation);
  requestAnimationFrame(() => animate(renderer, scene, camera));
};

export default animate;
