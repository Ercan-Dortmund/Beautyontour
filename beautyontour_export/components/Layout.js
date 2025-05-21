import { useTranslation } from 'next-i18next';
import { appWithTranslation } from 'next-i18next';
import Link from 'next/link';
import { useState } from 'react';

const Layout = ({ children }) => {
  const { t, i18n } = useTranslation('common');
  const [menuOpen, setMenuOpen] = useState(false);
  
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="layout">
      <header className="header">
        <div className="container">
          <div className="header-content">
            <div className="logo">
              <Link href="/">
                <a>
                  <img src="/images/logo.jpeg" alt="Beautyontour Logo" />
                </a>
              </Link>
            </div>
            
            <button 
              className={`menu-toggle ${menuOpen ? 'active' : ''}`} 
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
            
            <nav className={`main-nav ${menuOpen ? 'active' : ''}`}>
              <ul>
                <li>
                  <Link href="/">
                    <a>{t('common.nav.home')}</a>
                  </Link>
                </li>
                <li>
                  <Link href="/shop">
                    <a>{t('common.nav.shop')}</a>
                  </Link>
                </li>
                <li>
                  <Link href="/booking">
                    <a>{t('common.nav.booking')}</a>
                  </Link>
                </li>
                <li>
                  <Link href="/health">
                    <a>{t('common.nav.health')}</a>
                  </Link>
                </li>
                <li>
                  <Link href="/contact">
                    <a>{t('common.nav.contact')}</a>
                  </Link>
                </li>
              </ul>
              
              <div className="language-switcher">
                <button onClick={() => changeLanguage('de')} className={i18n.language === 'de' ? 'active' : ''}>
                  DE
                </button>
                <button onClick={() => changeLanguage('en')} className={i18n.language === 'en' ? 'active' : ''}>
                  EN
                </button>
                <button onClick={() => changeLanguage('tr')} className={i18n.language === 'tr' ? 'active' : ''}>
                  TR
                </button>
              </div>
              
              <div className="user-actions">
                <Link href="/login">
                  <a className="btn btn-outline btn-sm">{t('common.buttons.login')}</a>
                </Link>
                <Link href="/cart">
                  <a className="cart-icon" aria-label="Shopping cart">
                    <i className="fas fa-shopping-cart"></i>
                    <span className="cart-count">0</span>
                  </a>
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </header>
      
      {children}
      
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">
              <img src="/images/logo.jpeg" alt="Beautyontour Logo" />
              <p>Exklusive Luxusreisen & Gesundheitstourismus</p>
            </div>
            
            <div className="footer-links">
              <div className="footer-column">
                <h3>{t('common.footer.company')}</h3>
                <ul>
                  <li>
                    <Link href="/about">
                      <a>{t('common.footer.about_us')}</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/team">
                      <a>{t('common.footer.team')}</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/careers">
                      <a>{t('common.footer.careers')}</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact">
                      <a>{t('common.footer.contact')}</a>
                    </Link>
                  </li>
                </ul>
              </div>
              
              <div className="footer-column">
                <h3>{t('common.footer.services')}</h3>
                <ul>
                  <li>
                    <Link href="/shop">
                      <a>{t('common.footer.shop')}</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/booking">
                      <a>{t('common.footer.booking')}</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/health">
                      <a>{t('common.footer.health')}</a>
                    </Link>
                  </li>
                </ul>
              </div>
              
              <div className="footer-column">
                <h3>{t('common.footer.legal')}</h3>
                <ul>
                  <li>
                    <Link href="/terms">
                      <a>{t('common.footer.terms')}</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/privacy">
                      <a>{t('common.footer.privacy')}</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/imprint">
                      <a>{t('common.footer.imprint')}</a>
                    </Link>
                  </li>
                </ul>
              </div>
              
              <div className="footer-column">
                <h3>{t('common.footer.follow_us')}</h3>
                <div className="social-icons">
                  <a href="https://facebook.com/beautyontour" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                    <i className="fab fa-facebook"></i>
                  </a>
                  <a href="https://instagram.com/beautyontour" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="https://twitter.com/beautyontour" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="https://linkedin.com/company/beautyontour" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <i className="fab fa-linkedin"></i>
                  </a>
                </div>
                
                <div className="newsletter">
                  <h4>{t('common.footer.newsletter')}</h4>
                  <form>
                    <input type="email" placeholder={t('common.footer.email_placeholder')} required />
                    <button type="submit" className="btn btn-primary btn-sm">{t('common.buttons.subscribe')}</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Beautyontour. {t('common.footer.all_rights_reserved')}</p>
            <p>
              <Link href="/admin">
                <a className="admin-link">{t('common.footer.admin')}</a>
              </Link>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default appWithTranslation(Layout);
