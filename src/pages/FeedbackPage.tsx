import React, { useState } from 'react';
import { MessageSquare, Star, ThumbsUp, ThumbsDown, Send } from 'lucide-react';

const FeedbackPage: React.FC = () => {
  const [rating, setRating] = useState<number>(0);
  const [feedbackType, setFeedbackType] = useState<string>('general');

  const feedbackTypes = [
    { id: 'general', label: 'General Feedback' },
    { id: 'bug', label: 'Report a Bug' },
    { id: 'feature', label: 'Feature Request' },
    { id: 'improvement', label: 'Suggestion for Improvement' }
  ];

  return (
    <div className="container mx-auto">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Feedback</h1>

        {/* Rating Section */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="text-xl font-semibold mb-6">How would you rate your experience?</h2>
          
          <div className="flex space-x-2 mb-6">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                onClick={() => setRating(star)}
                className={`p-2 rounded-full transition-colors ${
                  rating >= star ? 'text-yellow-400' : 'text-gray-300'
                }`}
              >
                <Star size={32} fill={rating >= star ? 'currentColor' : 'none'} />
              </button>
            ))}
          </div>

          <div className="flex space-x-4">
            <button className="flex items-center px-4 py-2 rounded-lg border border-gray-200 hover:bg-gray-50">
              <ThumbsUp size={18} className="mr-2" />
              <span>What went well</span>
            </button>
            <button className="flex items-center px-4 py-2 rounded-lg border border-gray-200 hover:bg-gray-50">
              <ThumbsDown size={18} className="mr-2" />
              <span>What could be better</span>
            </button>
          </div>
        </div>

        {/* Feedback Form */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
          <h2 className="text-xl font-semibold mb-6">Share your feedback</h2>

          <form className="space-y-6">
            {/* Feedback Type */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Type of Feedback
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {feedbackTypes.map((type) => (
                  <button
                    key={type.id}
                    type="button"
                    onClick={() => setFeedbackType(type.id)}
                    className={`p-4 rounded-lg border text-left transition-colors ${
                      feedbackType === type.id
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:bg-gray-50'
                    }`}
                  >
                    <MessageSquare
                      size={20}
                      className={`mb-2 ${
                        feedbackType === type.id ? 'text-blue-500' : 'text-gray-400'
                      }`}
                    />
                    <h3 className="font-medium">{type.label}</h3>
                  </button>
                ))}
              </div>
            </div>

            {/* Title */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Title
              </label>
              <input
                type="text"
                placeholder="Brief summary of your feedback"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Description
              </label>
              <textarea
                rows={4}
                placeholder="Please provide detailed feedback..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            {/* Attachments */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Attachments (optional)
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                <p className="text-gray-600">
                  Drag and drop files here, or click to select files
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  Supported formats: PNG, JPG, GIF, PDF (max 10MB)
                </p>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center"
            >
              <Send size={18} className="mr-2" />
              Submit Feedback
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FeedbackPage;