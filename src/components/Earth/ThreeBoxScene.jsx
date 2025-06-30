import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const HexagonScene = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const w = containerRef.current.clientWidth;
    const h = containerRef.current.clientHeight;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(w, h);
    containerRef.current.appendChild(renderer.domElement);

    // Camera
    const camera = new THREE.PerspectiveCamera(75, w / h, 0.1, 100);
    camera.position.z = 25;

    // Scene
    const scene = new THREE.Scene();

    // Lights
    const hemLight = new THREE.HemisphereLight(0x0099ff, 0xaa5500);
    scene.add(hemLight);

    // Geometry & Mesh
    const geo = new THREE.IcosahedronGeometry(1.0, 0);
    const mat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      flatShading: true
    });
    const mesh = new THREE.Mesh(geo, mat);
    scene.add(mesh);

    const wireMat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      wireframe: true
    });
    const wireMesh = new THREE.Mesh(geo, wireMat);
    wireMesh.scale.setScalar(1.1);
    scene.add(wireMesh);

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.03;

    // Animation Loop
    let frameId;
    const animate = (t = 0) => {
      frameId = requestAnimationFrame(animate);

      mesh.rotation.x = t * 0.001;
      wireMesh.rotation.x = -(t * 0.001);
      mesh.rotation.y = t * 0.001;
      wireMesh.rotation.y = -(t * 0.001);
      mesh.rotation.z = t * 0.001;
      wireMesh.rotation.z = -(t * 0.001);

      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    // Resize handler
    const handleResize = () => {
      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      //containerRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        width: "100%",
        height: "100vh",
        backgroundColor: "black",
        overflow: "hidden"
      }}
    />
  );
};

export default HexagonScene;
