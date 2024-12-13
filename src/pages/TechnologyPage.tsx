import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Database, Network, Shield, Zap } from 'lucide-react';

const technologies = [
  {
    icon: Cpu,
    title: 'Edge Processing',
    description: 'Utilizing advanced edge computing devices like NVIDIA Jetson and Intel NUC for real-time processing.',
    details: [
      'Low-latency inference',
      'Optimized TensorRT models',
      'Hardware acceleration'
    ]
  },
  {
    icon: Database,
    title: 'AI Models',
    description: 'State-of-the-art computer vision models optimized for edge deployment.',
    details: [
      'Object detection & tracking',
      'Semantic segmentation',
      'Activity recognition'
    ]
  },
  {
    icon: Network,
    title: 'Distributed Architecture',
    description: 'Scalable microservices architecture for seamless edge-to-cloud communication.',
    details: [
      'Kubernetes orchestration',
      'Load balancing',
      'Fault tolerance'
    ]
  }
];

export function TechnologyPage() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Technology Stack</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Cutting-edge technologies powering our computer vision solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg p-8"
            >
              <tech.icon className="w-12 h-12 text-blue-600 mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{tech.title}</h3>
              <p className="text-gray-600 mb-6">{tech.description}</p>
              <ul className="space-y-2">
                {tech.details.map((detail, i) => (
                  <li key={i} className="flex items-center text-gray-700">
                    <Zap className="w-4 h-4 text-blue-600 mr-2" />
                    {detail}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="bg-gray-900 rounded-2xl p-12 text-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Live Demo: Object Detection</h2>
              <p className="text-gray-300 mb-8">
                Experience our real-time object detection system in action. This demo showcases
                our edge processing capabilities with minimal latency.
              </p>
              <div className="flex items-center space-x-4">
                <Shield className="w-6 h-6 text-blue-400" />
                <span className="text-gray-300">Privacy-preserving processing</span>
              </div>
            </div>
            <div className="aspect-video bg-gray-800 rounded-lg overflow-hidden">
              <video
                className="w-full h-full object-cover"
                poster="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80"
                controls
              >
                <source
                  src="https://storage.googleapis.com/webcontainer-assets/demo.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}