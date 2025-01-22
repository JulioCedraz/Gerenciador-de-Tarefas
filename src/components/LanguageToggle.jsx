import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

function LanguageToggle() {
  const { locale, setLocale } = useLanguage();
  
  return (
    <div className="absolute flex top-0 right-0 sm:top-4 sm:right-4">
      <button
        onClick={() => setLocale('pt-BR')}
        className={`bg-slate-700 text-white rounded-bl-md sm:rounded-l-md 
          ${locale === 'pt-BR' ? 'font-bold' : 'opacity-50'} 
          px-3 py-1 text-sm sm:px-4 sm:py-2 sm:text-base`}
      >
        PT-BR
      </button>
      <button
        onClick={() => setLocale('en')}
        className={`bg-slate-700 text-white sm:rounded-r-md 
          ${locale === 'en' ? 'font-bold' : 'opacity-50'} 
          px-3 py-1 text-sm sm:px-4 sm:py-2 sm:text-base`}
      >
        EN
      </button>
    </div>
  );
}

export default LanguageToggle;