import { useEffect, useRef } from "react";
import { Group } from "three";
import { useGLTF, useAnimations } from "@react-three/drei";

export default function Student() {
  const group = useRef<Group>(null);

  const { scene, animations } = useGLTF(
    "/src/assets/models/student_run.glb"
  );

  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    const firstAnimation = Object.values(actions)[0];

    if (firstAnimation) {
      firstAnimation.reset();
      firstAnimation.fadeIn(0.3);
      firstAnimation.play();
    }

    return () => {
      firstAnimation?.fadeOut(0.3);
    };
  }, [actions]);

  return (
    <group
      ref={group}
      position={[-2.5, -1.4, 0]}
      rotation={[0, -Math.PI / 2, 0]}
      scale={2.6}
    >
      <primitive object={scene} />
    </group>
  );
}

useGLTF.preload("/src/assets/models/student_run.glb");