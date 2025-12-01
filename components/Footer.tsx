import React from 'react';
import { ChefHat, Twitter, Instagram, Linkedin } from 'lucide-react';
import EmailForm from './EmailForm';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-slate-300 py-16" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Pied de page</h2>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="col-span-1 lg:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-4 group w-fit" aria-label="Retour à l'accueil MealForge AI">
               <ChefHat className="w-6 h-6 text-primary" aria-hidden="true" />
               <span className="text-xl font-bold text-white group-hover:text-primary transition-colors">MealForge AI</span>
            </a>
            <p className="text-sm text-slate-400 mb-6">
              L'assistant nutritionnel intelligent qui simplifie votre vie et transforme votre corps.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white transition-colors p-1" aria-label="Suivez-nous sur Twitter">
                <Twitter className="w-5 h-5" aria-hidden="true" />
              </a>
              <a href="#" className="hover:text-white transition-colors p-1" aria-label="Suivez-nous sur Instagram">
                <Instagram className="w-5 h-5" aria-hidden="true" />
              </a>
              <a href="#" className="hover:text-white transition-colors p-1" aria-label="Suivez-nous sur LinkedIn">
                <Linkedin className="w-5 h-5" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Links */}
          <nav aria-label="Liens produits">
            <h3 className="text-white font-semibold mb-4">Produit</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#features" className="hover:text-primary transition-colors py-1 block">Fonctionnalités</a></li>
              <li><a href="#how-it-works" className="hover:text-primary transition-colors py-1 block">La méthode</a></li>
              <li><a href="#" className="hover:text-primary transition-colors py-1 block">Témoignages</a></li>
              <li><a href="#" className="hover:text-primary transition-colors py-1 block">Tarifs</a></li>
            </ul>
          </nav>

          <nav aria-label="Liens légaux">
             <h3 className="text-white font-semibold mb-4">Légal</h3>
             <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-primary transition-colors py-1 block">Confidentialité</a></li>
              <li><a href="#" className="hover:text-primary transition-colors py-1 block">CGU</a></li>
              <li><a href="#" className="hover:text-primary transition-colors py-1 block">Mentions légales</a></li>
            </ul>
          </nav>

          {/* Newsletter / CTA */}
          <div className="col-span-1 lg:col-span-1">
             <h3 className="text-white font-semibold mb-4">Ne manquez pas le lancement</h3>
             <p className="text-xs text-slate-400 mb-4">Rejoignez la liste d'attente pour un accès prioritaire.</p>
             <EmailForm variant="footer" />
          </div>

        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500">© 2024 MealForge AI. Tous droits réservés.</p>
          <div className="flex items-center gap-2" role="status" aria-label="Statut du système: Opérationnel">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" aria-hidden="true"></div>
            <span className="text-xs font-medium text-green-500">Systèmes opérationnels</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;