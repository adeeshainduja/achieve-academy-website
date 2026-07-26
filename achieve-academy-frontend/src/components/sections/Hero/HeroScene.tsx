import { Canvas } from "@react-three/fiber";
import Student from "./Student";

export default function HeroScene() {
  return (
    <Canvas
      camera={{
        position: [0, 2, 8],
        fov: 45,
      }}
      shadows
    >
      <ambientLight intensity={2} />

      <directionalLight
        position={[5, 5, 5]}
        intensity={3}
      />

      <Student />
    </Canvas>
  );
}