import React from 'react';
import PageHeader from '../../components/ui/PageHeader';
import ContentSection from '../../components/ui/ContentSection';
import { Book, MessageCircle, Video, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

const HelpCenter = () => {
  const resources = [
    {
      icon: <Book className="w-8 h-8" />,
      title: "Game Guides",
      description: "Detailed guides and walkthroughs for God of War",
      link: "#guides"
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Community Support",
      description: "Connect with other players and get help",
      link: "#community"
    },
    {
      icon: <Video className="w-8 h-8" />,
      title: "Video Tutorials",
      description: "Watch helpful gameplay tutorials and tips",
      link: "#tutorials"
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Documentation",
      description: "Technical documentation and FAQs",
      link: "/faq"
    }
  ];

  return (
    <div>
      <PageHeader
        title="Help Center"
        subtitle="Find the help you need"
        backgroundImage="https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?auto=format&fit=crop&q=80"
      />
      <ContentSection>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {resources.map((resource, index) => (
            <Link
              key={index}
              to={resource.link}
              className="p-6 bg-gray-900/50 rounded-lg hover:bg-gray-800/50 transition-colors"
            >
              <div className="text-red-500 mb-4">{resource.icon}</div>
              <h3 className="text-xl font-bold mb-2">{resource.title}</h3>
              <p className="text-gray-300">{resource.description}</p>
            </Link>
          ))}
        </div>
      </ContentSection>
    </div>
  );
};

export default HelpCenter;