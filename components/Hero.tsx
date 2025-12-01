import React from 'react';
import { Star, ShieldCheck, Users } from 'lucide-react';
import EmailForm from './EmailForm';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-20 right-10 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/3 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-semibold uppercase tracking-wide mb-8 animate-fade-in-up">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
          </span>
          Bientôt disponible • Accès anticipé
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-dark tracking-tight mb-6 max-w-4xl mx-auto leading-[1.1]">
          Votre nutrition, pilotée par <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">l'Intelligence Artificielle.</span>
        </h1>

        {/* Subhead */}
        <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
          Générez un planning repas hebdomadaire 100% personnalisé en quelques secondes. 
          Calories, macros et liste de courses ajustés automatiquement pour atteindre vos objectifs.
        </p>

        {/* CTA Area */}
        <div id="join" className="mb-12">
          <EmailForm variant="hero" />
          <p className="mt-4 text-sm text-slate-500">
            Rejoignez <span className="font-semibold text-dark">2,400+</span> personnes sur la liste d'attente.
          </p>
        </div>

        {/* Mockup / Visual */}
        <div className="relative mx-auto max-w-5xl mt-16 group">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative rounded-xl bg-white ring-1 ring-slate-900/5 shadow-2xl overflow-hidden aspect-[16/9] flex items-center justify-center bg-slate-50">
             {/* Abstract UI Representation */}
             <div className="w-full h-full p-2 md:p-4 bg-[#f1f5f9]">
                <div className="w-full h-full bg-white rounded-lg border border-slate-200 shadow-sm flex flex-col overflow-hidden">
                    {/* Fake Header */}
                    <div className="h-14 border-b border-slate-100 flex items-center px-6 justify-between">
                        <div className="flex gap-4">
                            <div className="h-3 w-3 rounded-full bg-red-400"></div>
                            <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
                            <div className="h-3 w-3 rounded-full bg-green-400"></div>
                        </div>
                        <div className="h-2 w-32 bg-slate-100 rounded-full"></div>
                    </div>
                    {/* Fake Content */}
                    <div className="flex-1 flex">
                        {/* Sidebar */}
                        <div className="w-16 md:w-64 border-r border-slate-100 p-6 hidden md:block">
                            <div className="h-2 w-20 bg-slate-100 rounded-full mb-8"></div>
                            <div className="space-y-4">
                                <div className="h-8 w-full bg-indigo-50 rounded-md border border-indigo-100"></div>
                                <div className="h-8 w-full bg-white rounded-md"></div>
                                <div className="h-8 w-full bg-white rounded-md"></div>
                            </div>
                        </div>
                        {/* Main Dash */}
                        <div className="flex-1 p-6 md:p-10 bg-slate-50/50">
                            <div className="flex justify-between items-end mb-8">
                                <div>
                                    <div className="h-2 w-24 bg-slate-200 rounded-full mb-3"></div>
                                    <div className="h-6 w-48 bg-slate-800 rounded-md"></div>
                                </div>
                                <div className="h-10 w-32 bg-secondary/10 rounded-lg border border-secondary/20"></div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 h-40"></div>
                                <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 h-40"></div>
                                <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 h-40"></div>
                            </div>
                        </div>
                    </div>
                </div>
             </div>
             
             {/* Floating elements */}
             <div className="absolute -right-4 top-10 bg-white p-4 rounded-lg shadow-xl border border-slate-100 animate-bounce-slow hidden md:block">
                <div className="flex items-center gap-3">
                    <div className="bg-green-100 p-2 rounded-full">
                        <ShieldCheck className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                        <p className="text-xs text-slate-500">Macros journalières</p>
                        <p className="text-sm font-bold text-slate-800">100% Atteintes</p>
                    </div>
                </div>
             </div>
             
             <div className="absolute -left-6 bottom-20 bg-white p-4 rounded-lg shadow-xl border border-slate-100 animate-bounce-slow delay-700 hidden md:block">
                <div className="flex items-center gap-3">
                    <div className="bg-indigo-100 p-2 rounded-full">
                        <Users className="w-5 h-5 text-indigo-600" />
                    </div>
                    <div>
                        <p className="text-xs text-slate-500">Génération</p>
                        <p className="text-sm font-bold text-slate-800">Planning prêt !</p>
                    </div>
                </div>
             </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;