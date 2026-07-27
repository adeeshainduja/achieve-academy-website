import { useRef } from "react";
import { Group } from "three";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

export default function Trophy() {
  const group = useRef<Group>(null);

  const { scene } = useGLTF("/models/trophy.glb");

  useFrame((state, delta) => {
    if (!group.current) return;

    // Smooth rotation
    group.current.rotation.y += delta * 0.8;

    // Floating animation
    group.current.position.y =
      Math.sin(state.clock.elapsedTime * 2) * 0.08;
  });

  return (
    <group
      ref={group}
      position={[0, 0, 0]}
      rotation={[0, Math.PI / 4, 0]}
      scale={1.5}
    >
      <primitive object={scene} />
    </group>
  );
}

useGLTF.preload("/models/trophy.glb");