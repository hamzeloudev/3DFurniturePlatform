'use client';

import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, ContactShadows, PerspectiveCamera } from '@react-three/drei';
import { useConfiguratorStore } from '@/lib/stores/useConfiguratorStore';
import FurnitureModel from './FurnitureModel';

function Loader() {
  return (
    <div className="flex h-full items-center justify-center">
      <div className="text-center">
        <div className="mb-4 h-12 w-12 animate-spin rounded-full border-4 border-primary-600 border-t-transparent"></div>
        <p className="text-gray-600">Loading 3D model...</p>
      </div>
    </div>
  );
}

export default function ThreeViewer() {
  const { sceneConfig, arSession } = useConfiguratorStore();

  return (
    <div className="h-full w-full">
      <Canvas shadows>
        <PerspectiveCamera makeDefault position={sceneConfig.cameraPosition} fov={50} />

        {/* Lighting */}
        <ambientLight intensity={0.5} />
        <directionalLight
          position={[10, 10, 5]}
          intensity={sceneConfig.lightIntensity}
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
        />
        <pointLight position={[-10, -10, -5]} intensity={0.3} />

        {/* Environment */}
        <Environment preset={sceneConfig.environmentPreset || 'apartment'} />

        {/* 3D Model */}
        <Suspense fallback={null}>
          <FurnitureModel />
        </Suspense>

        {/* Floor Shadow */}
        <ContactShadows
          position={[0, -1.5, 0]}
          opacity={0.5}
          scale={10}
          blur={2}
          far={4}
        />

        {/* Controls */}
        <OrbitControls
          enablePan={true}
          enableZoom={true}
          enableRotate={true}
          minDistance={3}
          maxDistance={15}
          minPolarAngle={0}
          maxPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  );
}
