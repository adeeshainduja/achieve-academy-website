const Student = () => {
  return (
    <mesh position={[-2, 0, 0]} castShadow>
      <boxGeometry args={[1, 2, 1]} />
      <meshStandardMaterial color="#2563eb" />
    </mesh>
  );
};

export default Student;