export default function Lights() {
  return (
    <>
      <ambientLight intensity={1.8} />

      <directionalLight
        castShadow
        intensity={3}
        position={[5, 8, 5]}
      />

      <pointLight
        intensity={25}
        position={[-4, 3, 3]}
        color="#c4ff3a"
      />
    </>
  );
}