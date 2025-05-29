import React from 'react';
import { Activity, BarChart2, Clock, Download, Filter, Search } from 'lucide-react';

const UsageHistoryPage: React.FC = () => {
  const usageData = [
    {
      id: 1,
      service: 'AI Chat',
      date: 'May 29, 2025 10:30 AM',
      duration: '15 min',
      credits: 25,
      status: 'Completed'
    },
    {
      id: 2,
      service: 'Image Generation',
      date: 'May 29, 2025 09:15 AM',
      duration: '5 min',
      credits: 50,
      status: 'Completed'
    }
  ];

  return (
    <div className="container mx-auto max-w-5xl">
      {/* Usage Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-gray-600">Total Usage</h3>
            <Clock size={20} className="text-blue-600" />
          </div>
          <p className="text-2xl font-semibold">324 minutes</p>
          <p className="text-sm text-gray-500">This month</p>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-gray-600">Credits Used</h3>
            <Activity size={20} className="text-green-600" />
          </div>
          <p className="text-2xl font-semibold">1,250</p>
          <p className="text-sm text-gray-500">This month</p>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-gray-600">Active Services</h3>
            <BarChart2 size={20} className="text-purple-600" />
          </div>
          <p className="text-2xl font-semibold">5</p>
          <p className="text-sm text-gray-500">Services used</p>
        </div>
      </div>

      {/* Usage History Table */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <Activity size={24} className="text-blue-600 mr-2" />
            <h1 className="text-2xl font-semibold">Usage History</h1>
          </div>
          <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            <Download size={18} className="mr-2" />
            Export
          </button>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="flex-1 relative">
            <input
              type="text"
              placeholder="Search usage history..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
          </div>
          <button className="flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
            <Filter size={18} className="mr-2" />
            Filter
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 text-gray-600">Service</th>
                <th className="text-left py-3 px-4 text-gray-600">Date & Time</th>
                <th className="text-left py-3 px-4 text-gray-600">Duration</th>
                <th className="text-right py-3 px-4 text-gray-600">Credits</th>
                <th className="text-right py-3 px-4 text-gray-600">Status</th>
              </tr>
            </thead>
            <tbody>
              {usageData.map((usage) => (
                <tr key={usage.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4">
                    <span className="font-medium text-gray-900">{usage.service}</span>
                  </td>
                  <td className="py-3 px-4 text-gray-600">{usage.date}</td>
                  <td className="py-3 px-4 text-gray-600">{usage.duration}</td>
                  <td className="py-3 px-4 text-right font-medium">{usage.credits}</td>
                  <td className="py-3 px-4 text-right">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      {usage.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UsageHistoryPage;