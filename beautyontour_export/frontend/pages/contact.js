import React, { useState } from 'react';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Layout from '../components/Layout';

const Contact = () => {
  const { t } = useTranslation(['common', 'contact']);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simuliere API-Aufruf
    setTimeout(() => {
      setFormStatus({
        submitted: true,
        success: true,
        message: t('contact:form.success')
      });
      // Formular zurücksetzen
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 1000);
  };

  return (
    <Layout
      title={`${t('contact:title')} - ${t('common:beautyontour')}`}
      description={t('contact:subtitle')}
    >
      <section className="contact-hero">
        <div className="container">
          <div className="section-header">
            <h1>{t('contact:title')}</h1>
            <h2>{t('contact:subtitle')}</h2>
          </div>
        </div>
      </section>

      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-form">
              {formStatus.submitted ? (
                <div className={`form-message ${formStatus.success ? 'success' : 'error'}`}>
                  {formStatus.message}
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">{t('contact:form.name')}</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="email">{t('contact:form.email')}</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="phone">{t('contact:form.phone')}</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="subject">{t('contact:form.subject')}</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="message">{t('contact:form.message')}</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="6"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>
                  
                  <button type="submit" className="btn btn-primary">
                    {t('contact:form.submit')}
                  </button>
                </form>
              )}
            </div>
            
            <div className="contact-info">
              <div className="info-card">
                <h3>{t('contact:info.title')}</h3>
                
                <div className="info-item">
                  <div className="info-icon">📍</div>
                  <div className="info-content">
                    <h4>{t('contact:info.address')}</h4>
                    <p>Beauty on Tour GmbH<br />Musterstraße 123<br />10115 Berlin<br />Deutschland</p>
                  </div>
                </div>
                
                <div className="info-item">
                  <div className="info-icon">📞</div>
                  <div className="info-content">
                    <h4>{t('contact:info.phone')}</h4>
                    <p>+49 123 456 7890</p>
                  </div>
                </div>
                
                <div className="info-item">
                  <div className="info-icon">✉️</div>
                  <div className="info-content">
                    <h4>{t('contact:info.email')}</h4>
                    <p>info@beautyontour.com</p>
                  </div>
                </div>
                
                <div className="info-item">
                  <div className="info-icon">🕒</div>
                  <div className="info-content">
                    <h4>{t('contact:info.hours')}</h4>
                    <p>Mo-Fr: 9:00 - 18:00<br />Sa: 10:00 - 14:00<br />So: Geschlossen</p>
                  </div>
                </div>
              </div>
              
              <div className="social-links">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link">
                  <span className="social-icon">Facebook</span>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">
                  <span className="social-icon">Instagram</span>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">
                  <span className="social-icon">Twitter</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .contact-hero {
          background-color: var(--background-light);
          padding: 80px 0;
          text-align: center;
        }
        
        .contact-hero h1 {
          font-size: 3rem;
          color: var(--accent-color);
          margin-bottom: 15px;
        }
        
        .contact-hero h2 {
          font-size: 1.2rem;
          color: var(--text-secondary);
          font-weight: 400;
        }
        
        .contact-content {
          padding: 80px 0;
          background-color: var(--primary-color);
        }
        
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 50px;
        }
        
        .contact-form {
          background-color: var(--background-light);
          padding: 40px;
          border-radius: 10px;
          box-shadow: var(--box-shadow);
        }
        
        .form-group {
          margin-bottom: 20px;
        }
        
        .form-group label {
          display: block;
          margin-bottom: 8px;
          font-weight: 500;
          color: var(--accent-color);
        }
        
        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 12px;
          background-color: var(--primary-color);
          border: 1px solid var(--border-color);
          border-radius: 5px;
          color: var(--text-color);
          font-size: 1rem;
          transition: var(--transition);
        }
        
        .form-group input:focus,
        .form-group textarea:focus {
          border-color: var(--accent-color);
          outline: none;
        }
        
        .btn {
          display: inline-block;
          padding: 12px 30px;
          border-radius: 5px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          transition: var(--transition);
          cursor: pointer;
          border: none;
          font-size: 1rem;
        }
        
        .btn-primary {
          background-color: var(--accent-color);
          color: var(--primary-color);
        }
        
        .btn-primary:hover {
          background-color: #e69100;
        }
        
        .form-message {
          padding: 20px;
          border-radius: 5px;
          margin-bottom: 20px;
          text-align: center;
          font-weight: 500;
        }
        
        .form-message.success {
          background-color: rgba(76, 175, 80, 0.1);
          color: var(--success-color);
          border: 1px solid var(--success-color);
        }
        
        .form-message.error {
          background-color: rgba(244, 67, 54, 0.1);
          color: var(--error-color);
          border: 1px solid var(--error-color);
        }
        
        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 30px;
        }
        
        .info-card {
          background-color: var(--background-light);
          padding: 40px;
          border-radius: 10px;
          box-shadow: var(--box-shadow);
        }
        
        .info-card h3 {
          font-size: 1.5rem;
          color: var(--accent-color);
          margin-bottom: 30px;
          text-align: center;
        }
        
        .info-item {
          display: flex;
          margin-bottom: 25px;
        }
        
        .info-icon {
          font-size: 1.5rem;
          margin-right: 15px;
          color: var(--accent-color);
        }
        
        .info-content h4 {
          font-size: 1.1rem;
          margin-bottom: 5px;
          color: var(--text-color);
        }
        
        .info-content p {
          color: var(--text-secondary);
          line-height: 1.6;
        }
        
        .social-links {
          display: flex;
          justify-content: center;
          gap: 20px;
        }
        
        .social-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 50px;
          height: 50px;
          background-color: var(--background-light);
          border-radius: 50%;
          transition: var(--transition);
          box-shadow: var(--box-shadow);
        }
        
        .social-link:hover {
          background-color: var(--accent-color);
          transform: translateY(-3px);
        }
        
        .social-icon {
          font-size: 0;
        }
        
        @media (max-width: 992px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </Layout>
  );
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'contact'])),
    },
  };
}

export default Contact;
