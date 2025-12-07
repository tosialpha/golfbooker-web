import React from 'react';
import { SEO } from '../components/SEO';
import { Hero } from '../components/sections/Hero';
import { Features } from '../components/sections/Features';
import { OurStoryPreview } from '../components/sections/OurStoryPreview';
import { ForVenues } from '../components/sections/ForVenues';
import { ForPlayers } from '../components/sections/ForPlayers';
import { TournamentsPreview } from '../components/sections/TournamentsPreview';
import { InfoGrid } from '../components/sections/InfoGrid';
import { FAQ } from '../components/sections/FAQ';

export const Home: React.FC = () => {
  return (
    <>
      <SEO
        titleFi="GolfBooker - Moderni varausjärjestelmä golfkentille ja simulaattoreille"
        titleEn="GolfBooker - Modern Booking System for Golf Courses and Simulators"
        descriptionFi="GolfBooker tarjoaa modernin varausjärjestelmän, kilpailumoduulin ja asiakashallinnan golfkentille ja golfsimulaattoreille. Helpota lähtöaikavarausta ja kasvata pelaajakuntaa. Kokeile ilmaiseksi!"
        descriptionEn="GolfBooker provides modern booking system, tournament management and CRM for golf courses and simulators. Simplify tee time reservations and grow your player base. Try for free!"
        path="/"
        keywordsFi="golfkenttä varausjärjestelmä, ajanvaraus golf, lähtöaikavaraus, golfsimulaattori varausjärjestelmä, kilpailumoduuli golf, golf booking system, tiiaikojen varaus, golfklubin hallintajärjestelmä, golfkenttä ohjelmisto"
        keywordsEn="golf course booking system, tee time reservation, golf simulator booking software, tournament management golf, golf club management system, golf booking software Finland"
      />
      <Hero />
      <Features />
      <ForVenues />
      <ForPlayers />
      <OurStoryPreview />
      <InfoGrid />
      <TournamentsPreview />
      <FAQ />
    </>
  );
};
