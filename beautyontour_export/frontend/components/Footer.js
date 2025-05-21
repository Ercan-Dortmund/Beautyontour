import React from 'react';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';

const Footer = () => {
  const { t } = useTranslation('common');
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <img src="/images/logo.jpeg" alt="Beauty on Tour" />
            <p>{t('slogan')}</p>
          </div>
          
          <div className="footer-links">
            <div className="footer-column">
              <h3>{t('menu.destinations')}</h3>
              <ul>
                <li><Link href="/destinations/aegean"><a>Ägäische Küste</a></Link></li>
                <li><Link href="/destinations/cappadocia"><a>Kappadokien</a></Link></li>
                <li><Link href="/destinations/istanbul"><a>Istanbul</a></Link></li>
                <li><Link href="/destinations/bodrum"><a>Bodrum</a></Link></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h3>{t('menu.health')}</h3>
              <ul>
                <li><Link href="/health/dental"><a>Zahnbehandlungen</a></Link></li>
                <li><Link href="/health/hair"><a>Haartransplantation</a></Link></li>
                <li><Link href="/health/eye"><a>Laser Augenoperationen</a></Link></li>
                <li><Link href="/health/aesthetic"><a>Ästhetische Chirurgie</a></Link></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h3>{t('menu.beauty')}</h3>
              <ul>
                <li><Link href="/beauty/spa"><a>Spa-Erlebnisse</a></Link></li>
                <li><Link href="/beauty/mobile"><a>Mobile Beauty-Services</a></Link></li>
                <li><Link href="/beauty/wellness"><a>Wellness-Pakete</a></Link></li>
                <li><Link href="/shop"><a>Beauty-Produkte</a></Link></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h3>{t('contact.title')}</h3>
              <ul>
                <li><Link href="/contact"><a>{t('contact.form.submit')}</a></Link></li>
                <li><Link href="/booking"><a>{t('buttons.bookNow')}</a></Link></li>
                <li><a href="tel:+491234567890">+49 123 456 7890</a></li>
                <li><a href="mailto:info@beautyontour.com">info@beautyontour.com</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="copyright">
            &copy; {new Date().getFullYear()} Beauty on Tour. {t('footer.rights')}
          </div>
          
          <div className="legal-links">
            <Link href="/privacy"><a>{t('footer.privacy')}</a></Link>
            <Link href="/terms"><a>{t('footer.terms')}</a></Link>
            <Link href="/imprint"><a>{t('footer.imprint')}</a></Link>
          </div>
          
          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <span className="social-icon">Facebook</span>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <span className="social-icon">Instagram</span>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <span className="social-icon">Twitter</span>
            </a>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .footer {
          background-color: var(--background-dark);
          padding: 60px 0 20px;
          margin-top: 80px;
          border-top: 1px solid var(--border-color);
        }
        
        .footer-content {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          margin-bottom: 40px;
        }
        
        .footer-logo {
          flex: 0 0 100%;
          max-width: 300px;
          margin-bottom: 30px;
        }
        
        .footer-logo img {
          height: 60px;
          margin-bottom: 15px;
        }
        
        .footer-logo p {
          color: var(--text-secondary);
          font-size: 14px;
        }
        
        .footer-links {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          flex: 1;
          margin-left: 40px;
        }
        
        .footer-column {
          flex: 0 0 auto;
          margin-bottom: 30px;
          margin-right: 30px;
        }
        
        .footer-column h3 {
          color: var(--accent-color);
          font-size: 16px;
          margin-bottom: 15px;
          font-weight: 600;
        }
        
        .footer-column ul {
          list-style: none;
        }
        
        .footer-column li {
          margin-bottom: 10px;
        }
        
        .footer-column a {
          color: var(--text-secondary);
          font-size: 14px;
          transition: var(--transition);
        }
        
        .footer-column a:hover {
          color: var(--accent-color);
        }
        
        .footer-bottom {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          align-items: center;
          padding-top: 20px;
          border-top: 1px solid var(--border-color);
          font-size: 12px;
          color: var(--text-secondary);
        }
        
        .legal-links a {
          color: var(--text-secondary);
          margin-left: 20px;
          transition: var(--transition);
        }
        
        .legal-links a:hover {
          color: var(--accent-color);
        }
        
        .social-links {
          display: flex;
        }
        
        .social-icon {
          margin-left: 15px;
          color: var(--text-secondary);
          transition: var(--transition);
        }
        
        .social-icon:hover {
          color: var(--accent-color);
        }
        
        @media (max-width: 768px) {
          .footer-content {
            flex-direction: column;
          }
          
          .footer-links {
            margin-left: 0;
            flex-direction: column;
          }
          
          .footer-bottom {
            flex-direction: column;
            text-align: center;
          }
          
          .legal-links, .social-links {
            margin-top: 15px;
          }
          
          .legal-links a:first-child {
            margin-left: 0;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
