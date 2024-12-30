import React from 'react';
import PageHeader from '../components/ui/PageHeader';
import ContentSection from '../components/ui/ContentSection';
import { motion } from 'framer-motion';

const steps = [
  {
    title: "Create Your Account",
    description: "Sign up and create your God of War profile to track your progress and achievements."
  },
  {
    title: "Choose Your Path",
    description: "Select your difficulty level and begin your journey through Norse mythology."
  },
  {
    title: "Master Combat",
    description: "Learn and master the intricate combat system, combining Kratos' abilities with Atreus' support."
  },
  {
    title: "Explore the Realms",
    description: "Travel through the Nine Realms, discovering secrets and facing mythological creatures."
  }
];

const HowItWorks = () => {
  return (
    <div>
      <PageHeader
        title="How It Works"
        subtitle="Your guide to getting started"
        backgroundImage="https://images.unsplash.com/photo-1516166328576-82e16a127024?auto=format&fit=crop&q=80"
      />
      <ContentSection>
        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-start space-x-8 mb-12"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-red-600 flex items-center justify-center text-xl font-bold">
                {index + 1}
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </ContentSection>
    </div>
  );
};

export default HowItWorks;