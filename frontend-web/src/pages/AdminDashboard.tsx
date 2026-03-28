import React from 'react';
import { LogOut, Users, ShieldCheck } from 'lucide-react';

const AdminDashboard = () => {
  return (
    <div className="flex h-screen bg-gray-50">
      <aside className="w-64 bg-gray-900 text-white flex flex-col">
        <div className="p-6 border-b border-gray-800">
          <h2 className="text-xl font-bold">Admin Console</h2>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          <a href="#" className="flex items-center gap-3 px-4 py-3 bg-gray-800 rounded-lg font-medium">
            <ShieldCheck size={20} /> Verify NGOs
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 hover:bg-gray-800 rounded-lg font-medium">
            <Users size={20} /> Manage Users
          </a>
        </nav>
        <div className="p-4 border-t border-gray-800">
          <button onClick={() => window.location.href='/'} className="flex items-center gap-2 hover:text-red-400 font-medium">
            <LogOut size={20} /> Logout
          </button>
        </div>
      </aside>

      <main className="flex-1 p-8 overflow-y-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Pending NGO Verifications</h1>
        <div className="bg-white rounded-xl shadow border border-gray-200 overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="p-4 font-semibold text-gray-600">NGO Name</th>
                <th className="p-4 font-semibold text-gray-600">Documents</th>
                <th className="p-4 font-semibold text-gray-600">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-100">
                <td className="p-4 font-medium">Helping Hands Org</td>
                <td className="p-4 text-brand-blue underline cursor-pointer">View Docs</td>
                <td className="p-4">
                  <button className="bg-green-100 text-brand-green px-3 py-1 rounded-md text-sm font-semibold mr-2 transition hover:bg-green-200">Approve</button>
                  <button className="bg-red-100 text-red-700 px-3 py-1 rounded-md text-sm font-semibold transition hover:bg-red-200">Reject</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};
export default AdminDashboard;
