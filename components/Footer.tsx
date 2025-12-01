import React from 'react';
import { ChefHat, Twitter, Instagram, Linkedin } from 'lucide-react';
import EmailForm from './EmailForm';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-slate-300 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
               <ChefHat className="w-6 h-6 text-primary" />
               <span className="text-xl font-bold text-white">MealForge AI</span>
            </div>
            <p className="text-sm text-slate-400 mb-6">
              L'assistant nutritionnel intelligent qui simplifie votre vie et transforme votre corps.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Produit</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#features" className="hover:text-primary transition-colors">Fonctionnalités</a></li>
              <li><a href="#how-it-works" className="hover:text-primary transition-colors">La méthode</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Témoignages</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Tarifs</a></li>
            </ul>
          </div>

          <div>
             <h4 className="text-white font-semibold mb-4">Légal</h4>
             <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-primary transition-colors">Confidentialité</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">CGU</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Mentions légales</a></li>
            </ul>
          </div>

          {/* Newsletter / CTA */}
          <div className="col-span-1 lg:col-span-1">
             <h4 className="text-white font-semibold mb-4">Ne manquez pas le lancement</h4>
             <p className="text-xs text-slate-400 mb-4">Rejoignez la liste d'attente pour un accès prioritaire.</p>
             <EmailForm variant="footer" />
          </div>

        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500">© 2024 MealForge AI. Tous droits réservés.</p>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-xs font-medium text-green-500">Systèmes opérationnels</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;