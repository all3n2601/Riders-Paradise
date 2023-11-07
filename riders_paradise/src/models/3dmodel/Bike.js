import React, { useEffect } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Mesh } from "three";

export function Bike() {
  const gltf = useLoader(
    GLTFLoader,
    process.env.PUBLIC_URL + "models/bike/scene.gltf"
  );

  useEffect(() => {
    gltf.scene.scale.set(0.05, 0.05, 0.05);
    gltf.scene.rotation.set(0, 0, 0);
    gltf.scene.position.set(0, -0.035, 0);
    gltf.scene.traverse((object) => {
      if (object instanceof Mesh) {
        object.castShadow = true;
        object.receiveShadow = true;
        object.material.envMapIntensity = 10;
      }
    });
  }, [gltf]);

  useFrame((state, delta) => {
    let t = state.clock.getElapsedTime();

    let group = gltf.scene.children[0].children[0];
    group.children[0].rotation.x = t * 2;
  });

  return <primitive object={gltf.scene} />;
}
