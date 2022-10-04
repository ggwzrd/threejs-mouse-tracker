![threejs-mouse-tracker](./assets/mouse-tracker-header.png?raw=true "Screenshot while debugging the mouse tracking on a 3D plain")


# threejs-mouse-tracker

![GitHub last commit](https://img.shields.io/github/last-commit/ggwzrd/threejs-mouse-tracker)
![npm bundle size](https://img.shields.io/bundlephobia/min/threejs-mouse-tracker)
![npm](https://img.shields.io/npm/v/threejs-mouse-tracker)
![NPM](https://img.shields.io/npm/l/threejs-mouse-tracker)

This package is made to track the mouse position within a three dimenional space using Three.js [Raycaster](https://threejs.org/docs/index.html?q=rayca#api/en/core/Raycaster).

- [threejs-mouse-tracker](#threejs-mouse-tracker)
  - [Install](#install)
    - [npm](#npm)
    - [yarn](#yarn)
  - [Getting started](#getting-started)
  - [Contributing](#contributing)
  - [Credits](#credits)
  - [License](#license)

## Install

### npm

```bash
  npm install threejs-mouse-tracker
```

### yarn

```bash
  yarn add threejs-mouse-tracker
```

## Getting started

All you need to start tracking  is the snippet below.

```js
import * as THREE from 'three'
import MouseTracker from 'threejs-mouse-tracker'

// prepare renderer, camera and scene

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

// render camera and scene using renderer
```

> Full example in [examples/plain.ts](./src/examples/plain.ts)

## Contributing

Consult [CONTRIBUTING.md](./CONTRIBUTING.md) to start contributing to threejs-mouse-tracker.

## Credits

[Yuri Artiukh](https://www.youtube.com/watch?v=o_bEveIFfoM) [aka [@akella](https://github.com/akella)]

## License

[The MIT License (MIT)](./LICENCE.txt)
