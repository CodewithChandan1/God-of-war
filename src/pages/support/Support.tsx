import React from 'react';
import PageHeader from '../../components/ui/PageHeader';
import ContentSection from '../../components/ui/ContentSection';
import { Shield, Headphones, MessageSquare } from 'lucide-react';

const Support = () => {
  return (
    <div>
      <PageHeader
        title="Customer Support"
        subtitle="We're here to help you"
        backgroundImage="https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&q=80"
      />
      <ContentSection>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center p-6">
            <Shield className="w-12 h-12 text-red-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">24/7 Support</h3>
            <p className="text-gray-300">Round-the-clock assistance for all your needs</p>
          </div>
          <div className="text-center p-6">
            <Headphones className="w-12 h-12 text-red-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Live Chat</h3>
            <p className="text-gray-300">Connect with our support team instantly</p>
          </div>
          <div className="text-center p-6">
            <MessageSquare className="w-12 h-12 text-red-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Email Support</h3>
            <p className="text-gray-300">Get detailed assistance via email</p>
          </div>
        </div>

        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Contact Support</h2>
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Issue Type</label>
              <select className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md">
                <option>Technical Issue</option>
                <option>Account Problem</option>
                <option>Billing Question</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Description</label>
              <textarea
                rows={6}
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md"
                placeholder="Describe your issue..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-red-600 text-white font-medium rounded-md hover:bg-red-700 transition-colors"
            >
              Submit Ticket
            </button>
          </form>
        </div>
      </ContentSection>
    </div>
  );
};

export default Support;