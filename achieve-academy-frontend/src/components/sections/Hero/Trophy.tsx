import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Sparkles, useGLTF } from "@react-three/drei";
import * as THREE from "three";

export default function Trophy() {
  const group = useRef<THREE.Group>(null);

  const { scene } = useGLTF("/models/trophy.glb");

  useEffect(() => {
    scene.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
  }, [scene]);

  useFrame(({ clock }) => {
    if (!group.current) return;

    const t = clock.getElapsedTime();

    // Floating
    group.current.position.y =
      -0.60 + Math.sin(t * 2) * 0.04;

    // Slow rotation
    group.current.rotation.y =
      0.20 + Math.sin(t * 0.5) * 0.05;

    // Gentle scale pulse
    const s =
      1.45 + Math.sin(t * 2) * 0.02;

    group.current.scale.set(s, s, s);
  });

  return (
    <group
      ref={group}
      position={[-0.3, -0.60, 0.10]}
      rotation={[0, 0.20, 0]}
      scale={1.45}
    >
      <primitive object={scene} />

      <Sparkles
        count={35}
        scale={0.45}
        size={2.5}
        speed={0.4}
        opacity={1}
        color="#FFD700"
      />
    </group>
  );
}

useGLTF.preload("/models/trophy.glb");