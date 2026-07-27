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
    firstAnimation?.reset().fadeIn(0.5).play();
  }, [actions, scene]);

  useFrame(({ clock, mouse }) => {
    if (!group.current) return;

    const t = clock.getElapsedTime();

    // Floating
    group.current.position.y =
      -1 + Math.sin(t * 2) * 0.03;

    // Face trophy + mouse
    const targetRotation = -0.65 + mouse.x * 0.15;

    group.current.rotation.y = THREE.MathUtils.lerp(
      group.current.rotation.y,
      targetRotation,
      0.05
    );

    group.current.rotation.z = THREE.MathUtils.lerp(
      group.current.rotation.z,
      mouse.x * 0.02,
      0.05
    );
  });

  return (
    <group
      ref={group}
      position={[0.6, -1, -0.15]}
      rotation={[0, -0.65, 0]}
      scale={0.95}
    >
      <primitive object={scene} />
    </group>
  );
}

useGLTF.preload("/models/boy.glb");