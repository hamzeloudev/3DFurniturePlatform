'use client';

import { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, ContactShadows, PerspectiveCamera } from '@react-three/drei';
import { useConfiguratorStore } from '@/lib/stores/useConfiguratorStore';
import FurnitureModel from './FurnitureModel';
import ARCameraBackground from './ARCameraBackground';

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
  const { sceneConfig, arSession, setARSession } = useConfiguratorStore();
  const [cameraReady, setCameraReady] = useState(false);

  const handleCameraError = (error: Error) => {
    console.error('Camera error:', error);
    // Optionally disable AR mode on error
    // setARSession({ active: false });
  };

  return (
    <div className="relative h-full w-full">
      {/* AR Camera Background - Positioned behind the 3D canvas */}
      <ARCameraBackground
        isActive={arSession.active}
        onCameraReady={() => setCameraReady(true)}
        onCameraError={handleCameraError}
      />

      {/* 3D Canvas - Transparent background in AR mode */}
      <div className="relative z-10 h-full w-full">
        <Canvas
          shadows={!arSession.active} // Disable shadows in AR mode for better performance
          gl={{
            alpha: true, // Enable transparency
            antialias: true,
          }}
          style={{
            background: arSession.active ? 'transparent' : undefined,
          }}
        >
          <PerspectiveCamera
            makeDefault
            position={arSession.active ? [0, 1, 3] : sceneConfig.cameraPosition}
            fov={arSession.active ? 60 : 50}
          />

          {/* Lighting - Adjusted for AR mode */}
          <ambientLight intensity={arSession.active ? 0.8 : 0.5} />
          <directionalLight
            position={[10, 10, 5]}
            intensity={arSession.active ? 1.5 : sceneConfig.lightIntensity}
            castShadow={!arSession.active}
            shadow-mapSize-width={2048}
            shadow-mapSize-height={2048}
          />
          <pointLight position={[-10, -10, -5]} intensity={arSession.active ? 0.5 : 0.3} />

          {/* Environment - Only in normal mode */}
          {!arSession.active && <Environment preset={sceneConfig.environmentPreset || 'apartment'} />}

          {/* 3D Model */}
          <Suspense fallback={null}>
            <FurnitureModel />
          </Suspense>

          {/* Floor Shadow - Only in normal mode */}
          {!arSession.active && (
            <ContactShadows
              position={[0, -1.5, 0]}
              opacity={0.5}
              scale={10}
              blur={2}
              far={4}
            />
          )}

          {/* Controls - Different settings for AR mode */}
          <OrbitControls
            enablePan={!arSession.active}
            enableZoom={true}
            enableRotate={true}
            minDistance={arSession.active ? 1 : 3}
            maxDistance={arSession.active ? 8 : 15}
            minPolarAngle={0}
            maxPolarAngle={Math.PI / 2}
          />
        </Canvas>
      </div>

      {/* AR Placement Controls */}
      {arSession.active && cameraReady && (
        <div className="absolute bottom-20 left-1/2 z-20 flex -translate-x-1/2 transform gap-4">
          <button
            className="rounded-full bg-white p-4 shadow-lg transition-all hover:bg-gray-100"
            title="Reset position"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
          </button>
          <button
            className="rounded-full bg-primary-600 px-6 py-4 font-semibold text-white shadow-lg transition-all hover:bg-primary-500"
            onClick={() => {
              // TODO: Capture AR screenshot or confirm placement
              alert('AR placement confirmed! (Feature coming soon)');
            }}
          >
            Place Furniture
          </button>
        </div>
      )}
    </div>
  );
}
