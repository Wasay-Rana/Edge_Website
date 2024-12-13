import React from 'react';
import { Button } from './Button';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative min-h-[80vh] flex items-center">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-bold text-white mb-6 leading-tight">
            Empowering Real-Time Insights with Modular Edge Solutions
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Transform your video analytics with privacy-first edge computing. 
            Deploy scalable solutions for smart cities, transportation, and public safety.
          </p>
          <div className="flex gap-4">
            <Button variant="primary">
              Request a Demo
            </Button>
            <Button variant="secondary">
              Learn More <ArrowRight className="ml-2 inline-block w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}