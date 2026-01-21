'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import { Group } from 'three';
import { useConfiguratorStore } from '@/lib/stores/useConfiguratorStore';

export default function FurnitureModel() {
  const groupRef = useRef<Group>(null);
  const { selectedProduct, customization } = useConfiguratorStore();

  // For demo purposes, we'll create a simple placeholder
  // In production, you would load the actual GLB model
  // const { scene } = useGLTF(selectedProduct?.modelUrl || '/models/default-sofa.glb');

  // Rotate the model slightly for a nice effect
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* Placeholder Sofa - Replace with actual GLB model */}
      <mesh position={[0, 0, 0]} castShadow receiveShadow>
        {/* Main body */}
        <boxGeometry args={[3, 0.8, 1.2]} />
        <meshStandardMaterial color="#8B7355" roughness={0.8} />
      </mesh>

      {/* Backrest */}
      <mesh position={[0, 0.6, -0.5]} castShadow>
        <boxGeometry args={[3, 0.8, 0.2]} />
        <meshStandardMaterial color="#8B7355" roughness={0.8} />
      </mesh>

      {/* Left Armrest */}
      <mesh position={[-1.4, 0.3, 0]} castShadow>
        <boxGeometry args={[0.2, 0.6, 1.2]} />
        <meshStandardMaterial color="#8B7355" roughness={0.8} />
      </mesh>

      {/* Right Armrest */}
      <mesh position={[1.4, 0.3, 0]} castShadow>
        <boxGeometry args={[0.2, 0.6, 1.2]} />
        <meshStandardMaterial color="#8B7355" roughness={0.8} />
      </mesh>

      {/* Legs */}
      {[
        [-1.2, -0.6, -0.4],
        [-1.2, -0.6, 0.4],
        [1.2, -0.6, -0.4],
        [1.2, -0.6, 0.4],
      ].map((position, index) => (
        <mesh key={index} position={position as [number, number, number]} castShadow>
          <cylinderGeometry args={[0.05, 0.05, 0.6, 16]} />
          <meshStandardMaterial color="#2C1810" metalness={0.3} roughness={0.7} />
        </mesh>
      ))}
    </group>
  );
}

// Preload the model
// useGLTF.preload('/models/default-sofa.glb');
