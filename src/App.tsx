import { useState } from 'react';

function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-white font-sans">
      {/* Navbar */}
      <nav className="border-b border-gray-800 bg-gray-950/80 backdrop-blur-md fixed w-full z-50">
        <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-emerald-500 rounded-full"></div>
            <span className="text-2xl font-bold tracking-tight">GapStrike</span>
          </div>
          <div className="flex gap-8 text-sm">
            <a href="#features" className="hover:text-emerald-400">Features</a>
            <a href="#scanner" className="hover:text-emerald-400">Scanner</a>
            <a href="#journal" className="hover:text-emerald-400">Journal</a>
            <a href="#pricing" className="hover:text-emerald-400">Pricing</a>
          </div>
          <button className="bg-emerald-500 hover:bg-emerald-600 px-6 py-2 rounded-xl text-sm font-semibold transition">
            Start Free Trial
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-7xl font-bold leading-tight mb-6">
            Trade with <span className="text-emerald-400">Precision</span>
          </h1>
          <p className="text-2xl text-gray-400 mb-10">
            IBM i Powered Trading Scanner • Real-time Journal • Strike EDI
          </p>
          <div className="flex gap-4 justify-center">
            <button className="bg-emerald-500 hover:bg-emerald-600 px-10 py-4 rounded-2xl text-lg font-semibold">
              Launch Scanner
            </button>
            <button className="border border-gray-600 hover:bg-gray-900 px-10 py-4 rounded-2xl text-lg">
              Watch Demo
            </button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Built for Serious Traders</h2>
          {/* Add feature cards here */}
        </div>
      </section>
    </div>
  );
}

export default App;