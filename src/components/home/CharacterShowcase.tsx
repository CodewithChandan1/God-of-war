import React from 'react';
import { motion } from 'framer-motion';

const characters = [
  {
    name: 'Kratos',
    role: 'The Ghost of Sparta',
    description: 'A former Greek god seeking peace in the Norse realm.',
    image: 'https://images.unsplash.com/photo-1534809027769-b00d750a6bac?auto=format&fit=crop&q=80',
  },
  {
    name: 'Atreus',
    role: 'Son of Kratos',
    description: 'A young boy learning to control his divine powers.',
    image: 'https://images.unsplash.com/photo-1560272564-c83b66b1ad12?auto=format&fit=crop&q=80',
  },
];

const CharacterShowcase = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Main Characters</h2>
          <p className="text-xl text-gray-400">Meet the heroes of this epic tale</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {characters.map((character, index) => (
            <motion.div
              key={character.name}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative overflow-hidden rounded-lg bg-gradient-to-r from-black/80 to-black/40"
            >
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2">
                  <img
                    src={character.image}
                    alt={character.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8 flex flex-col justify-center">
                  <h3 className="text-3xl font-bold mb-2">{character.name}</h3>
                  <p className="text-red-500 mb-4">{character.role}</p>
                  <p className="text-gray-300">{character.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CharacterShowcase;