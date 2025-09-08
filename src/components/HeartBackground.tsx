'use client';

import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

// Heart shape geometry
function createHeartGeometry() {
    const heartShape = new THREE.Shape();

    const x = 0, y = 0;
    heartShape.moveTo(x + 5, y + 5);
    heartShape.bezierCurveTo(x + 5, y + 5, x + 4, y, x, y);
    heartShape.bezierCurveTo(x - 6, y, x - 6, y + 3.5, x - 6, y + 3.5);
    heartShape.bezierCurveTo(x - 6, y + 5.5, x - 4, y + 7.7, x, y + 10);
    heartShape.bezierCurveTo(x + 4, y + 7.7, x + 6, y + 5.5, x + 6, y + 3.5);
    heartShape.bezierCurveTo(x + 6, y + 3.5, x + 6, y, x, y);

    return new THREE.ExtrudeGeometry(heartShape, {
        depth: 0.5,
        bevelEnabled: true,
        bevelSegments: 5,
        bevelSize: 0.05,
        bevelThickness: 0.05
    });
}

// Floating Heart Component
function FloatingHeart({ position, scale, color, speed }: {
    position: [number, number, number];
    scale: number;
    color: string;
    speed: number;
}) {
    const heartGeometry = createHeartGeometry();

    return (
        <Float
            speed={speed}
            rotationIntensity={0.2}
            floatIntensity={0.5}
            position={position}
        >
            <mesh geometry={heartGeometry} scale={[scale, scale, scale]} rotation={[Math.PI, 0, 0]}>
                <meshStandardMaterial
                    color={color}
                    opacity={0.15}
                    transparent
                    metalness={0.1}
                    roughness={0.8}
                />
            </mesh>
        </Float>
    );
}

// Heart Background Scene
function HeartScene() {
    const hearts = [];

    // Generate random floating hearts
    for (let i = 0; i < 25; i++) {
        hearts.push(
            <FloatingHeart
                key={i}
                position={[
                    (Math.random() - 0.5) * 50,
                    (Math.random() - 0.5) * 30,
                    (Math.random() - 0.5) * 20
                ]}
                scale={0.05 + Math.random() * 0.15}
                color={Math.random() > 0.5 ? "#14b8a6" : "#f0fdfa"}
                speed={0.5 + Math.random() * 1.5}
            />
        );
    }

    return (
        <>
            {/* Ambient lighting */}
            <ambientLight intensity={0.3} />
            <pointLight position={[10, 10, 10]} intensity={0.3} />

            {/* Floating hearts */}
            {hearts}
        </>
    );
}

interface HeartBackgroundProps {
    className?: string;
    opacity?: number;
}

export default function HeartBackground({ className = "", opacity = 0.3 }: HeartBackgroundProps) {
    return (
        <div className={`absolute inset-0 pointer-events-none ${className}`} style={{ opacity }}>
            <Canvas
                camera={{ position: [0, 0, 20], fov: 60 }}
                className="absolute inset-0"
            >
                <Suspense fallback={null}>
                    <HeartScene />
                </Suspense>
            </Canvas>
        </div>
    );
}
