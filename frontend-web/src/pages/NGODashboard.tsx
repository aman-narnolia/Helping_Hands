import React, { useState } from 'react';
import { LogOut, Activity, Send, CheckCircle } from 'lucide-react';

const NGODashboard = () => {
  const [requests] = useState([
    { id: 1, type: 'Medical Help', location: 'City Center', status: 'Pending' }
  ]);

  return (
    <div className="flex h-screen bg-gray-50">
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-bold text-brand-orange">NGO Portal</h2>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          <a href="#" className="flex items-center gap-3 px-4 py-3 text-brand-orange bg-orange-50 rounded-lg font-medium">
            <Activity size={20} /> Live Requests
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg font-medium">
            <Send size={20} /> Broadcasts
          </a>
        </nav>
        <div className="p-4 border-t border-gray-200">
          <button onClick={() => window.location.href='/'} className="flex items-center gap-2 text-gray-600 hover:text-red-500 font-medium">
            <LogOut size={20} /> Logout
          </button>
        </div>
      </aside>

      <main className="flex-1 p-8 overflow-y-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Incoming Requests</h1>
        <div className="grid gap-6">
          {requests.map((req) => (
            <div key={req.id} className="bg-white p-6 rounded-xl shadow border border-gray-200 flex justify-between items-center">
              <div>
                <h3 className="font-bold text-lg text-gray-800">{req.type}</h3>
                <p className="text-sm text-gray-500">Location: {req.location}</p>
              </div>
              <div className="flex gap-3">
                <button className="flex items-center gap-1 bg-brand-green text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-green-600 transition">
                  <CheckCircle size={16} /> Accept & Help
                </button>
                <button className="flex items-center gap-1 bg-brand-blue text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-900 transition">
                  <Send size={16} /> Broadcast Need
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};
export default NGODashboard;
