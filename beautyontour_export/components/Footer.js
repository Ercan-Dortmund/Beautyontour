import { useTranslation } from 'next-i18next';
import Link from 'next/link';

const Footer = () => {
  const { t } = useTranslation('common');

  return (
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
  );
};

export default Footer;
