import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import Neural3DBackground from './Neural3DBackground';

// 3D AI Brain Component
function AIBrain() {
  return (
    <group>
      <mesh rotation={[0, 0, 0]}>
        <sphereGeometry args={[1.2, 16, 16]} />
        <meshBasicMaterial wireframe color="#8B5CF6" opacity={0.3} transparent />
      </mesh>
      {/* Neural nodes */}
      {Array.from({ length: 12 }).map((_, i) => (
        <mesh
          key={`brain-node-${i}`}
          position={[
            Math.cos((i / 12) * Math.PI * 2) * 1.1,
            Math.sin((i / 12) * Math.PI * 2) * 1.1,
            (Math.random() - 0.5) * 0.5
          ]}
        >
          <sphereGeometry args={[0.05, 8, 8]} />
          <meshBasicMaterial color="#EC4899" />
        </mesh>
      ))}
    </group>
  );
}

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="about" className="py-20 relative overflow-hidden">
      {/* 3D AI Brain Background */}
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute right-20 top-20 w-64 h-64">
          <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
            <Suspense fallback={null}>
              <ambientLight intensity={0.4} />
              <pointLight position={[10, 10, 10]} intensity={0.6} color="#8B5CF6" />
              <pointLight position={[-10, -10, -10]} intensity={0.4} color="#EC4899" />
              <group>
                <AIBrain />
              </group>
            </Suspense>
          </Canvas>
        </div>
      </div>

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Passionate AI/ML Engineer and Full Stack Developer with expertise in building 
            intelligent systems and scalable applications. Currently working at CrestData 
            Systems, contributing to cutting-edge AI solutions and innovative technologies 
            that shape the future.
          </p>
        </motion.div>

        {/* Key Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-primary-foreground">3+</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">Years Experience</h3>
            <p className="text-muted-foreground text-sm">Building AI solutions and full-stack applications</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-secondary-foreground">15+</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">Projects Completed</h3>
            <p className="text-muted-foreground text-sm">AI/ML, IoT, and web development projects</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-accent-foreground">5+</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">Tech Awards</h3>
            <p className="text-muted-foreground text-sm">Hackathons and coding competitions</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}