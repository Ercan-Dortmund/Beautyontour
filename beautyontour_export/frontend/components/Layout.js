import React from 'react';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import Head from 'next/head';
import LanguageSwitcher from './LanguageSwitcher';

const Layout = ({ children, title, description }) => {
  const { t } = useTranslation('common');
  
  return (
    <>
      <Head>
        <title>{title || 'Beauty on Tour'}</title>
        <meta name="description" content={description || 'Luxusreisen und Gesundheitstourismus in der Türkei'} />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Head>
      
      <header className="header">
        <div className="container header-container">
          <div className="logo">
            <Link href="/">
              <img src="/images/logo.jpeg" alt="Beauty on Tour Logo" />
              <span className="logo-text">Beauty on Tour</span>
            </Link>
          </div>
          
          <button className="mobile-menu-btn">
            <i className="fas fa-bars"></i>
          </button>
          
          <nav>
            <ul className="nav-menu">
              <li className="nav-item">
                <Link href="/" className="nav-link active">
                  {t('nav.home')}
                </Link>
              </li>
              
              <li className="nav-item dropdown">
                <Link href="/services" className="nav-link">
                  {t('nav.services')}
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link href="/health" className="dropdown-item">
                      {t('nav.health_tourism')}
                    </Link>
                  </li>
                  <li>
                    <Link href="/travel" className="dropdown-item">
                      {t('nav.luxury_travel')}
                    </Link>
                  </li>
                  <li>
                    <Link href="/beauty" className="dropdown-item">
                      {t('nav.beauty_services')}
                    </Link>
                  </li>
                </ul>
              </li>
              
              <li className="nav-item">
                <Link href="/shop" className="nav-link">
                  {t('nav.shop')}
                </Link>
              </li>
              
              <li className="nav-item">
                <Link href="/booking" className="nav-link">
                  {t('nav.booking')}
                </Link>
              </li>
              
              <li className="nav-item">
                <Link href="/contact" className="nav-link">
                  {t('nav.contact')}
                </Link>
              </li>
              
              <li className="nav-item">
                <LanguageSwitcher />
              </li>
            </ul>
          </nav>
        </div>
      </header>
      
      <main>
        {children}
      </main>
      
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-column">
              <div className="footer-logo">
                <img src="/images/logo.jpeg" alt="Beauty on Tour Logo" />
                <span className="footer-logo-text">Beauty on Tour</span>
              </div>
              <p className="footer-about">
                {t('footer.about_text')}
              </p>
              <div className="social-links">
                <a href="#" className="social-link">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="social-link">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="social-link">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="social-link">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </div>
            
            <div className="footer-column">
              <h3 className="footer-title">{t('footer.quick_links')}</h3>
              <ul className="footer-links">
                <li className="footer-link">
                  <Link href="/">{t('nav.home')}</Link>
                </li>
                <li className="footer-link">
                  <Link href="/services">{t('nav.services')}</Link>
                </li>
                <li className="footer-link">
                  <Link href="/shop">{t('nav.shop')}</Link>
                </li>
                <li className="footer-link">
                  <Link href="/booking">{t('nav.booking')}</Link>
                </li>
                <li className="footer-link">
                  <Link href="/contact">{t('nav.contact')}</Link>
                </li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h3 className="footer-title">{t('footer.services')}</h3>
              <ul className="footer-links">
                <li className="footer-link">
                  <Link href="/health">{t('nav.health_tourism')}</Link>
                </li>
                <li className="footer-link">
                  <Link href="/travel">{t('nav.luxury_travel')}</Link>
                </li>
                <li className="footer-link">
                  <Link href="/beauty">{t('nav.beauty_services')}</Link>
                </li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h3 className="footer-title">{t('footer.contact_us')}</h3>
              <ul className="contact-info">
                <li className="contact-item">
                  <span className="contact-icon">
                    <i className="fas fa-map-marker-alt"></i>
                  </span>
                  <span>{t('footer.address')}</span>
                </li>
                <li className="contact-item">
                  <span className="contact-icon">
                    <i className="fas fa-phone-alt"></i>
                  </span>
                  <span>{t('footer.phone')}</span>
                </li>
                <li className="contact-item">
                  <span className="contact-icon">
                    <i className="fas fa-envelope"></i>
                  </span>
                  <span>{t('footer.email')}</span>
                </li>
              </ul>
              <form className="newsletter-form">
                <input 
                  type="email" 
                  className="newsletter-input" 
                  placeholder={t('footer.newsletter_placeholder')} 
                />
                <button type="submit" className="newsletter-btn">
                  <i className="fas fa-paper-plane"></i>
                </button>
              </form>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p className="copyright">
              &copy; {new Date().getFullYear()} Beauty on Tour. {t('footer.copyright')}
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Layout;
