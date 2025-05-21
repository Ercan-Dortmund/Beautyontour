import React, { useState } from 'react';
import { useRouter } from 'next/router';

const LanguageSwitcher = () => {
  const router = useRouter();
  const { pathname, asPath, query, locale } = router;
  
  const changeLanguage = (newLocale) => {
    router.push({ pathname, query }, asPath, { locale: newLocale });
  };
  
  return (
    <div className="language-switcher">
      <button 
        className={`language-btn ${locale === 'de' ? 'active' : ''}`}
        onClick={() => changeLanguage('de')}
      >
        DE
      </button>
      <button 
        className={`language-btn ${locale === 'en' ? 'active' : ''}`}
        onClick={() => changeLanguage('en')}
      >
        EN
      </button>
      <button 
        className={`language-btn ${locale === 'tr' ? 'active' : ''}`}
        onClick={() => changeLanguage('tr')}
      >
        TR
      </button>
    </div>
  );
};

export default LanguageSwitcher;
