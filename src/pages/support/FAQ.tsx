import React from 'react';
import PageHeader from '../../components/ui/PageHeader';
import ContentSection from '../../components/ui/ContentSection';
import { motion } from 'framer-motion';

const faqs = [
  {
    question: "What platforms is God of War available on?",
    answer: "God of War (2018) is available on PlayStation 4, PlayStation 5, and PC."
  },
  {
    question: "Do I need to play previous God of War games?",
    answer: "While playing previous games can enhance your understanding of Kratos' background, God of War (2018) was designed as a fresh start and can be enjoyed without prior knowledge of the series."
  },
  {
    question: "What is the recommended age rating?",
    answer: "God of War is rated M (Mature) by the ESRB, recommended for players aged 17 and older."
  },
  {
    question: "Are there different difficulty settings?",
    answer: "Yes, God of War features multiple difficulty settings to accommodate different skill levels and playstyles."
  }
];

const FAQ = () => {
  return (
    <div>
      <PageHeader
        title="Frequently Asked Questions"
        subtitle="Find answers to common questions"
        backgroundImage="https://images.unsplash.com/photo-1478719059408-592965723cbc?auto=format&fit=crop&q=80"
      />
      <ContentSection>
        <div className="space-y-8">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-6 bg-gray-900/50 rounded-lg"
            >
              <h3 className="text-xl font-bold mb-4">{faq.question}</h3>
              <p className="text-gray-300">{faq.answer}</p>
            </motion.div>
          ))}
        </div>
      </ContentSection>
    </div>
  );
};

export default FAQ;