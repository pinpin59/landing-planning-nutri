import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-slate-200 last:border-0">
      <button 
        className="w-full py-6 flex justify-between items-center text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium text-dark">{question}</span>
        {isOpen ? <ChevronUp className="w-5 h-5 text-primary" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 mb-6' : 'max-h-0 opacity-0'}`}
      >
        <p className="text-slate-600 leading-relaxed pr-8">{answer}</p>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "L'application prend-elle en compte les allergies ?",
      answer: "Absolument. Lors de l'inscription, vous pouvez exclure n'importe quel ingrédient (gluten, lactose, arachides, etc.) ou régime spécifique (végétarien, vegan, cétogène)."
    },
    {
      question: "Est-ce adapté aux débutants en cuisine ?",
      answer: "Oui ! Nous privilégions des recettes simples, rapides et nécessitant peu d'ustensiles. L'objectif est de bien manger sans devenir chef étoilé."
    },
    {
      question: "Combien coûtera l'abonnement ?",
      answer: "Nous proposerons un tarif de lancement exclusif aux membres de la liste d'attente. Inscrivez-vous pour sécuriser le meilleur prix à vie."
    },
    {
      question: "Puis-je modifier un repas généré par l'IA ?",
      answer: "Bien sûr. Si un repas ne vous plaît pas, vous pouvez le 'swapper' en un clic. L'IA recalculera automatiquement les portions des autres repas pour maintenir votre équilibre journalier."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-slate-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-dark mb-12">Questions Fréquentes</h2>
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 px-6 sm:px-8">
          {faqs.map((faq, idx) => (
            <FAQItem key={idx} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;