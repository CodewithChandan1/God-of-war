import React, { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { motion } from 'framer-motion';

const AxeModel = () => {
  return (
    <mesh rotation={[0, Math.PI * 0.25, 0]}>
      <boxGeometry args={[1, 4, 1]} />
      <meshStandardMaterial color="#444" metalness={0.8} roughness={0.2} />
    </mesh>
  );
};

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} className="h-screen relative overflow-hidden bg-[#111]">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?auto=format&fit=crop&q=80")',
          filter: 'brightness(0.4)'
        }}
      />

      {/* 3D Scene */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-2/3">
        <Canvas>
          <PerspectiveCamera makeDefault position={[0, 0, 5]} />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <AxeModel />
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
        </Canvas>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-6">
              God of War
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Embark on an epic journey through Norse mythology with Kratos and Atreus
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-red-600 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-red-700 transition-colors"
            >
              Begin Journey
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;