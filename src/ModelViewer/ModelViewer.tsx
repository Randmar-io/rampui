import React, { useEffect, useRef, useState } from "react";
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

interface ModelViwerProps {
  source: string;
}

export function ModelViewer({ source }: ModelViwerProps) {
  const [isGrabbing, setIsGrabbing] = useState(false);

  const refContainer = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const height = window.innerHeight * 0.8;
    const width = 1200;

    let scene = new THREE.Scene();
    let camera = new THREE.PerspectiveCamera(75, width / height, 0.01, 1000);
    let renderer = new THREE.WebGLRenderer();
    renderer.setSize(width, height);
    let light = new THREE.AmbientLight(0xffffff, 2);
    scene.add(light);

    refContainer.current && refContainer.current.appendChild(renderer.domElement);
    scene.background = new THREE.Color(0xffffff);

    const gltfLoader = new GLTFLoader()

    gltfLoader.load(
      source,
      (gltf) => {
        scene.add(gltf.scene)
        const box = new THREE.Box3().setFromObject(gltf.scene);
        const center = box.getCenter(new THREE.Vector3());
        const size = box.getSize(new THREE.Vector3());
        const maxDim = Math.max(size.x, size.y, size.z);
        const fov = camera.fov * (Math.PI / 180);
        let cameraZ = Math.abs((maxDim / 2) * Math.tan(fov * 2));
        camera.position.copy(center);
        camera.position.z = cameraZ * 3;
        camera.position.x = maxDim * 0.7;
        camera.position.y = maxDim * 0.8; 
        camera.lookAt(center);
      }
    )

    camera.position.z = 5;
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.update();
    let animate = function () {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();
  }, []);
  return (
    <div
      style={{ cursor: isGrabbing ? 'grabbing' : 'grab' }}
      onMouseDown={() => setIsGrabbing(true)}
      onMouseUp={() => setIsGrabbing(false)}
      ref={refContainer}
    >
    </div>

  );
}