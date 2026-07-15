import { useState } from 'react';

function App() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <nav className="border-b border-gray-800 bg-gray-950/80 backdrop-blur fixed w-full z-50">
        <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-emerald-500 rounded-full"></div>
            <span className="text-2xl font-bold">GapStrike</span>
          </div>
          <div className="flex gap-8 text-sm">
            <button onClick={() => setActiveTab('home')} className={`hover:text-emerald-400 ${activeTab === 'home' ? 'text-emerald-400' : ''}`}>Home</button>
            <button onClick={() => setActiveTab('scanner')} className={`hover:text-emerald-400 ${activeTab === 'scanner' ? 'text-emerald-400' : ''}`}>Scanner</button>
            <button onClick={() => setActiveTab('journal')} className={`hover:text-emerald-400 ${activeTab === 'journal' ? 'text-emerald-400' : ''}`}>Journal</button>
          </div>
        </div>
      </nav>

      {activeTab === 'home' && (
        <section className="pt-32 pb-24 text-center">
          <h1 className="text-6xl font-bold mb-6">GapStrike Lite</h1>
          <p className="text-2xl text-gray-400 mb-10">Professional Trading • IBM i Integration • Real-time Intelligence</p>
          <button onClick={() => setActiveTab('scanner')} className="bg-emerald-500 text-xl px-12 py-4 rounded-2xl font-semibold hover:bg-emerald-600">
            Start Trading Now
          </button>
        </section>
      )}

      {activeTab === 'scanner' && (
        <div className="pt-24 p-8 max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-8">Live Trading Scanner</h2>
          <div className="bg-gray-900 p-8 rounded-2xl text-emerald-400">
            Scanner Active - Monitoring market...
          </div>
          <div className="mt-8 bg-red-900/30 p-6 rounded-2xl">
            <h3 className="text-red-400 font-bold mb-4">Risk Warnings</h3>
            <p>🔥 Geothermal heat risk detected in energy sector</p>
            <p>⛽ Gas volatility high</p>
          </div>
        </div>
      )}

      {activeTab === 'journal' && (
        <div className="pt-24 p-8 max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-8">Trading Journal</h2>
          <p className="text-gray-400">Journal entries will appear here.</p>
        </div>
      )}
    </div>
  );
}

export default App;