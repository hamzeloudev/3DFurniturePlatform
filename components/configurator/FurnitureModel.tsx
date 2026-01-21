'use client';

import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF, RoundedBox } from '@react-three/drei';
import { Group, Color } from 'three';
import { useConfiguratorStore } from '@/lib/stores/useConfiguratorStore';

// Component for rendering different leg styles
function FurnitureLeg({ position, legStyle, color }: { position: [number, number, number]; legStyle?: string; color: string }) {
  const legStyles = {
    'modern-metal': { geometry: <cylinderGeometry args={[0.04, 0.04, 0.6, 16]} />, metalness: 0.8, roughness: 0.2 },
    'carved-wooden': { geometry: <cylinderGeometry args={[0.06, 0.04, 0.6, 16]} />, metalness: 0.1, roughness: 0.7 },
    'modern-wooden': { geometry: <boxGeometry args={[0.08, 0.6, 0.08]} />, metalness: 0.1, roughness: 0.6 },
    'tapered': { geometry: <cylinderGeometry args={[0.04, 0.06, 0.6, 16]} />, metalness: 0.2, roughness: 0.6 },
    'hairpin': { geometry: <cylinderGeometry args={[0.02, 0.02, 0.6, 8]} />, metalness: 0.9, roughness: 0.1 },
    'turned': { geometry: <cylinderGeometry args={[0.05, 0.05, 0.6, 16]} />, metalness: 0.1, roughness: 0.7 },
    default: { geometry: <cylinderGeometry args={[0.05, 0.05, 0.6, 16]} />, metalness: 0.3, roughness: 0.7 },
  };

  const style = legStyles[legStyle as keyof typeof legStyles] || legStyles.default;

  return (
    <mesh position={position} castShadow>
      {style.geometry}
      <meshStandardMaterial color={color} metalness={style.metalness} roughness={style.roughness} />
    </mesh>
  );
}

// Sofa placeholder model
function SofaModel({ color, legStyle }: { color: string; legStyle?: string }) {
  return (
    <group>
      {/* Main seat */}
      <RoundedBox args={[3, 0.6, 1.2]} radius={0.05} smoothness={4} position={[0, 0, 0]} castShadow receiveShadow>
        <meshStandardMaterial color={color} roughness={0.8} />
      </RoundedBox>

      {/* Backrest */}
      <RoundedBox args={[3, 1, 0.3]} radius={0.05} smoothness={4} position={[0, 0.7, -0.5]} castShadow>
        <meshStandardMaterial color={color} roughness={0.8} />
      </RoundedBox>

      {/* Left Armrest */}
      <RoundedBox args={[0.3, 0.8, 1.2]} radius={0.05} smoothness={4} position={[-1.5, 0.3, 0]} castShadow>
        <meshStandardMaterial color={color} roughness={0.8} />
      </RoundedBox>

      {/* Right Armrest */}
      <RoundedBox args={[0.3, 0.8, 1.2]} radius={0.05} smoothness={4} position={[1.5, 0.3, 0]} castShadow>
        <meshStandardMaterial color={color} roughness={0.8} />
      </RoundedBox>

      {/* Legs */}
      <FurnitureLeg position={[-1.2, -0.6, -0.4]} legStyle={legStyle} color="#2C1810" />
      <FurnitureLeg position={[-1.2, -0.6, 0.4]} legStyle={legStyle} color="#2C1810" />
      <FurnitureLeg position={[1.2, -0.6, -0.4]} legStyle={legStyle} color="#2C1810" />
      <FurnitureLeg position={[1.2, -0.6, 0.4]} legStyle={legStyle} color="#2C1810" />
    </group>
  );
}

// Bed placeholder model
function BedModel({ color, legStyle }: { color: string; legStyle?: string }) {
  return (
    <group>
      {/* Mattress */}
      <RoundedBox args={[3.5, 0.5, 2.5]} radius={0.05} smoothness={4} position={[0, 0, 0]} castShadow receiveShadow>
        <meshStandardMaterial color={color} roughness={0.7} />
      </RoundedBox>

      {/* Headboard */}
      <RoundedBox args={[3.5, 1.5, 0.2]} radius={0.05} smoothness={4} position={[0, 0.8, -1.3]} castShadow>
        <meshStandardMaterial color={color} roughness={0.6} />
      </RoundedBox>

      {/* Bed Frame Base */}
      <mesh position={[0, -0.4, 0]} castShadow>
        <boxGeometry args={[3.6, 0.3, 2.6]} />
        <meshStandardMaterial color="#3D2817" roughness={0.8} />
      </mesh>

      {/* Legs */}
      <FurnitureLeg position={[-1.6, -0.8, -1.1]} legStyle={legStyle} color="#2C1810" />
      <FurnitureLeg position={[-1.6, -0.8, 1.1]} legStyle={legStyle} color="#2C1810" />
      <FurnitureLeg position={[1.6, -0.8, -1.1]} legStyle={legStyle} color="#2C1810" />
      <FurnitureLeg position={[1.6, -0.8, 1.1]} legStyle={legStyle} color="#2C1810" />
    </group>
  );
}

