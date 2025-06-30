// src/utils/getStarfield.js
import * as THREE from "three";

export function getStarfield({ numStars = 500 } = {}) {
  function randomSpherePoint() {
    const radius = Math.random() * 25 + 25;
    const u = Math.random();
    const v = Math.random();
    const theta = 2 * Math.PI * u;
    const phi = Math.acos(2 * v - 1);
    const x = radius * Math.sin(phi) * Math.cos(theta);
    const y = radius * Math.sin(phi) * Math.sin(theta);
    const z = radius * Math.cos(phi);

    return new THREE.Vector3(x, y, z);
  }

  const verts = [];
  const colors = [];

  for (let i = 0; i < numStars; i++) {
    const pos = randomSpherePoint();
    const hue = 0.6;
    const color = new THREE.Color().setHSL(hue, 0.2, Math.random());

    verts.push(pos.x, pos.y, pos.z);
    colors.push(color.r, color.g, color.b);
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.Float32BufferAttribute(verts, 3));
  geometry.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3));

  const material = new THREE.PointsMaterial({
    size: 0.2,
    vertexColors: true,
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    map: new THREE.TextureLoader().load("./textures/stars/circle.png"),
  });

  return new THREE.Points(geometry, material);
}
