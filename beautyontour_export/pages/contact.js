import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';

export default function Contact() {
  const { t } = useTranslation('common');

  return (
    <Layout>
      <Head>
        <title>Kontakt - Beautyontour</title>
        <meta name="description" content="Kontaktieren Sie uns für Fragen zu Luxusreisen und Gesundheitstourismus in der Türkei. Wir beraten Sie gerne persönlich." />
      </Head>

      <main>
        <section className="page-header">
          <div className="container">
            <h1>Kontakt</h1>
            <p>Wir freuen uns auf Ihre Nachricht</p>
          </div>
        </section>

        <section className="contact-section">
          <div className="container">
            <div className="contact-grid">
              <div className="contact-form">
                <h2>Kontaktformular</h2>
                <form>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="first-name">Vorname</label>
                      <input type="text" id="first-name" name="first-name" required />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="last-name">Nachname</label>
                      <input type="text" id="last-name" name="last-name" required />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">E-Mail</label>
                    <input type="email" id="email" name="email" required />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">Telefon</label>
                    <input type="tel" id="phone" name="phone" />
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject">Betreff</label>
                    <select id="subject" name="subject" required>
                      <option value="">Bitte wählen</option>
                      <option value="travel">Luxusreisen</option>
                      <option value="health">Gesundheitstourismus</option>
                      <option value="booking">Buchungsanfrage</option>
                      <option value="partnership">Geschäftspartnerschaft</option>
                      <option value="other">Sonstiges</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Nachricht</label>
                    <textarea id="message" name="message" rows="6" required></textarea>
                  </div>

                  <div className="form-group checkbox">
                    <input type="checkbox" id="privacy" name="privacy" required />
                    <label htmlFor="privacy">Ich akzeptiere die <a href="/privacy">Datenschutzbestimmungen</a></label>
                  </div>

                  <button type="submit" className="btn btn-primary">{t('common.buttons.submit')}</button>
                </form>
              </div>

              <div className="contact-info">
                <h2>Kontaktinformationen</h2>
                
                <div className="info-item">
                  <h3>Adresse</h3>
                  <p>Beautyontour GmbH<br />
                  Musterstraße 123<br />
                  10115 Berlin<br />
                  Deutschland</p>
                </div>
                
                <div className="info-item">
                  <h3>Kontakt</h3>
                  <p><strong>Telefon:</strong> +49 30 1234567</p>
                  <p><strong>E-Mail:</strong> info@beautyontour.com</p>
                </div>
                
                <div className="info-item">
                  <h3>Öffnungszeiten</h3>
                  <p>Montag - Freitag: 9:00 - 18:00 Uhr</p>
                  <p>Samstag: 10:00 - 14:00 Uhr</p>
                  <p>Sonntag: Geschlossen</p>
                </div>
                
                <div className="social-media">
                  <h3>Social Media</h3>
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
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="map-section">
          <div className="container">
            <h2>Standort</h2>
            <div className="map-container">
              {/* Google Maps Embed würde hier eingefügt */}
              <div className="map-placeholder">
                <p>Google Maps Karte wird hier angezeigt</p>
              </div>
            </div>
          </div>
        </section>

        <section className="faq-section">
          <div className="container">
            <h2>Häufig gestellte Fragen</h2>
            
            <div className="faq-item">
              <h3>Wie kann ich eine Reise buchen?</h3>
              <p>Sie können eine Reise über unser <a href="/booking">Buchungsformular</a> anfragen oder uns direkt kontaktieren. Wir erstellen Ihnen dann ein individuelles Angebot.</p>
            </div>
            
            <div className="faq-item">
              <h3>Welche Zahlungsmethoden werden akzeptiert?</h3>
              <p>Wir akzeptieren Kreditkarten (Visa, Mastercard), PayPal und Überweisung.</p>
            </div>
            
            <div className="faq-item">
              <h3>Wie läuft eine Gesundheitsbehandlung ab?</h3>
              <p>Nach Ihrer Anfrage stellen wir den Kontakt zu einer geeigneten Klinik her. Wir organisieren Ihre Reise, Unterkunft und Transfers und begleiten Sie während des gesamten Aufenthalts.</p>
            </div>
            
            <div className="faq-item">
              <h3>Benötige ich ein Visum für die Türkei?</h3>
              <p>Für deutsche Staatsangehörige ist für touristische Aufenthalte bis zu 90 Tagen kein Visum erforderlich. Für andere Nationalitäten können andere Regelungen gelten.</p>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}
