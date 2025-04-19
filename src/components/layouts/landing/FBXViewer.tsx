import { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useFBX } from '@react-three/drei';
import * as THREE from 'three';
import { useMediaQuery } from 'react-responsive';

type Position = [number, number, number];
type Rotation = [number, number, number];

const HOUSE_POSITIONS: { position: Position; scale: number; url: string; rotation: Rotation }[] = [
  { position: [-6.5, 0, -2], scale: 0.003, url: '/clay/default.fbx', rotation: [0, Math.PI / 4, 0] },
  { position: [6.5, 0, -2], scale: 0.003, url: '/clay/apartment.fbx', rotation: [0, -Math.PI / 4, 0] },
  { position: [-4, 0, 2], scale: 0.003, url: '/clay/mansion.fbx', rotation: [0, Math.PI / 2, 0] },
  { position: [4, 0, 2], scale: 0.003, url: '/clay/mushroom.fbx', rotation: [0, -Math.PI / 2, 0] },
];

function House({ position, scale, url, rotation }: { position: Position; scale: number; url: string; rotation: Rotation }) {
  const fbx = useFBX(url);
  const modelRef = useRef<THREE.Group>(null);
  const [scrollDirection, setScrollDirection] = useState(0);
  const lastScrollY = useRef(0);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (fbx) {
      fbx.scale.set(scale, scale, scale);
      fbx.position.set(...position);
      fbx.rotation.set(...rotation);
    }

    const handleScroll = () => {
      const currentY = window.scrollY;
      const direction = currentY > lastScrollY.current ? 1 : -1;
      setScrollDirection(direction);
      lastScrollY.current = currentY;

      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }

      scrollTimeout.current = setTimeout(() => {
        setScrollDirection(0);
      }, 150);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, [fbx, position, scale, rotation]);

  useFrame((state) => {
    if (modelRef.current && scrollDirection !== 0) {
      modelRef.current.rotation.y += 0.01 * scrollDirection;
    }
  });

  return <primitive object={fbx} ref={modelRef} />;
}

export default function FBXViewer() {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isMedium = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
  const isLarge = useMediaQuery({ minWidth: 1024 });

  const getVisibleHouses = () => {
    if (isMobile) {
      // Single house in top right
      return [{
        ...HOUSE_POSITIONS[0],
        position: [1.5, 0, 0] as Position,
        scale: 0.02,
        rotation: [0, -Math.PI / 6, 0] as Rotation
      }];
    } else if (isMedium) {
      // Three houses spread across the screen
      return [
        { ...HOUSE_POSITIONS[0], position: [-1.5, 0, 2] as Position, scale: 0.003, rotation: [0, Math.PI / 6, 0] as Rotation }, // Top left
        { ...HOUSE_POSITIONS[1], position: [1.5, 0, 2] as Position, scale: 0.003, rotation: [0, -Math.PI / 6, 0] as Rotation }, // Top right
      ];
    } else {
      return HOUSE_POSITIONS;
    }
  };

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <Canvas camera={{ position: isMobile ? [0, 2, 2] : [0, 4, 6], fov: isMobile ? 40 : 50 }}>
        <ambientLight intensity={1} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        {getVisibleHouses().map((props, index) => (
          <House key={index} {...props} />
        ))}
        <OrbitControls enabled={false} />
      </Canvas>
    </div>
  );
} 