import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

function LanguageToggle() {
  const { locale, setLocale } = useLanguage();
  
  return (
    <button
      onClick={() => setLocale(locale === 'pt-BR' ? 'en' : 'pt-BR')}
      className="absolute top-4 right-4 bg-slate-700 text-white px-4 py-2 rounded-md"
    >
      {locale === 'pt-BR' ? 'EN' : 'PT-BR'}
    </button>
  );
}

export default LanguageToggle;