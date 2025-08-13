import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';

function NeuralNetwork() {
  return (
    <group>
      {/* Neural nodes */}
      {Array.from({ length: 20 }).map((_, i) => (
        <mesh
          key={`node-${i}`}
          position={[
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 10
          ]}
        >
          <sphereGeometry args={[0.05, 8, 8]} />
          <meshBasicMaterial color="#3B82F6" />
        </mesh>
      ))}
      
      {/* Wireframe sphere */}
      <mesh rotation={[0, 0, 0]}>
        <sphereGeometry args={[2, 32, 32]} />
        <meshBasicMaterial wireframe color="#8B5CF6" opacity={0.3} transparent />
      </mesh>
      
      {/* Rotating torus */}
      <mesh rotation={[Math.PI / 4, 0, 0]}>
        <torusGeometry args={[1.5, 0.2, 16, 100]} />
        <meshBasicMaterial wireframe color="#EC4899" opacity={0.4} transparent />
      </mesh>
    </group>
  );
}

export default function Neural3DBackground() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        className="w-full h-full"
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.1} />
          <pointLight position={[10, 10, 10]} intensity={0.5} color="#3B82F6" />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#EC4899" />
          <NeuralNetwork />
        </Suspense>
      </Canvas>
    </div>
  );
}