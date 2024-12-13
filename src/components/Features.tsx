import React from 'react';
import { Card } from './Card';
import { Cpu, Shield, Zap, Scale } from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: Cpu,
      title: 'Real-Time Processing',
      description: 'Process video streams instantly at the edge, reducing latency and bandwidth usage.'
    },
    {
      icon: Shield,
      title: 'Privacy-First',
      description: 'Keep sensitive data secure with local processing and encrypted transmission.'
    },
    {
      icon: Zap,
      title: 'AI-Powered Analytics',
      description: 'Leverage advanced machine learning models for intelligent decision making.'
    },
    {
      icon: Scale,
      title: 'Scalable Architecture',
      description: 'Easily expand your edge computing network as your needs grow.'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Core Capabilities</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our modular edge solutions deliver powerful features that transform video analytics
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}