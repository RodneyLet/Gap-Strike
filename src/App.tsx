import { useState } from 'react';

function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <nav className="border-b border-gray-800 bg-gray-950/80 backdrop-blur fixed w-full z-50">
        <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-emerald-500 rounded-full"></div>
            <span className="text-2xl font-bold">GapStrike</span>
          </div>
          <div className="flex gap-8">
            <a href="#features" className="hover:text-emerald-400">Features</a>
            <a href="#scanner" className="hover:text-emerald-400">Scanner</a>
            <a href="#journal" className="hover:text-emerald-400">Journal</a>
          </div>
          <button className="bg-emerald-500 px-6 py-2 rounded-xl font-semibold hover:bg-emerald-600">
            Launch App
          </button>
        </div>
      </nav>

      <section className="pt-32 pb-24 text-center">
        <h1 className="text-6xl font-bold mb-6">GapStrike Lite</h1>
        <p className="text-2xl text-gray-400 mb-10">Professional Trading • IBM i Integration • Real-time Intelligence</p>
        <button className="bg-emerald-500 text-xl px-12 py-4 rounded-2xl font-semibold hover:bg-emerald-600">
          Start Trading Now
        </button>
      </section>
    </div>
  );
}

export default App;