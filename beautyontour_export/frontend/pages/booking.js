import React, { useState } from 'react';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Layout from '../components/Layout';

const Booking = () => {
  const { t } = useTranslation(['common', 'booking']);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: '',
    destination: '',
    startDate: '',
    endDate: '',
    guests: 1,
    specialRequests: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });

  const serviceTypes = [
    { id: 'luxury_travel', name: 'Luxusreise' },
    { id: 'dental', name: 'Zahnbehandlung' },
    { id: 'hair_transplant', name: 'Haartransplantation' },
    { id: 'eye_surgery', name: 'Laser Augenoperation' },
    { id: 'aesthetic', name: 'Ästhetische Chirurgie' },
    { id: 'wellness', name: 'Wellness & Spa' }
  ];

  const destinations = [
    { id: 'aegean', name: 'Ägäische Küste' },
    { id: 'cappadocia', name: 'Kappadokien' },
    { id: 'istanbul', name: 'Istanbul' },
    { id: 'bodrum', name: 'Bodrum' },
    { id: 'antalya', name: 'Antalya' }
  ];

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
        message: 'Vielen Dank für Ihre Buchungsanfrage. Wir werden uns in Kürze bei Ihnen melden, um die Details zu besprechen.'
      });
      // Formular zurücksetzen
      setFormData({
        name: '',
        email: '',
        phone: '',
        serviceType: '',
        destination: '',
        startDate: '',
        endDate: '',
        guests: 1,
        specialRequests: ''
      });
    }, 1000);
  };

  return (
    <Layout
      title={`Buchung - ${t('common:beautyontour')}`}
      description="Buchen Sie Ihre Luxusreise oder Gesundheitsbehandlung"
    >
      <section className="booking-hero">
        <div className="container">
          <div className="section-header">
            <h1>Buchungsanfrage</h1>
            <h2>Planen Sie Ihre maßgeschneiderte Reise oder Behandlung</h2>
          </div>
        </div>
      </section>

      <section className="booking-content">
        <div className="container">
          <div className="booking-grid">
            <div className="booking-form">
              {formStatus.submitted ? (
                <div className={`form-message ${formStatus.success ? 'success' : 'error'}`}>
                  {formStatus.message}
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="form-section">
                    <h3>Persönliche Informationen</h3>
                    
                    <div className="form-group">
                      <label htmlFor="name">Name *</label>
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
                      <label htmlFor="email">E-Mail *</label>
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
                      <label htmlFor="phone">Telefon *</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="form-section">
                    <h3>Buchungsdetails</h3>
                    
                    <div className="form-group">
                      <label htmlFor="serviceType">Art der Dienstleistung *</label>
                      <select
                        id="serviceType"
                        name="serviceType"
                        value={formData.serviceType}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Bitte wählen</option>
                        {serviceTypes.map(service => (
                          <option key={service.id} value={service.id}>
                            {service.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="destination">Reiseziel *</label>
                      <select
                        id="destination"
                        name="destination"
                        value={formData.destination}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Bitte wählen</option>
                        {destinations.map(destination => (
                          <option key={destination.id} value={destination.id}>
                            {destination.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    
                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="startDate">Anreisedatum *</label>
                        <input
                          type="date"
                          id="startDate"
                          name="startDate"
                          value={formData.startDate}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      
                      <div className="form-group">
                        <label htmlFor="endDate">Abreisedatum *</label>
                        <input
                          type="date"
                          id="endDate"
                          name="endDate"
                          value={formData.endDate}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="guests">Anzahl der Personen *</label>
                      <input
                        type="number"
                        id="guests"
                        name="guests"
                        min="1"
                        max="10"
                        value={formData.guests}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="specialRequests">Besondere Wünsche oder Anforderungen</label>
                      <textarea
                        id="specialRequests"
                        name="specialRequests"
                        rows="5"
                        value={formData.specialRequests}
                        onChange={handleChange}
                      ></textarea>
                    </div>
                  </div>
                  
                  <div className="form-actions">
                    <button type="submit" className="btn btn-primary">
                      Buchungsanfrage senden
                    </button>
                  </div>
                </form>
              )}
            </div>
            
            <div className="booking-info">
              <div className="info-card">
                <h3>Unsere Dienstleistungen</h3>
                
                <div className="service-item">
                  <h4>Luxusreisen</h4>
                  <p>Maßgeschneiderte Reiseerlebnisse mit exklusiven Unterkünften, privaten Transfers und persönlicher Betreuung.</p>
                </div>
                
                <div className="service-item">
                  <h4>Gesundheitstourismus</h4>
                  <p>Hochwertige medizinische Behandlungen in erstklassigen Kliniken mit erfahrenen Spezialisten zu attraktiven Preisen.</p>
                </div>
                
                <div className="service-item">
                  <h4>Wellness & Beauty</h4>
                  <p>Exklusive Spa-Erlebnisse und Beauty-Treatments in luxuriösen Umgebungen für Ihr Wohlbefinden.</p>
                </div>
              </div>
              
              <div className="info-card">
                <h3>Inkludierte Leistungen</h3>
                
                <ul className="included-services">
                  <li>
                    <span className="service-icon">✓</span>
                    <span>Persönliche Betreuung von Anfang bis Ende</span>
                  </li>
                  <li>
                    <span className="service-icon">✓</span>
                    <span>Flughafen-Hotel Transfers</span>
                  </li>
                  <li>
                    <span className="service-icon">✓</span>
                    <span>Kostenlose Dolmetscherdienste</span>
                  </li>
                  <li>
                    <span className="service-icon">✓</span>
                    <span>24/7 Erreichbarkeit bei Fragen und Anliegen</span>
                  </li>
                  <li>
                    <span className="service-icon">✓</span>
                    <span>Individuelle Reiseplanung nach Ihren Wünschen</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .booking-hero {
          background-color: var(--background-light);
          padding: 80px 0;
          text-align: center;
        }
        
        .booking-hero h1 {
          font-size: 3rem;
          color: var(--accent-color);
          margin-bottom: 15px;
        }
        
        .booking-hero h2 {
          font-size: 1.2rem;
          color: var(--text-secondary);
          font-weight: 400;
        }
        
        .booking-content {
          padding: 80px 0;
          background-color: var(--primary-color);
        }
        
        .booking-grid {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 40px;
        }
        
        .booking-form {
          background-color: var(--background-light);
          padding: 40px;
          border-radius: 10px;
          box-shadow: var(--box-shadow);
        }
        
        .form-section {
          margin-bottom: 30px;
        }
        
        .form-section h3 {
          font-size: 1.3rem;
          color: var(--accent-color);
          margin-bottom: 20px;
          padding-bottom: 10px;
          border-bottom: 1px solid var(--border-color);
        }
        
        .form-group {
          margin-bottom: 20px;
        }
        
        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }
        
        .form-group label {
          display: block;
          margin-bottom: 8px;
          font-weight: 500;
          color: var(--text-color);
        }
        
        .form-group input,
        .form-group select,
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
        .form-group select:focus,
        .form-group textarea:focus {
          border-color: var(--accent-color);
          outline: none;
        }
        
        .form-actions {
          margin-top: 30px;
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
          padding: 30px;
          border-radius: 5px;
          margin-bottom: 20px;
          text-align: center;
          font-weight: 500;
          font-size: 1.1rem;
          line-height: 1.6;
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
        
        .booking-info {
          display: flex;
          flex-direction: column;
          gap: 30px;
        }
        
        .info-card {
          background-color: var(--background-light);
          padding: 30px;
          border-radius: 10px;
          box-shadow: var(--box-shadow);
        }
        
        .info-card h3 {
          font-size: 1.3rem;
          color: var(--accent-color);
          margin-bottom: 20px;
          padding-bottom: 10px;
          border-bottom: 1px solid var(--border-color);
        }
        
        .service-item {
          margin-bottom: 20px;
        }
        
        .service-item h4 {
          font-size: 1.1rem;
          margin-bottom: 8px;
          color: var(--text-color);
        }
        
        .service-item p {
          color: var(--text-secondary);
          font-size: 0.9rem;
          line-height: 1.6;
        }
        
        .included-services {
          list-style: none;
        }
        
        .included-services li {
          display: flex;
          align-items: flex-start;
          margin-bottom: 15px;
        }
        
        .service-icon {
          color: var(--accent-color);
          font-weight: bold;
          margin-right: 10px;
          font-size: 1.1rem;
        }
        
        @media (max-width: 992px) {
          .booking-grid {
            grid-template-columns: 1fr;
          }
          
          .form-row {
            grid-template-columns: 1fr;
            gap: 0;
          }
        }
      `}</style>
    </Layout>
  );
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'booking'])),
    },
  };
}

export default Booking;
