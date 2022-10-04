import {
  Object3D,
  Camera,
  Vector3,
  Vector2,
  Mesh,
  Intersection,
  Raycaster,
  SphereBufferGeometry,
  MeshBasicMaterial
} from 'three';

class MouseTracker {
  pointer: Vector2;
  object: Mesh;

  readonly intersects: Intersection[] = [];

  private readonly raycaster: Raycaster;
  private readonly mesh: Object3D;
  private readonly camera: Camera;
  private readonly tracker: (xyz: Vector3) => any;
  private readonly debug: boolean;

  constructor(opts: Options) {
    this.mesh = opts.mesh;
    this.camera = opts.camera;
    this.tracker = opts.tracker || (() => null);
    this.debug = opts.debug || false;
    this.raycaster = new Raycaster();
    this.pointer = new Vector2();

    if (this.debug) {
      this.generateMouse();
    }

    this.addRaycasterEvent();
  }

  private addRaycasterEvent(): void {
    window.addEventListener('pointermove', (event) => {
      // calculate pointer position in normalized device coordinates
      // (-1 to +1) for both components

      this.pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
      this.pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;

      this.raycaster.setFromCamera(this.pointer, this.camera);

      this.intersects.splice(
        0,
        this.intersects.length,
        ...this.raycaster.intersectObjects([this.mesh])
      );

      if (this.intersects[0]) {
        this.tracker(this.intersects[0].point);

        if (this.debug) {
          this.object.position.copy(this.intersects[0].point);
        }
      }
    });
  }

  private generateMouse(): void {
    this.object = new Mesh(
      new SphereBufferGeometry(0.1, 10, 10),
      new MeshBasicMaterial({ color: 0xff0000, wireframe: true })
    );
  }
}

export default MouseTracker;
