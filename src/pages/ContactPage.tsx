import React from 'react';
import { Mail, MessageCircle, Phone, MapPin, Clock, Send } from 'lucide-react';

const ContactPage: React.FC = () => {
  return (
    <div className="container mx-auto">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Contact Us</h1>
        
        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Phone className="text-blue-600" size={24} />
              </div>
              <h2 className="text-lg font-medium ml-3">Phone</h2>
            </div>
            <p className="text-gray-600">+1 (555) 123-4567</p>
            <p className="text-sm text-gray-500 mt-2">Mon-Fri, 9am-6pm EST</p>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-green-100 rounded-lg">
                <Mail className="text-green-600" size={24} />
              </div>
              <h2 className="text-lg font-medium ml-3">Email</h2>
            </div>
            <p className="text-gray-600">support@kaikun.ai</p>
            <p className="text-sm text-gray-500 mt-2">24/7 email support</p>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-purple-100 rounded-lg">
                <MessageCircle className="text-purple-600" size={24} />
              </div>
              <h2 className="text-lg font-medium ml-3">Live Chat</h2>
            </div>
            <p className="text-gray-600">Chat with our team</p>
            <p className="text-sm text-gray-500 mt-2">Average response time: 5 mins</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-12">
          <h2 className="text-xl font-semibold mb-6">Send us a message</h2>
          
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Subject
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center"
            >
              <Send size={18} className="mr-2" />
              Send Message
            </button>
          </form>
        </div>

        {/* Office Information */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
          <h2 className="text-xl font-semibold mb-6">Visit our office</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <MapPin className="text-gray-400 mr-2" size={20} />
                <h3 className="font-medium">Address</h3>
              </div>
              <p className="text-gray-600">
                123 AI Street<br />
                Tech Valley, CA 94043<br />
                United States
              </p>
            </div>
            
            <div>
              <div className="flex items-center mb-4">
                <Clock className="text-gray-400 mr-2" size={20} />
                <h3 className="font-medium">Business Hours</h3>
              </div>
              <div className="space-y-2 text-gray-600">
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;