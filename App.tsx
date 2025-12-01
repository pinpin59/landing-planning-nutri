import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import PainPoints from './components/PainPoints';
import Audience from './components/Audience';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Features />
        <PainPoints />
        <Audience />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}