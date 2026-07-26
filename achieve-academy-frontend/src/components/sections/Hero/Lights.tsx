const Lights = () => {
  return (
    <>
      <ambientLight intensity={1.2} />

      <directionalLight
        position={[5, 8, 5]}
        intensity={2}
        castShadow
      />

      <pointLight
        position={[-5, 3, 2]}
        intensity={1}
      />
    </>
  );
};

export default Lights;