import { Environment } from "@react-three/drei";

export default function Lights() {
  return (
    <>
      <ambientLight intensity={1.2} />

      <directionalLight
        castShadow
        position={[8, 8, 5]}
        intensity={2.5}
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />

      <spotLight
        position={[-6, 8, 6]}
        angle={0.45}
        penumbra={1}
        intensity={1.5}
      />

      <Environment preset="sunset" />
    </>
  );
}