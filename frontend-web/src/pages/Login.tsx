import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('Needy');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem('userRole', role);
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full border border-gray-100">
        <h2 className="text-3xl font-extrabold text-center text-brand-blue mb-2">Welcome Back</h2>
        <p className="text-gray-500 text-center mb-8">Ready to make a difference today?</p>
        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Email / Username</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="block w-full rounded-md border-gray-300 border focus:border-brand-teal focus:ring-brand-teal p-3 outline-none transition" placeholder="you@example.com" required />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Password</label>
            <input type="password" placeholder="••••••••" className="block w-full rounded-md border-gray-300 border focus:border-brand-teal focus:ring-brand-teal p-3 outline-none transition" required />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Preview Persona (Demo)</label>
            <select value={role} onChange={(e) => setRole(e.target.value)} className="block w-full rounded-md border-gray-300 border focus:border-brand-teal focus:ring-brand-teal p-3 outline-none transition bg-white">
              <option>Needy</option>
              <option>Donor</option>
              <option>NGO</option>
              <option>Admin</option>
            </select>
          </div>
          <button type="submit" className="w-full bg-brand-teal text-white py-3 rounded-md hover:bg-teal-700 transition font-bold text-lg mt-4 shadow-md">Sign In to Dashboard</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
