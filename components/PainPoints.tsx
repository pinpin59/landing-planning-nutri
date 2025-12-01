import React from 'react';
import { X, Check } from 'lucide-react';

const PainPoints: React.FC = () => {
  return (
    <section id="how-it-works" className="py-24 bg-slate-50 relative overflow-hidden">
        {/* Decorative background circle */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 w-[800px] h-[800px] bg-white rounded-full opacity-60 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Pain (The Old Way) */}
          <div className="order-2 lg:order-1">
            <h3 className="text-2xl font-bold text-slate-400 mb-8 uppercase tracking-widest text-center lg:text-left">Avant MealForge</h3>
            <div className="space-y-4">
              {[
                "Passer 2h le dimanche à chercher des recettes",
                "Manger du riz-dinde sec tous les jours",
                "Abandonner le régime après 2 semaines par ennui",
                "Acheter des ingrédients qu'on n'utilise qu'à moitié",
                "Aucune idée si les macros sont respectées"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 p-4 bg-white/50 border border-red-100 rounded-xl text-slate-500">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-red-500">
                    <X className="w-5 h-5" />
                  </div>
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Solution (The New Way) */}
          <div className="order-1 lg:order-2">
            <h3 className="text-2xl font-bold text-primary mb-8 uppercase tracking-widest text-center lg:text-left">La nouvelle méthode</h3>
            <div className="space-y-4 relative">
                {/* Connector Line decoration */}
                <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-green-200 lg:block hidden"></div>

              {[
                "Planning généré en 1 clic adapté à votre agenda",
                "Repas variés et savoureux (burgers sains, bowls...)",
                "Liste de courses qui s'adapte à votre budget",
                "Suivi automatique des progrès physiques",
                "Plaisir de manger retrouvé, résultats garantis"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 p-5 bg-white border border-green-100 rounded-xl shadow-sm text-dark transform translate-x-0 hover:translate-x-2 transition-transform duration-300 relative z-10">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                    <Check className="w-5 h-5" />
                  </div>
                  <span className="font-semibold text-lg">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainPoints;