import { MeshReflectorMaterial } from "@react-three/drei";

export default function Ground() {
  return (
    <mesh
      rotation={[-Math.PI / 2, 0, 0]}
      position={[0, -1.6, 0]}
      receiveShadow
    >
      <circleGeometry args={[8, 64]} />

      <MeshReflectorMaterial
        blur={[300, 100]}
        resolution={1024}
        mixBlur={1}
        mixStrength={20}
        roughness={0.8}
        depthScale={1}
        color="#dcefc9"
        metalness={0.2}
      />
    </mesh>
  );
}