// Chair placeholder model
function ChairModel({ color, legStyle }: { color: string; legStyle?: string }) {
  return (
    <group>
      {/* Seat */}
      <RoundedBox args={[0.8, 0.1, 0.8]} radius={0.03} smoothness={4} position={[0, 0, 0]} castShadow receiveShadow>
        <meshStandardMaterial color={color} roughness={0.8} />
      </RoundedBox>

      {/* Backrest */}
      <RoundedBox args={[0.8, 0.8, 0.1]} radius={0.03} smoothness={4} position={[0, 0.5, -0.35]} castShadow>
        <meshStandardMaterial color={color} roughness={0.8} />
      </RoundedBox>

      {/* Legs */}
      <FurnitureLeg position={[-0.3, -0.35, -0.3]} legStyle={legStyle} color="#2C1810" />
      <FurnitureLeg position={[-0.3, -0.35, 0.3]} legStyle={legStyle} color="#2C1810" />
      <FurnitureLeg position={[0.3, -0.35, -0.3]} legStyle={legStyle} color="#2C1810" />
      <FurnitureLeg position={[0.3, -0.35, 0.3]} legStyle={legStyle} color="#2C1810" />
    </group>
  );
}

// Table placeholder model
function TableModel({ color, legStyle, category }: { color: string; legStyle?: string; category: string }) {
  const isTV = category === 'tvTable';
  const width = isTV ? 2.5 : 1.8;
  const depth = isTV ? 0.6 : 1.2;
  const height = isTV ? 0.2 : 0.15;

  return (
    <group>
      {/* Table Top */}
      <RoundedBox args={[width, height, depth]} radius={0.03} smoothness={4} position={[0, 0, 0]} castShadow receiveShadow>
        <meshStandardMaterial color={color} roughness={0.4} />
      </RoundedBox>

      {/* TV Table has a shelf */}
      {isTV && (
        <RoundedBox args={[2.3, 0.1, 0.5]} radius={0.02} smoothness={4} position={[0, -0.4, 0]} castShadow>
          <meshStandardMaterial color={color} roughness={0.4} />
        </RoundedBox>
      )}

      {/* Legs */}
      <FurnitureLeg position={[-(width / 2 - 0.2), -0.6, -(depth / 2 - 0.15)]} legStyle={legStyle} color="#2C1810" />
      <FurnitureLeg position={[-(width / 2 - 0.2), -0.6, depth / 2 - 0.15]} legStyle={legStyle} color="#2C1810" />
      <FurnitureLeg position={[width / 2 - 0.2, -0.6, -(depth / 2 - 0.15)]} legStyle={legStyle} color="#2C1810" />
      <FurnitureLeg position={[width / 2 - 0.2, -0.6, depth / 2 - 0.15]} legStyle={legStyle} color="#2C1810" />
    </group>
  );
}

export default function FurnitureModel() {
  const groupRef = useRef<Group>(null);
  const { selectedProduct, customization } = useConfiguratorStore();

  // Get material color
  const materialColor = useMemo(() => {
    if (!selectedProduct || !customization?.selectedMaterial) {
      return '#8B7355'; // Default tan color
    }

    const selectedMaterial = selectedProduct.materials.find((m) => m.id === customization.selectedMaterial);
    return selectedMaterial?.color || '#8B7355';
  }, [selectedProduct, customization?.selectedMaterial]);

  // Get selected leg style
  const legStyle = customization?.selectedParts?.leg;

  // Subtle rotation animation
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.05;
    }
  });

  if (!selectedProduct) {
    return null;
  }

  // Render appropriate model based on category
  const renderModel = () => {
    switch (selectedProduct.category) {
      case 'sofa':
        return <SofaModel color={materialColor} legStyle={legStyle} />;
      case 'bed':
        return <BedModel color={materialColor} legStyle={legStyle} />;
      case 'chair':
        return <ChairModel color={materialColor} legStyle={legStyle} />;
      case 'table':
        return <TableModel color={materialColor} legStyle={legStyle} category="table" />;
      case 'dressingTable':
        return <TableModel color={materialColor} legStyle={legStyle} category="dressingTable" />;
      case 'tvTable':
        return <TableModel color={materialColor} legStyle={legStyle} category="tvTable" />;
      default:
        return <SofaModel color={materialColor} legStyle={legStyle} />;
    }
  };

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {renderModel()}
    </group>
  );
}

// Note: In production, replace placeholder models with:
// const { scene } = useGLTF(selectedProduct.modelUrl);
// return <primitive object={scene} />
// useGLTF.preload('/models/product-model.glb');
