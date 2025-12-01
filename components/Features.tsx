import React from 'react';
import { Calculator, ShoppingCart, RefreshCcw, Sliders, Brain, Clock } from 'lucide-react';

const features = [
  {
    icon: <Calculator className="w-6 h-6" />,
    title: "Calcul Calorique Précis",
    description: "Algorithme TDEE avancé qui adapte vos calories selon votre activité, âge et objectif (sèche, maintien, masse)."
  },
  {
    icon: <Sliders className="w-6 h-6" />,
    title: "Macros Optimisées",
    description: "Protéines, glucides, lipides : l'IA équilibre chaque repas pour que vous n'ayez jamais à sortir votre calculatrice."
  },
  {
    icon: <ShoppingCart className="w-6 h-6" />,
    title: "Liste de Courses Auto",
    description: "Une liste de courses interactive générée instantanément à partir de votre menu de la semaine. Zéro gaspillage."
  },
  {
    icon: <Brain className="w-6 h-6" />,
    title: "Intelligence Culinaire",
    description: "Apprend de vos goûts. Vous détestez la coriandre ? MealForge ne vous en proposera jamais."
  },
  {
    icon: <RefreshCcw className="w-6 h-6" />,
    title: "Adaptation Hebdomadaire",
    description: "Votre poids stagne ? L'IA réajuste automatiquement les portions pour la semaine suivante."
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Gain de Temps Massif",
    description: "Ne vous demandez plus jamais 'qu'est-ce qu'on mange'. Planifiez toute la semaine en 1 clic."
  }
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary font-semibold tracking-wide uppercase text-sm mb-3">Fonctionnalités</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-dark mb-4">La nutrition scientifique, simplifiée.</h3>
          <p className="text-slate-600 text-lg">Plus qu'un simple générateur de recettes. Un véritable assistant nutritionnel qui évolue avec vous.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-primary/20 hover:shadow-lg hover:shadow-indigo-500/5 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-primary mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-sm">
                {feature.icon}
              </div>
              <h4 className="text-xl font-bold text-dark mb-3">{feature.title}</h4>
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;