import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

export default function CameraRig() {
  const { camera, mouse } = useThree();

  useFrame(() => {
    const targetX = mouse.x * 0.35;
    const targetY = 1.4 + mouse.y * 0.15;

    camera.position.x = THREE.MathUtils.lerp(
      camera.position.x,
      targetX,
      0.05
    );

    camera.position.y = THREE.MathUtils.lerp(
      camera.position.y,
      targetY,
      0.05
    );

    camera.lookAt(0.35, 0.2, 0);
  });

  return null;
}