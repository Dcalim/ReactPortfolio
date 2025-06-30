import { useEffect, useRef } from "react";
import * as THREE from "three";
import { getFresnelMat } from "./getFresnelMat";
import { getStarfield } from "./getStarfield";
import earthUrl from "/src/components/Earth/textures/00_earthmap1k.jpg";
import lightsUrl from "/src/components/Earth/textures/03_earthlights1k.jpg"
import cloudUrl from "/src/components/Earth/textures/earthcloudmaptrans.jpg"

const EarthScene = () => {
  const containerRef = useRef(null);

  useEffect(() => {

    if (containerRef.current.querySelector('canvas')) {
        return; // Canvas already appended, skip
    }

    const w = containerRef.current.clientWidth;
    const h = containerRef.current.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, w / h, 0.1, 100);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(w, h);
    containerRef.current.appendChild(renderer.domElement);

    const loader = new THREE.TextureLoader();
    const earthGroup = new THREE.Group();
    earthGroup.rotation.z = -23.4 * Math.PI / 180;
    scene.add(earthGroup);

    // Geometry
    const detail = 12;
    const earthGeo = new THREE.IcosahedronGeometry(1, detail);

    // Earth Material
    const earthMat = new THREE.MeshStandardMaterial({
      map: loader.load(earthUrl),
      roughness: 1,
      metalness: 0,
    });
    const earthMesh = new THREE.Mesh(earthGeo, earthMat);
    earthGroup.add(earthMesh);

    // City lights layer
    const lightsMat = new THREE.MeshBasicMaterial({
      map: loader.load(lightsUrl),
      blending: THREE.AdditiveBlending,
      transparent: true,
    });
    const lightsMesh = new THREE.Mesh(earthGeo, lightsMat);
    earthGroup.add(lightsMesh);

    // Clouds layer
    const cloudsMat = new THREE.MeshStandardMaterial({
      map: loader.load(cloudUrl),
      transparent: true,
      opacity: 0.4,
      blending: THREE.AdditiveBlending,
    });
    const cloudsMesh = new THREE.Mesh(earthGeo, cloudsMat);
    cloudsMesh.scale.setScalar(1.005);
    earthGroup.add(cloudsMesh);

    // Fresnel glow layer
    const fresnelMat = getFresnelMat();
    const glowMesh = new THREE.Mesh(earthGeo, fresnelMat);
    glowMesh.scale.setScalar(1.01);
    earthGroup.add(glowMesh);

    // Lighting
    const sunLight = new THREE.DirectionalLight(0xffffff, 0.5);
    sunLight.position.set(-2, 0.5, 1); // match original code
    scene.add(sunLight);

    const ambientLight = new THREE.AmbientLight(0x222222);
    scene.add(ambientLight);

    // Starfield background
    const stars = getStarfield({ numStars: 2000 });
    scene.add(stars);

    // Animate
    const animate = () => {
      requestAnimationFrame(animate);
      earthMesh.rotation.y += 0.002;
      lightsMesh.rotation.y += 0.002;
      cloudsMesh.rotation.y += 0.0023;
      glowMesh.rotation.y += 0.002;
      renderer.render(scene, camera);
    };
    animate();

    // Cleanup
    return () => {
      //renderer.dispose();
      console.log("added");
      if (containerRef.current?.contains(renderer.domElement)) {
        console.log("removed");
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={containerRef} className="w-full h-[500px] md:h-[700px]" />;
};

export default EarthScene;
