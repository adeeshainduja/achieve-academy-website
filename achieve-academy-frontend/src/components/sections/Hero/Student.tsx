import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useAnimations, useGLTF } from "@react-three/drei";
import * as THREE from "three";

export default function Student() {
  const group = useRef<THREE.Group>(null);

  const { scene, animations } = useGLTF("/models/boy.glb");
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    scene.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });

    const firstAnimation = Object.values(actions)[0];

    if (firstAnimation) {
      firstAnimation
        .reset()
        .fadeIn(0.5)
        .play();
    }
  }, [actions, scene]);

  useFrame(({ clock, mouse }) => {
    if (!group.current) return;

    const t = clock.getElapsedTime();

    // Floating animation
    group.current.position.y =
      -0.80 + Math.sin(t * 2) * 0.03;

    // Look slightly at trophy + mouse
    const targetRotation =
      -0.78 + mouse.x * 0.15;

    group.current.rotation.y =
      THREE.MathUtils.lerp(
        group.current.rotation.y,
        targetRotation,
        0.05
      );

    // Small body tilt
    group.current.rotation.z =
      THREE.MathUtils.lerp(
        group.current.rotation.z,
        mouse.x * 0.02,
        0.05
      );
  });

  return (
    <group
      ref={group}
      position={[0.82, -0.80, -0.05]}
      rotation={[0, -0.78, 0]}
      scale={0.92}
    >
      <primitive object={scene} />
    </group>
  );
}

useGLTF.preload("/models/boy.glb");