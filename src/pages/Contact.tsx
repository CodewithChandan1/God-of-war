import React from 'react';
import PageHeader from '../components/ui/PageHeader';
import ContentSection from '../components/ui/ContentSection';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <div>
      <PageHeader
        title="Contact Us"
        subtitle="Get in touch with our team"
        backgroundImage="https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&q=80"
      />
      <ContentSection>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
            <p className="text-gray-300 mb-8">
              Have questions about God of War? We're here to help. Fill out the form below and we'll get back to you as soon as possible.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <Mail className="text-red-500" />
                <span>support@godofwar.com</span>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="text-red-500" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="text-red-500" />
                <span>Santa Monica, CA</span>
              </div>
            </div>
          </div>
          
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
              <textarea
                id="message"
                rows={6}
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-red-600 text-white font-medium rounded-md hover:bg-red-700 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </ContentSection>
    </div>
  );
};

export default Contact;