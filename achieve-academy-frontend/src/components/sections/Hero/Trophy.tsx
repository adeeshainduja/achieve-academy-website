const Trophy = () => {
  return (
    <mesh position={[2, 0, 0]} castShadow>
      <cylinderGeometry args={[0.4, 0.4, 1, 32]} />
      <meshStandardMaterial color="gold" />
    </mesh>
  );
};

export default Trophy;