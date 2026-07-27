import { useEffect, useRef } from "react";
import { Group } from "three";
import { useFrame } from "@react-three/fiber";
import { useAnimations, useGLTF } from "@react-three/drei";

export default function Student() {
  const group = useRef<Group>(null);

  // Load model
  const { scene, animations } = useGLTF("/models/student_run.glb");

  // Setup animations
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    const animation = Object.values(actions)[0];

    if (animation) {
      animation.reset();
      animation.fadeIn(0.3);
      animation.play();
    }

    return () => {
      animation?.fadeOut(0.3);
    };
  }, [actions]);

  // Character movement
  useFrame((_, delta) => {
    if (!group.current) return;

    // Run forward until reaching trophy
    if (group.current.position.x < 1.8) {
      group.current.position.x += delta * 1.2;
    }
  });

  return (
    <group
      ref={group}
      position={[-2.8, -1.4, 0]}
      rotation={[0, -Math.PI / 2, 0]}
      scale={2.6}
      castShadow
      receiveShadow
    >
      <primitive object={scene} />
    </group>
  );
}

// Preload model
useGLTF.preload("/models/student_run.glb");