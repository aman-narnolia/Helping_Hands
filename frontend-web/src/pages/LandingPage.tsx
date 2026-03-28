import React from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Navbar */}
      <header className="px-8 py-4 flex items-center justify-between shadow-sm bg-white fixed w-full top-0 z-50">
        <div className="flex items-center gap-2">
          <Heart className="text-brand-orange w-8 h-8" />
          <span className="text-2xl font-bold text-brand-blue tracking-tight">Helping Connect</span>
        </div>
        <nav className="hidden md:flex gap-6">
          <a href="#how-it-works" className="text-gray-600 hover:text-brand-teal font-medium transition-colors">How It Works</a>
          <a href="#features" className="text-gray-600 hover:text-brand-teal font-medium transition-colors">Features</a>
          <a href="#impact" className="text-gray-600 hover:text-brand-teal font-medium transition-colors">Our Impact</a>
        </nav>
        <div className="flex gap-4">
          <Link to="/login" className="px-5 py-2 text-brand-blue font-semibold hover:bg-gray-50 rounded-lg transition-colors">Sign In</Link>
          <Link to="/login" className="px-5 py-2 bg-brand-teal text-white font-semibold rounded-lg shadow hover:bg-teal-700 transition-colors">Get Started</Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-8 text-center max-w-5xl mx-auto flex flex-col items-center">
        <h1 className="text-5xl md:text-7xl font-extrabold text-brand-blue leading-tight mb-6">
          Connecting Needs with <span className="text-brand-orange">Helping Hands</span>
        </h1>
        <p className="text-xl text-gray-500 mb-10 max-w-2xl">
          A seamless platform bringing together Needy individuals, generous Donors, and verified NGOs to create meaningful, real-time social impact.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link to="/login" className="px-8 py-4 bg-brand-blue text-white rounded-full font-bold text-lg hover:bg-blue-900 shadow-lg transform hover:-translate-y-1 transition-all">Request Help</Link>
          <Link to="/login" className="px-8 py-4 bg-white text-brand-teal border-2 border-brand-teal rounded-full font-bold text-lg hover:bg-teal-50 shadow-lg transform hover:-translate-y-1 transition-all">Become a Donor</Link>
          <Link to="/login" className="px-8 py-4 bg-brand-orange text-white rounded-full font-bold text-lg hover:bg-orange-600 shadow-lg transform hover:-translate-y-1 transition-all">Join as NGO</Link>
        </div>
      </section>

      {/* How it Works */}
      <section id="how-it-works" className="py-20 bg-gray-50 px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-12">How It Works</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="p-6 bg-white rounded-xl shadow-md border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-blue-100 text-brand-blue rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
              <h3 className="font-semibold text-xl mb-2 text-brand-blue">Request Made</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Needy users create detailed help requests for food, medical, or essentials.</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-md border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-teal-100 text-brand-teal rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
              <h3 className="font-semibold text-xl mb-2 text-brand-teal">NGO Accepts</h3>
              <p className="text-gray-500 text-sm leading-relaxed">A verified NGO evaluates and accepts the request to coordinate delivery.</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-md border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-orange-100 text-brand-orange rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
              <h3 className="font-semibold text-xl mb-2 text-brand-orange">Broadcast</h3>
              <p className="text-gray-500 text-sm leading-relaxed">The NGO broadcasts the requirement instantly to targeted local Donors.</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-md border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-green-100 text-brand-green rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">4</div>
              <h3 className="font-semibold text-xl mb-2 text-brand-green">Help Delivered</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Donations are matched, picked up, and delivered directly with verified proof.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto py-8 bg-gray-900 text-white text-center">
        <p className="text-gray-400">© 2026 Helping Connect Platform. Together, we make a difference.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
