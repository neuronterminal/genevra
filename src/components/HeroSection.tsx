import React from 'react';
import { Dna, Brain, Binary, Sparkles } from 'lucide-react';

export function HeroSection() {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Animated background effect */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-800 animate-pulse" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')] bg-cover opacity-30 mix-blend-overlay" />
      </div>

      <div className="relative container mx-auto px-6 py-24">
        <div className="flex flex-col items-center text-center space-y-8">
          <div className="flex items-center space-x-2">
            <Dna className="w-12 h-12 text-blue-400" />
            <h1 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Genevra
            </h1>
          </div>
          
          <p className="text-2xl max-w-3xl text-gray-300 leading-relaxed">
            Simulating the evolution of consciousness through AI-driven genetic modeling
          </p>

          <div className="flex gap-6 mt-8">
            <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-full font-semibold flex items-center gap-2 transition-all">
              <Binary className="w-5 h-5" />
              View on GitHub
            </button>
            <button className="px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-full font-semibold flex items-center gap-2 transition-all">
              <Sparkles className="w-5 h-5" />
              Try Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}