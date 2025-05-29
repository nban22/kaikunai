import React from 'react';
import { CreditCard, Download, Filter, Search } from 'lucide-react';

const PaymentHistoryPage: React.FC = () => {
  const transactions = [
    {
      id: 'INV-2025-001',
      date: 'May 29, 2025',
      amount: 49.99,
      status: 'Completed',
      type: 'Pro Plan Subscription',
      paymentMethod: 'Visa •••• 4242'
    },
    {
      id: 'INV-2025-002',
      date: 'May 15, 2025',
      amount: 20.00,
      status: 'Completed',
      type: 'Credits Purchase',
      paymentMethod: 'PayPal'
    }
  ];

  return (
    <div className="container mx-auto max-w-5xl">
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <CreditCard size={24} className="text-blue-600 mr-2" />
            <h1 className="text-2xl font-semibold">Payment History</h1>
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
              placeholder="Search transactions..."
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
                <th className="text-left py-3 px-4 text-gray-600">Transaction ID</th>
                <th className="text-left py-3 px-4 text-gray-600">Date</th>
                <th className="text-left py-3 px-4 text-gray-600">Type</th>
                <th className="text-left py-3 px-4 text-gray-600">Payment Method</th>
                <th className="text-right py-3 px-4 text-gray-600">Amount</th>
                <th className="text-right py-3 px-4 text-gray-600">Status</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction) => (
                <tr key={transaction.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4">
                    <span className="text-blue-600 font-medium">{transaction.id}</span>
                  </td>
                  <td className="py-3 px-4 text-gray-600">{transaction.date}</td>
                  <td className="py-3 px-4 text-gray-600">{transaction.type}</td>
                  <td className="py-3 px-4 text-gray-600">{transaction.paymentMethod}</td>
                  <td className="py-3 px-4 text-right font-medium">${transaction.amount}</td>
                  <td className="py-3 px-4 text-right">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      {transaction.status}
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

export default PaymentHistoryPage;