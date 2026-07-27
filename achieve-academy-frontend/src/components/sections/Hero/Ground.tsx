import { MeshReflectorMaterial } from "@react-three/drei";

export default function Ground() {
  return (
    <mesh
      rotation={[-Math.PI / 2, 0, 0]}
      position={[0, -1, 0]}
      receiveShadow
    >
      <planeGeometry args={[30, 30]} />

      <MeshReflectorMaterial
        resolution={1024}
        blur={[300, 100]}
        mixBlur={1}
        mixStrength={8}
        roughness={0.85}
        color="#fafafa"
        metalness={0}
      />
    </mesh>
  );
}