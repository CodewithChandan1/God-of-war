import React from 'react';
import PageHeader from '../../components/ui/PageHeader';
import ContentSection from '../../components/ui/ContentSection';

const Privacy = () => {
  return (
    <div>
      <PageHeader
        title="Privacy Policy"
        subtitle="Last updated: March 2024"
        backgroundImage="https://images.unsplash.com/photo-1560272564-c83b66b1ad12?auto=format&fit=crop&q=80"
      />
      <ContentSection>
        <div className="prose prose-invert max-w-none">
          <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
          <p className="text-gray-300 mb-6">
            We collect information that you provide directly to us, including when you create an account,
            make a purchase, or contact us for support.
          </p>

          <h2 className="text-2xl font-bold mb-4">How We Use Your Information</h2>
          <p className="text-gray-300 mb-6">
            We use the information we collect to provide, maintain, and improve our services,
            to process your transactions, and to communicate with you.
          </p>

          <h2 className="text-2xl font-bold mb-4">Information Sharing</h2>
          <p className="text-gray-300 mb-6">
            We do not sell or rent your personal information to third parties. We may share your
            information with service providers who assist us in operating our business.
          </p>
        </div>
      </ContentSection>
    </div>
  );
};

export default Privacy;