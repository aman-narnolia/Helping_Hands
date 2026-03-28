import React, { useState } from 'react';
import { LogOut, Heart, MessageSquare } from 'lucide-react';

const DonorDashboard = () => {
  const [donations, setDonations] = useState([
    { id: 1, item: '100 Blankets', status: 'Accepted by NGO HelpAll', date: 'Oct 11' },
    { id: 2, item: '50 Meals', status: 'Pending', date: 'Oct 13' }
  ]);

  return (
    <div className="flex h-screen bg-gray-50">
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-bold text-brand-teal">Donor Portal</h2>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          <a href="#" className="flex items-center gap-3 px-4 py-3 text-brand-teal bg-teal-50 rounded-lg font-medium">
            <Heart size={20} /> My Donations
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg font-medium">
            <MessageSquare size={20} /> Messages
          </a>
        </nav>
        <div className="p-4 border-t border-gray-200">
          <button onClick={() => window.location.href='/'} className="flex items-center gap-2 text-gray-600 hover:text-red-500 font-medium">
            <LogOut size={20} /> Logout
          </button>
        </div>
      </aside>

      <main className="flex-1 p-8 overflow-y-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">My Donations</h1>
          <button className="bg-brand-teal text-white px-5 py-2 rounded-lg font-semibold hover:bg-teal-700 transition flex items-center gap-2">
            <Heart size={20} /> New Donation
          </button>
        </div>

        <div className="grid gap-6">
          {donations.map((don) => (
            <div key={don.id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 flex justify-between items-center hover:shadow-md transition">
              <div>
                <h3 className="font-bold text-lg text-gray-800">{don.item}</h3>
                <p className="text-sm text-gray-500">Offered on {don.date}</p>
              </div>
              <div>
                <span className={`px-4 py-1 rounded-full text-sm font-semibold ${don.status === 'Pending' ? 'bg-orange-100 text-brand-orange' : 'bg-green-100 text-brand-green'}`}>
                  {don.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};
export default DonorDashboard;
