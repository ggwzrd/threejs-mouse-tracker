declare interface Options {
  mesh: Object3D
  camera: Camera
  tracker?: (xyz: Vector3) => any
  debug?: boolean
}
