export default function Lights() {
  return (
    <>
      {/* Soft ambient light */}
      <ambientLight intensity={0.8} />

      {/* Main sunlight */}
      <directionalLight
        castShadow
        position={[5, 6, 5]}
        intensity={1.8}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-near={0.5}
        shadow-camera-far={20}
        shadow-camera-left={-6}
        shadow-camera-right={6}
        shadow-camera-top={6}
        shadow-camera-bottom={-6}
      />

      {/* Fill light */}
      <directionalLight
        position={[-4, 3, 2]}
        intensity={0.4}
      />

      {/* Rim light */}
      <spotLight
        position={[0, 6, 4]}
        intensity={0.8}
        angle={0.35}
        penumbra={1}
      />
    </>
  );
}