const Ground = () => {
  return (
    <mesh
      rotation={[-Math.PI / 2, 0, 0]}
      position={[0, -1, 0]}
      receiveShadow
    >
      <planeGeometry args={[30, 30]} />

      <meshStandardMaterial color="#d9f99d" />
    </mesh>
  );
};

export default Ground;