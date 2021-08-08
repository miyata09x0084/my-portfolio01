  // Find the latest version by visiting https://cdn.skypack.dev/three.

  import * as THREE from 'https://cdn.skypack.dev/three@0.126.1';

  let scene, camera;

  function init() {
    scene = new THREE.scene();
    camera = new THREE.PerspecstiveCamera(60, window.innerWidth, window.innerHeight, 1, 1000);
    camera.position.z = 1;
    camera.rotation.x = 1.16;
    camera.rotation.y = -0.12;
    camera.rotation.z = 0.27;
  }