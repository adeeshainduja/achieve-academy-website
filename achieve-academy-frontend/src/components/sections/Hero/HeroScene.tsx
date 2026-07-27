import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  ContactShadows,
  Environment,
} from "@react-three/drei";

import CameraRig from "./CameraRig";
import Lights from "./Lights";
import Ground from "./Ground";
import Student from "./Student";
import Trophy from "./Trophy";

export default function HeroScene() {
  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      gl={{ alpha: true }}
      camera={{
        position: [0, 2.2, 5.8],
        fov: 30,
      }}
      style={{
        width: "100%",
        height: "100%",
        background: "transparent",
      }}
    >
      <Suspense fallback={null}>
        <Environment preset="studio" />

        <Lights />

        <CameraRig />

        <group position={[0.25, 0, 0]}>
          <Ground />

          <Student />

          <Trophy />

          <ContactShadows
            position={[0, -1, 0]}
            opacity={0.45}
            scale={10}
            blur={2.5}
            far={4}
            color="#000000"
          />
        </group>
      </Suspense>
    </Canvas>
  );
}