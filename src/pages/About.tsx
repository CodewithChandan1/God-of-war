import React from 'react';
import PageHeader from '../components/ui/PageHeader';
import ContentSection from '../components/ui/ContentSection';

const About = () => {
  return (
    <div>
      <PageHeader
        title="About God of War"
        subtitle="Journey through Norse mythology"
        backgroundImage="https://images.unsplash.com/photo-1516166328576-82e16a127024?auto=format&fit=crop&q=80"
      />
      <ContentSection>
        <div className="prose prose-invert max-w-none">
          <h2 className="text-3xl font-bold mb-6">Our Story</h2>
          <p className="text-gray-300 mb-8">
            God of War is an action-adventure game franchise created by Santa Monica Studio and published by Sony Interactive Entertainment. The series follows Kratos, a Spartan warrior who becomes the Greek God of War and later finds himself in the world of Norse mythology.
          </p>
          
          <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
          <p className="text-gray-300 mb-8">
            To create immersive, story-driven experiences that push the boundaries of gaming and storytelling, while delivering unforgettable moments that resonate with players around the world.
          </p>
          
          <h3 className="text-2xl font-bold mb-4">The Team</h3>
          <p className="text-gray-300">
            Santa Monica Studio is a team of passionate developers, artists, and storytellers dedicated to crafting exceptional gaming experiences. Our diverse team brings together talent from across the industry to create something truly special.
          </p>
        </div>
      </ContentSection>
    </div>
  );
};

export default About;