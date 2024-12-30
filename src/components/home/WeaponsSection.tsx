import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { motion } from 'framer-motion';

const WeaponModel = () => {
  return (
    <mesh rotation={[0, Math.PI * 0.25, 0]}>
      <boxGeometry args={[1, 4, 1]} />
      <meshStandardMaterial color="#444" metalness={0.8} roughness={0.2} />
    </mesh>
  );
};

const WeaponsSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Legendary Weapons</h2>
          <p className="text-xl text-gray-400">Wield the power of gods</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold">Leviathan Axe</h3>
            <p className="text-gray-300">
              Forged by the Huldra Brothers, this magical axe was a gift to Kratos' late wife, Faye. 
              Imbued with ice magic, it can freeze enemies and return to Kratos' hand when thrown.
            </p>
            <ul className="space-y-2 text-gray-400">
              <li>• Freezing capabilities</li>
              <li>• Magical recall ability</li>
              <li>• Runic attack slots</li>
              <li>• Upgradeable skills</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="h-[400px]"
          >
            <Canvas>
              <PerspectiveCamera makeDefault position={[0, 0, 5]} />
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} />
              <WeaponModel />
              <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
            </Canvas>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WeaponsSection;