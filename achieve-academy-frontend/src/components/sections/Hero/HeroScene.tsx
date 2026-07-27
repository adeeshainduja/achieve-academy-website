import { Canvas } from "@react-three/fiber";
import {
  Environment,
  ContactShadows,
  Float,
  OrbitControls,
} from "@react-three/drei";

import Student from "./Student";
import Trophy from "./Trophy";

export default function HeroScene() {
  return (
    <Canvas
      shadows
      camera={{
        position: [0, 2, 8],
        fov: 40,
      }}
    >
      {/* Lighting */}

      <ambientLight intensity={1.2} />

      <directionalLight
        castShadow
        position={[8, 8, 5]}
        intensity={2.5}
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />

      <spotLight
        position={[-6, 8, 6]}
        angle={0.45}
        penumbra={1}
        intensity={1.5}
      />

      {/* Environment */}

      <Environment preset="sunset" />

      {/* Student */}

      <Student />

      {/* Floating Trophy */}

      {/*<Float
        speed={2}
        rotationIntensity={0.5}
        floatIntensity={0.8}
      >
        <group position={[2.2, -0.3, 0]}>
          <Trophy />
        </group>
      </Float>*/}

      {/* Ground Shadow */}

      <ContactShadows
        position={[0, -1.45, 0]}
        opacity={0.45}
        blur={3}
        scale={10}
        far={6}
      />

      {/* Camera */}

      <OrbitControls
        enablePan={false}
        enableZoom={false}
        autoRotate
        autoRotateSpeed={0.35}
      />
    </Canvas>
  );
}