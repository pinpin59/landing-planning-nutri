import React, { useState, useEffect } from 'react';
import { ChefHat } from 'lucide-react';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm border-b border-slate-100 py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-lg p-1" aria-label="MealForge AI - Retour en haut de page">
          <div className="bg-primary p-1.5 rounded-lg" aria-hidden="true">
            <ChefHat className="w-6 h-6 text-white" />
          </div>
          <span className="text-xl font-bold tracking-tight text-dark">
            MealForge<span className="text-primary">AI</span>
          </span>
        </a>

        <nav aria-label="Navigation principale" className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <a href="#features" className="hover:text-primary transition-colors focus:outline-none focus:text-primary">Fonctionnalités</a>
          <a href="#how-it-works" className="hover:text-primary transition-colors focus:outline-none focus:text-primary">La méthode</a>
          <a href="#faq" className="hover:text-primary transition-colors focus:outline-none focus:text-primary">FAQ</a>
        </nav>

        <a 
          href="#join"
          className={`hidden sm:inline-flex px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
            scrolled 
              ? 'bg-primary text-white hover:bg-primaryDark focus:ring-primary' 
              : 'bg-white text-primary border border-slate-200 hover:border-primary hover:bg-slate-50 focus:ring-primary'
          }`}
        >
          Liste d'attente
        </a>
      </div>
    </header>
  );
};

export default Header;