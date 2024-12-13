import React from 'react';
import { Play } from 'lucide-react';

export function VideoDemo() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">See EdgeVision in Action</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Watch how our edge computing solutions transform real-time video analytics
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative rounded-2xl overflow-hidden shadow-2xl">
          <video
            className="w-full aspect-video object-cover"
            poster="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80"
            controls
          >
            <source
              src="https://storage.googleapis.com/webcontainer-assets/demo.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>

          <div className="absolute inset-0 flex items-center justify-center bg-black/40 group hover:bg-black/50 transition-colors cursor-pointer">
            <button className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center group-hover:bg-blue-700 transition-colors">
              <Play className="w-8 h-8 text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}