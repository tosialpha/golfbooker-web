import React from 'react';
import { Hero } from '../components/sections/Hero';
import { Features } from '../components/sections/Features';
import { FAQ } from '../components/sections/FAQ';

export const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Features />
      <FAQ />
    </>
  );
};
