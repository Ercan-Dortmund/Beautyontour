import { useTranslation } from 'next-i18next';
import { useState, useEffect } from 'react';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState('de');

  useEffect(() => {
    setCurrentLanguage(i18n.language || 'de');
  }, [i18n.language]);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setCurrentLanguage(lng);
  };

  return (
    <div className="language-switcher">
      <button 
        onClick={() => changeLanguage('de')} 
        className={currentLanguage === 'de' ? 'active' : ''}
        aria-label="Deutsch"
      >
        DE
      </button>
      <button 
        onClick={() => changeLanguage('en')} 
        className={currentLanguage === 'en' ? 'active' : ''}
        aria-label="English"
      >
        EN
      </button>
      <button 
        onClick={() => changeLanguage('tr')} 
        className={currentLanguage === 'tr' ? 'active' : ''}
        aria-label="Türkçe"
      >
        TR
      </button>
    </div>
  );
};

export default LanguageSwitcher;
