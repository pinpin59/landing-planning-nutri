import React, { useState } from 'react';
import { ArrowRight, CheckCircle, Loader2 } from 'lucide-react';

interface EmailFormProps {
  variant?: 'hero' | 'footer';
}

const EmailForm: React.FC<EmailFormProps> = ({ variant = 'hero' }) => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 1500);
  };

  if (status === 'success') {
    return (
      <div className={`flex items-center gap-2 text-secondary font-medium animate-fade-in ${variant === 'footer' ? 'justify-center md:justify-start' : 'justify-center'}`}>
        <CheckCircle className="w-5 h-5" />
        <span>Vous êtes sur la liste ! À très vite.</span>
      </div>
    );
  }

  const isFooter = variant === 'footer';

  return (
    <form onSubmit={handleSubmit} className={`flex flex-col sm:flex-row gap-3 w-full ${isFooter ? 'max-w-md' : 'max-w-lg mx-auto'}`}>
      <div className="relative flex-grow">
        <input
          type="email"
          placeholder="votre@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className={`w-full px-4 py-3.5 rounded-lg border focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all duration-200 ${
            isFooter 
              ? 'bg-slate-800 border-slate-700 text-white placeholder-slate-400 focus:ring-secondary' 
              : 'bg-white border-slate-200 text-dark shadow-sm'
          }`}
        />
      </div>
      <button
        type="submit"
        disabled={status === 'loading'}
        className={`group flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg font-semibold transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed whitespace-nowrap ${
          isFooter
            ? 'bg-secondary hover:bg-green-600 text-white'
            : 'bg-primary hover:bg-primaryDark text-white shadow-md hover:shadow-lg'
        }`}
      >
        {status === 'loading' ? (
          <Loader2 className="w-5 h-5 animate-spin" />
        ) : (
          <>
            Rejoindre
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </>
        )}
      </button>
    </form>
  );
};

export default EmailForm;