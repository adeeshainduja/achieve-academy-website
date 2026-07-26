import { Canvas } from "@react-three/fiber";

export default function HeroScene() {
  console.log("HeroScene Loaded");

  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
      <ambientLight intensity={2} />
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshNormalMaterial />
      </mesh>
    </Canvas>
  );
}