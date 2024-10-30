import React, { Suspense, useRef } from "react";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment, Stars } from "@react-three/drei";
import {
  EffectComposer,
  Bloom,
  ChromaticAberration,
} from "@react-three/postprocessing";
import * as THREE from "three";
import { Vector2 } from "three";

function CameraLogger() {
  const { camera } = useThree();

  useThree(({ camera }) => {
    console.log("Camera position:", {
      x: camera.position.x,
      y: camera.position.y,
      z: camera.position.z,
    });
  });

  return null;
}

function Model() {
  const { scene } = useGLTF("/models/10_27_2024.glb");
  const materialRef = useRef<THREE.Material | null>(null);

  // Modify materials of the model
  React.useEffect(() => {
    scene.traverse((object: THREE.Object3D) => {
      if (object instanceof THREE.Mesh && object.material) {
        const material = object.material as THREE.MeshStandardMaterial;
        material.roughness = 0.1;
        material.metalness = 0.9;
        material.envMapIntensity = 2;
        material.transparent = true;
        material.opacity = 0.8;
        object.castShadow = true;
        object.receiveShadow = true;
        materialRef.current = material;
      }
    });
  }, [scene]);

  // Add subtle animation
  useFrame(({ clock }) => {
    if (materialRef.current) {
      const material = materialRef.current as THREE.MeshStandardMaterial;
      material.opacity = 0.7 + Math.sin(clock.getElapsedTime()) * 0.1;
      material.envMapIntensity =
        1.8 + Math.sin(clock.getElapsedTime() * 0.5) * 4;
    }
  });

  return <primitive object={scene} />;
}

const Artifact1: React.FC = () => {
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <Canvas camera={{ position: [-0.2, 1.2, -1] }} shadows>
        <Suspense fallback={null}>
          {/* Background and Environment */}
          <color attach="background" args={["#001220"]} />
          <fog attach="fog" args={["#001220", 5, 20]} />
          <Environment preset="dawn" />

          {/* Lights */}
          <ambientLight intensity={1} color="#89cff0" />
          <directionalLight
            position={[5, 5, 5]}
            intensity={2}
            color="#ffffff"
            castShadow
          />
          <spotLight
            position={[10, 10, 10]}
            angle={0.3}
            penumbra={1}
            intensity={1}
            castShadow
            color="#ffffff"
          />

          {/* Camera Logger */}
          <CameraLogger />

          {/* Model */}
          <Model />

          {/* Controls */}
          <OrbitControls
            enableZoom={true}
            maxDistance={2}
            minDistance={0.5}
            dampingFactor={0.05}
          />

          {/* Post-processing effects */}
          <EffectComposer>
            <Bloom
              intensity={0.4}
              luminanceThreshold={0.2}
              luminanceSmoothing={0.9}
              mipmapBlur
            />
            <ChromaticAberration
              offset={new Vector2(0.002, 0.002)}
              radialModulation={true}
              modulationOffset={0.001}
            />
          </EffectComposer>
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Artifact1;
