import React from 'react';
import PageHeader from '../../components/ui/PageHeader';
import ContentSection from '../../components/ui/ContentSection';

const Terms = () => {
  return (
    <div>
      <PageHeader
        title="Terms of Service"
        subtitle="Last updated: March 2024"
        backgroundImage="https://images.unsplash.com/photo-1534809027769-b00d750a6bac?auto=format&fit=crop&q=80"
      />
      <ContentSection>
        <div className="prose prose-invert max-w-none">
          <h2 className="text-2xl font-bold mb-4">Acceptance of Terms</h2>
          <p className="text-gray-300 mb-6">
            By accessing and using this website, you accept and agree to be bound by the terms
            and provision of this agreement.
          </p>

          <h2 className="text-2xl font-bold mb-4">User Conduct</h2>
          <p className="text-gray-300 mb-6">
            You agree to use the website in a manner consistent with any and all applicable laws
            and regulations.
          </p>

          <h2 className="text-2xl font-bold mb-4">Intellectual Property</h2>
          <p className="text-gray-300 mb-6">
            The content on this website is owned by us and our licensors and is protected by
            copyright and other intellectual property laws.
          </p>
        </div>
      </ContentSection>
    </div>
  );
};

export default Terms;