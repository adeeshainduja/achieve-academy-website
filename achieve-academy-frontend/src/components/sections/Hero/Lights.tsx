export default function Lights() {
  return (
    <>
      <ambientLight intensity={0.9} />

      <directionalLight
        castShadow
        position={[5, 6, 5]}
        intensity={2.5}
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />

      <directionalLight
        position={[-5, 3, 2]}
        intensity={0.6}
      />

      <spotLight
        castShadow
        position={[0, 8, 4]}
        intensity={1.6}
        angle={0.35}
        penumbra={1}
      />
    </>
  );
}