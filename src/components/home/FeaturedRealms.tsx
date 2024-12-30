import React from 'react';
import { motion } from 'framer-motion';

const realms = [
  {
    name: 'Midgard',
    description: 'The realm of humans, now frozen in Fimbulwinter.',
    image: 'https://images.unsplash.com/photo-1516166328576-82e16a127024?auto=format&fit=crop&q=80',
  },
  {
    name: 'Alfheim',
    description: 'Home of the Light Elves, bathed in eternal light.',
    image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&q=80',
  },
  {
    name: 'Helheim',
    description: 'The icy realm of the dishonorable dead.',
    image: 'https://images.unsplash.com/photo-1478719059408-592965723cbc?auto=format&fit=crop&q=80',
  },
];

const FeaturedRealms = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Explore the Realms</h2>
          <p className="text-xl text-gray-400">Journey through the mythical Nine Realms of Norse mythology</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {realms.map((realm, index) => (
            <motion.div
              key={realm.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative group"
            >
              <div className="aspect-w-16 aspect-h-9 overflow-hidden rounded-lg">
                <img
                  src={realm.image}
                  alt={realm.name}
                  className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl font-bold mb-2">{realm.name}</h3>
                <p className="text-gray-300">{realm.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedRealms;