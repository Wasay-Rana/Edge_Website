import React from 'react';
import { ArrowRight } from 'lucide-react';
import { CaseStudy } from '../types';

const caseStudies: CaseStudy[] = [
  {
    id: 'smart-city-traffic',
    title: 'Smart City Traffic Management',
    client: 'City of Innovation',
    industry: 'Smart Cities',
    challenge: 'Managing traffic flow and reducing congestion in a rapidly growing urban area.',
    solution: 'Deployed edge-based video analytics at key intersections for real-time traffic monitoring and adaptive signal control.',
    results: [
      '30% reduction in average commute times',
      '25% decrease in traffic congestion',
      'Real-time incident detection and response'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1494522358652-f30e61a60313?auto=format&fit=crop&q=80'
  },
  {
    id: 'retail-analytics',
    title: 'Retail Customer Analytics',
    client: 'Global Retail Chain',
    industry: 'Retail',
    challenge: 'Understanding customer behavior and optimizing store layouts.',
    solution: 'Implemented privacy-first edge computing for customer flow analysis and heat mapping.',
    results: [
      '15% increase in customer engagement',
      'Optimized store layouts based on traffic patterns',
      'Enhanced security while maintaining privacy'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80'
  }
];

export function CaseStudies() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See how our solutions are transforming industries and delivering real results
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {caseStudies.map((study) => (
            <div key={study.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div 
                className="h-64 bg-cover bg-center"
                style={{ backgroundImage: `url(${study.imageUrl})` }}
              />
              <div className="p-8">
                <div className="text-sm text-blue-600 font-semibold mb-2">{study.industry}</div>
                <h3 className="text-2xl font-bold mb-4">{study.title}</h3>
                <p className="text-gray-600 mb-6">{study.solution}</p>
                <ul className="space-y-2 mb-6">
                  {study.results.map((result, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <ArrowRight className="w-4 h-4 text-blue-600 mr-2" />
                      {result}
                    </li>
                  ))}
                </ul>
                <button className="text-blue-600 font-semibold hover:text-blue-700 flex items-center">
                  Read Full Case Study
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}