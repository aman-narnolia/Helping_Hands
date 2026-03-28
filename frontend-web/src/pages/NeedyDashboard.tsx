import React, { useState } from 'react';
import { LogOut, PlusCircle, MessageSquare } from 'lucide-react';

const NeedyDashboard = () => {
  const [requests, setRequests] = useState([
    { id: 1, type: 'Medical', status: 'Pending', date: 'Oct 12' },
    { id: 2, type: 'Food', status: 'In Progress', date: 'Oct 10' }
  ]);

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-bold text-brand-blue">Needy Portal</h2>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          <a href="#" className="flex items-center gap-3 px-4 py-3 text-brand-teal bg-teal-50 rounded-lg font-medium">
            <PlusCircle size={20} /> My Requests
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

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">My Requests</h1>
          <button className="bg-brand-blue text-white px-5 py-2 rounded-lg font-semibold hover:bg-blue-900 transition flex items-center gap-2">
            <PlusCircle size={20} /> New Request
          </button>
        </div>

        <div className="grid gap-6">
          {requests.map((req) => (
            <div key={req.id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 flex justify-between items-center hover:shadow-md transition">
              <div>
                <h3 className="font-bold text-lg text-gray-800">{req.type} Assistance</h3>
                <p className="text-sm text-gray-500">Requested on {req.date}</p>
              </div>
              <div>
                <span className={`px-4 py-1 rounded-full text-sm font-semibold ${req.status === 'Pending' ? 'bg-orange-100 text-brand-orange' : 'bg-green-100 text-brand-green'}`}>
                  {req.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};
export default NeedyDashboard;
