import React, { useState } from 'react';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Layout from '../components/Layout';

const Health = () => {
  const { t } = useTranslation(['common', 'health']);
  const [activeTab, setActiveTab] = useState('dental');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'dental',
    message: '',
    consent: false
  });
  
  const healthServices = [
    {
      id: 'dental',
      title: 'Zahnbehandlungen',
      description: 'Hochwertige Zahnbehandlungen in erstklassigen Kliniken zu attraktiven Preisen mit umfassender Betreuung.',
      image: '/images/health-dental.jpg',
      treatments: [
        {
          name: 'Zahnimplantate',
          description: 'Dauerhafte Lösung für fehlende Zähne mit hochwertigen Implantaten.',
          duration: '3-7 Tage'
        },
        {
          name: 'Veneers',
          description: 'Dünne Keramikschalen für ein perfektes Lächeln und strahlend weiße Zähne.',
          duration: '5-7 Tage'
        },
        {
          name: 'Kronen und Brücken',
          description: 'Hochwertige Restaurationen für beschädigte oder fehlende Zähne.',
          duration: '5-10 Tage'
        },
        {
          name: 'Professionelle Zahnreinigung',
          description: 'Gründliche Reinigung für gesundes Zahnfleisch und strahlende Zähne.',
          duration: '1 Tag'
        }
      ]
    },
    {
      id: 'hair',
      title: 'Haartransplantation',
      description: 'Modernste Techniken für natürlich aussehende Ergebnisse durch erfahrene Experten in führenden Kliniken.',
      image: '/images/health-hair.jpg',
      treatments: [
        {
          name: 'FUE-Methode',
          description: 'Schonende Entnahme einzelner Haarfollikel für natürliche Ergebnisse ohne sichtbare Narben.',
          duration: '1-2 Tage + Nachsorge'
        },
        {
          name: 'DHI-Methode',
          description: 'Direkte Implantation der Haarfollikel für präzise Ergebnisse und schnellere Heilung.',
          duration: '1-2 Tage + Nachsorge'
        },
        {
          name: 'Sapphire FUE',
          description: 'Fortschrittliche FUE-Technik mit Saphirklingen für minimale Traumatisierung und natürlichere Ergebnisse.',
          duration: '1-2 Tage + Nachsorge'
        },
        {
          name: 'Bart- und Augenbrauentransplantation',
          description: 'Spezialisierte Transplantationstechniken für Bart und Augenbrauen.',
          duration: '1 Tag + Nachsorge'
        }
      ]
    },
    {
      id: 'eye',
      title: 'Augenoperationen',
      description: 'Präzise Augenlaserbehandlungen mit neuester Technologie für besseres Sehen ohne Brille oder Kontaktlinsen.',
      image: '/images/health-eye.jpg',
      treatments: [
        {
          name: 'LASIK',
          description: 'Schnelle und schmerzfreie Laserbehandlung zur Korrektur von Kurz-, Weit- und Stabsichtigkeit.',
          duration: '1 Tag'
        },
        {
          name: 'SMILE',
          description: 'Minimalinvasive Laserbehandlung mit schnellerer Heilung und weniger Nebenwirkungen.',
          duration: '1 Tag'
        },
        {
          name: 'PRK/LASEK',
          description: 'Alternative Laserbehandlung für Patienten, die für LASIK nicht geeignet sind.',
          duration: '1 Tag + Nachsorge'
        },
        {
          name: 'Linsenimplantation',
          description: 'Implantation von Intraokularlinsen als Alternative zur Laserbehandlung.',
          duration: '1-2 Tage'
        }
      ]
    },
    {
      id: 'aesthetic',
      title: 'Ästhetische Chirurgie',
      description: 'Diskrete und professionelle ästhetische Eingriffe in erstklassigen Kliniken mit erfahrenen Chirurgen.',
      image: '/images/health-aesthetic.jpg',
      treatments: [
        {
          name: 'Rhinoplastik (Nasenkorrektur)',
          description: 'Formveränderung der Nase für ein harmonisches Gesichtsprofil.',
          duration: '1-2 Tage + 7-10 Tage Nachsorge'
        },
        {
          name: 'Brustvergrößerung/-verkleinerung',
          description: 'Anpassung der Brustgröße für ein ausgewogenes Körperbild.',
          duration: '1-2 Tage + 7-10 Tage Nachsorge'
        },
        {
          name: 'Fettabsaugung',
          description: 'Gezielte Entfernung von Fettdepots für eine schlankere Silhouette.',
          duration: '1 Tag + 5-7 Tage Nachsorge'
        },
        {
          name: 'Facelift',
          description: 'Straffung der Gesichtshaut für ein jüngeres Erscheinungsbild.',
          duration: '1-2 Tage + 10-14 Tage Nachsorge'
        }
      ]
    }
  ];
  
  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    setFormData(prevState => ({
      ...prevState,
      service: tabId
    }));
  };
  
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Hier würde die Anfrage an das Backend gesendet werden
    alert('Vielen Dank für Ihre Anfrage! Wir werden uns in Kürze bei Ihnen melden.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: activeTab,
      message: '',
      consent: false
    });
  };
  
  const activeService = healthServices.find(service => service.id === activeTab);
  
  return (
    <Layout
      title={`Gesundheitstourismus - ${t('common:beautyontour')}`}
      description="Hochwertige medizinische Behandlungen in der Türkei: Zahnbehandlungen, Haartransplantation, Augenoperationen und ästhetische Chirurgie mit persönlicher Betreuung."
    >
      <section className="page-header">
        <div className="container">
          <h1 className="page-title">Gesundheitstourismus</h1>
          <p className="page-subtitle">Hochwertige medizinische Behandlungen in der Türkei mit persönlicher Betreuung</p>
        </div>
      </section>
      
      <section className="health-intro">
        <div className="container">
          <div className="intro-content">
            <h2 className="section-title">Warum Gesundheitstourismus in der Türkei?</h2>
            <div className="intro-grid">
              <div className="intro-item">
                <div className="intro-icon">
                  <i className="fas fa-hospital"></i>
                </div>
                <h3>Erstklassige Kliniken</h3>
                <p>Modernste Einrichtungen mit internationalen Akkreditierungen und höchsten Hygienestandards.</p>
              </div>
              
              <div className="intro-item">
                <div className="intro-icon">
                  <i className="fas fa-user-md"></i>
                </div>
                <h3>Erfahrene Spezialisten</h3>
                <p>Hochqualifizierte Ärzte mit internationaler Ausbildung und langjähriger Erfahrung.</p>
              </div>
              
              <div className="intro-item">
                <div className="intro-icon">
                  <i className="fas fa-euro-sign"></i>
                </div>
                <h3>Attraktive Preise</h3>
                <p>Hochwertige Behandlungen zu deutlich günstigeren Preisen als in Deutschland, Österreich oder der Schweiz.</p>
              </div>
              
              <div className="intro-item">
                <div className="intro-icon">
                  <i className="fas fa-hands-helping"></i>
                </div>
                <h3>Umfassende Betreuung</h3>
                <p>Persönliche Begleitung während des gesamten Aufenthalts, inklusive Dolmetscherdienste und Transfers.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="health-services">
        <div className="container">
          <div className="services-tabs">
            <div className="tabs-header">
              {healthServices.map(service => (
                <button
                  key={service.id}
                  className={`tab-btn ${activeTab === service.id ? 'active' : ''}`}
                  onClick={() => handleTabChange(service.id)}
                >
                  {service.title}
                </button>
              ))}
            </div>
            
            <div className="tab-content">
              <div className="service-header">
                <div className="service-image">
                  <img src={activeService.image} alt={activeService.title} />
                </div>
                <div className="service-intro">
                  <h2 className="service-title">{activeService.title}</h2>
                  <p className="service-description">{activeService.description}</p>
                </div>
              </div>
              
              <div className="treatments-list">
                <h3 className="treatments-title">Behandlungen</h3>
                <div className="treatments-grid">
                  {activeService.treatments.map((treatment, index) => (
                    <div key={index} className="treatment-item">
                      <h4 className="treatment-name">{treatment.name}</h4>
                      <p className="treatment-description">{treatment.description}</p>
                      <div className="treatment-duration">
                        <span className="duration-label">Aufenthaltsdauer:</span>
                        <span className="duration-value">{treatment.duration}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="service-features">
                <h3 className="features-title">Unsere Leistungen</h3>
                <ul className="features-list">
                  <li className="feature-item">
                    <i className="fas fa-check-circle"></i>
                    <span>Kostenlose Erstberatung und Behandlungsplanung</span>
                  </li>
                  <li className="feature-item">
                    <i className="fas fa-check-circle"></i>
                    <span>Organisation der Reise und Unterkunft</span>
                  </li>
                  <li className="feature-item">
                    <i className="fas fa-check-circle"></i>
                    <span>Flughafen-Hotel-Klinik Transfers</span>
                  </li>
                  <li className="feature-item">
                    <i className="fas fa-check-circle"></i>
                    <span>Persönliche Betreuung während des gesamten Aufenthalts</span>
                  </li>
                  <li className="feature-item">
                    <i className="fas fa-check-circle"></i>
                    <span>Kostenlose Dolmetscherdienste</span>
                  </li>
                  <li className="feature-item">
                    <i className="fas fa-check-circle"></i>
                    <span>24/7 Erreichbarkeit bei Fragen und Beschwerden</span>
                  </li>
                  <li className="feature-item">
                    <i className="fas fa-check-circle"></i>
                    <span>Nachsorgebetreuung auch nach der Rückkehr</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="inquiry-form">
        <div className="container">
          <div className="form-container">
            <div className="form-header">
              <h2 className="form-title">Unverbindliche Anfrage stellen</h2>
              <p className="form-subtitle">Füllen Sie das Formular aus und wir kontaktieren Sie für eine kostenlose Beratung</p>
            </div>
            
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">E-Mail *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="phone">Telefon *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="service">Gewünschte Behandlung *</label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  required
                >
                  {healthServices.map(service => (
                    <option key={service.id} value={service.id}>
                      {service.title}
                    </option>
                  ))}
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Ihre Nachricht</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="5"
                ></textarea>
              </div>
              
              <div className="form-group checkbox">
                <input
                  type="checkbox"
                  id="consent"
                  name="consent"
                  checked={formData.consent}
                  onChange={handleInputChange}
                  required
                />
                <label htmlFor="consent">
                  Ich stimme zu, dass meine Daten zur Bearbeitung meiner Anfrage gespeichert und verwendet werden. *
                </label>
              </div>
              
              <button type="submit" className="btn btn-primary">
                Anfrage absenden
              </button>
            </form>
          </div>
        </div>
      </section>
      
      <style jsx>{`
        .page-header {
          background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/images/health-bg.jpg');
          background-size: cover;
          background-position: center;
          padding: 100px 0;
          text-align: center;
        }
        
        .page-title {
          font-size: 3rem;
          color: var(--accent-color);
          margin-bottom: 20px;
        }
        
        .page-subtitle {
          font-size: 1.2rem;
          color: var(--text-color);
          max-width: 700px;
          margin: 0 auto;
        }
        
        .health-intro {
          padding: 100px 0;
          background-color: var(--primary-color);
        }
        
        .intro-content {
          text-align: center;
        }
        
        .intro-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 30px;
          margin-top: 50px;
        }
        
        .intro-item {
          background-color: var(--background-light);
          padding: 30px;
          border-radius: 10px;
          box-shadow: var(--box-shadow);
          transition: var(--transition);
        }
        
        .intro-item:hover {
          transform: translateY(-10px);
        }
        
        .intro-icon {
          font-size: 2.5rem;
          color: var(--accent-color);
          margin-bottom: 20px;
        }
        
        .intro-item h3 {
          font-size: 1.3rem;
          color: var(--text-color);
          margin-bottom: 15px;
        }
        
        .intro-item p {
          color: var(--text-secondary);
        }
        
        .health-services {
          padding: 100px 0;
          background-color: var(--background-light);
        }
        
        .services-tabs {
          background-color: var(--background-dark);
          border-radius: 10px;
          overflow: hidden;
          box-shadow: var(--box-shadow);
        }
        
        .tabs-header {
          display: flex;
          border-bottom: 1px solid var(--border-color);
          overflow-x: auto;
        }
        
        .tab-btn {
          padding: 15px 30px;
          background-color: transparent;
          border: none;
          color: var(--text-color);
          font-size: 1rem;
          font-weight: 500;
          cursor: pointer;
          transition: var(--transition);
          white-space: nowrap;
        }
        
        .tab-btn:hover {
          color: var(--accent-color);
        }
        
        .tab-btn.active {
          background-color: rgba(255, 165, 0, 0.1);
          color: var(--accent-color);
          border-bottom: 2px solid var(--accent-color);
        }
        
        .tab-content {
          padding: 30px;
        }
        
        .service-header {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 30px;
          margin-bottom: 40px;
        }
        
        .service-image {
          border-radius: 10px;
          overflow: hidden;
          height: 300px;
        }
        
        .service-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        .service-title {
          font-size: 2rem;
          color: var(--accent-color);
          margin-bottom: 20px;
        }
        
        .service-description {
          font-size: 1.1rem;
          color: var(--text-secondary);
          line-height: 1.8;
        }
        
        .treatments-list {
          margin-bottom: 40px;
        }
        
        .treatments-title {
          font-size: 1.5rem;
          color: var(--accent-color);
          margin-bottom: 20px;
        }
        
        .treatments-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 20px;
        }
        
        .treatment-item {
          background-color: var(--primary-color);
          padding: 20px;
          border-radius: 10px;
          box-shadow: var(--box-shadow);
        }
        
        .treatment-name {
          font-size: 1.2rem;
          color: var(--accent-color);
          margin-bottom: 10px;
        }
        
        .treatment-description {
          color: var(--text-secondary);
          margin-bottom: 15px;
        }
        
        .treatment-duration {
          display: flex;
          align-items: center;
          font-size: 0.9rem;
        }
        
        .duration-label {
          color: var(--text-color);
          margin-right: 5px;
        }
        
        .duration-value {
          color: var(--accent-color);
          font-weight: 600;
        }
        
        .features-title {
          font-size: 1.5rem;
          color: var(--accent-color);
          margin-bottom: 20px;
        }
        
        .features-list {
          list-style: none;
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 15px;
        }
        
        .feature-item {
          display: flex;
          align-items: center;
        }
        
        .feature-item i {
          color: var(--accent-color);
          margin-right: 10px;
          font-size: 1.2rem;
        }
        
        .inquiry-form {
          padding: 100px 0;
          background-color: var(--primary-color);
        }
        
        .form-container {
          background-color: var(--background-light);
          border-radius: 10px;
          padding: 40px;
          box-shadow: var(--box-shadow);
          max-width: 800px;
          margin: 0 auto;
        }
        
        .form-header {
          text-align: center;
          margin-bottom: 30px;
        }
        
        .form-title {
          font-size: 2rem;
          color: var(--accent-color);
          margin-bottom: 10px;
        }
        
        .form-subtitle {
          color: var(--text-secondary);
        }
        
        .form-group {
          margin-bottom: 20px;
        }
        
        .form-group label {
          display: block;
          margin-bottom: 8px;
          color: var(--text-color);
        }
        
        .form-group input,
        .form-group select,
        .form-group textarea {
          width: 100%;
          padding: 12px 15px;
          background-color: var(--primary-color);
          border: 1px solid var(--border-color);
          border-radius: 5px;
          color: var(--text-color);
          font-size: 1rem;
        }
        
        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
          border-color: var(--accent-color);
          outline: none;
        }
        
        .form-group.checkbox {
          display: flex;
          align-items: flex-start;
        }
        
        .form-group.checkbox input {
          width: auto;
          margin-right: 10px;
          margin-top: 5px;
        }
        
        .form-group.checkbox label {
          font-size: 0.9rem;
          color: var(--text-secondary);
        }
        
        @media (max-width: 992px) {
          .service-header {
            grid-template-columns: 1fr;
          }
          
          .service-image {
            height: 250px;
          }
        }
        
        @media (max-width: 768px) {
          .page-title {
            font-size: 2.5rem;
          }
          
          .tabs-header {
            flex-wrap: wrap;
          }
          
          .tab-btn {
            flex: 1 0 50%;
            text-align: center;
          }
          
          .features-list {
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
      ...(await serverSideTranslations(locale, ['common', 'health'])),
    },
  };
}

export default Health;
