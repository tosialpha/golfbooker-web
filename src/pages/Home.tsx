import React from 'react';
import { Hero } from '../components/sections/Hero';
import { Features } from '../components/sections/Features';
import { OurStoryPreview } from '../components/sections/OurStoryPreview';
import { ForVenues } from '../components/sections/ForVenues';
import { ForPlayers } from '../components/sections/ForPlayers';
import { TournamentsPreview } from '../components/sections/TournamentsPreview';
import { FAQ } from '../components/sections/FAQ';

export const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Features />
      <ForVenues />
      <ForPlayers />
      <OurStoryPreview />
      <TournamentsPreview />
      <FAQ />
    </>
  );
};
