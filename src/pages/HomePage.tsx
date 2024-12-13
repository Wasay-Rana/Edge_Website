import React from 'react';
import { Hero } from '../components/Hero';
import { Features } from '../components/Features';
import { VideoDemo } from '../components/VideoDemo';
import { CaseStudies } from '../components/CaseStudies';

export function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <VideoDemo />
      <CaseStudies />
    </>
  );
}