import React from 'react';
import { Dumbbell, Laptop, Heart } from 'lucide-react';

const Audience: React.FC = () => {
  const personas = [
    {
      icon: <Dumbbell className="w-8 h-8" />,
      title: "Le Sportif",
      desc: "Vous visez la performance, la prise de masse ou la sèche. Vous avez besoin de précision sur les protéines et les calories."
    },
    {
      icon: <Laptop className="w-8 h-8" />,
      title: "L'Actif Pressé",
      desc: "Vous n'avez pas le temps de cuisiner 1h par jour. Vous voulez des recettes rapides (15-20min) et efficaces."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Le Débutant Santé",
      desc: "Vous voulez juste mieux manger, perdre quelques kilos sans régime restrictif et comprendre enfin comment équilibrer une assiette."
    }
  ];

  return (
    <section className="py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Pour qui est fait MealForge ?</h2>
          <p className="text-slate-600 text-lg">Si vous vous reconnaissez ici, nous avons construit cet outil pour vous.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {personas.map((persona, idx) => (
            <div key={idx} className="bg-slate-50 p-8 rounded-2xl border border-slate-100 text-center hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-indigo-100 text-primary mb-6">
                {persona.icon}
              </div>
              <h3 className="text-xl font-bold text-dark mb-3">{persona.title}</h3>
              <p className="text-slate-600">{persona.desc}</p>
            </div>
          ))}
        </div>

        {/* Social Proof Teaser */}
        <div className="mt-20 p-8 bg-dark rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary opacity-10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
            
            <div className="flex -space-x-4 relative z-10">
                <img className="w-12 h-12 rounded-full border-2 border-dark" src="https://picsum.photos/100/100?random=1" alt="Membre MealForge 1" />
                <img className="w-12 h-12 rounded-full border-2 border-dark" src="https://picsum.photos/100/100?random=2" alt="Membre MealForge 2" />
                <img className="w-12 h-12 rounded-full border-2 border-dark" src="https://picsum.photos/100/100?random=3" alt="Membre MealForge 3" />
                <div className="w-12 h-12 rounded-full border-2 border-dark bg-slate-700 flex items-center justify-center text-xs font-bold">+2k</div>
            </div>
            <div className="text-center md:text-left flex-1">
                <p className="font-semibold text-lg">Rejoignez la révolution nutritionnelle.</p>
                <p className="text-slate-400 text-sm">Les places pour la bêta partent vite.</p>
            </div>
            <a href="#join" className="relative z-10 px-6 py-3 bg-white text-dark font-bold rounded-lg hover:bg-slate-100 transition-colors">
                Je m'inscris
            </a>
        </div>
      </div>
    </section>
  );
};

export default Audience;