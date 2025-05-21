import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';

export default function Booking() {
  const { t } = useTranslation('common');

  return (
    <Layout>
      <Head>
        <title>Buchung - Beautyontour</title>
        <meta name="description" content="Buchen Sie Ihre Luxusreise oder Gesundheitsbehandlung in der Türkei. Einfach und sicher online buchen." />
      </Head>

      <main>
        <section className="page-header">
          <div className="container">
            <h1>Buchung</h1>
            <p>Buchen Sie Ihre Reise oder Gesundheitsbehandlung</p>
          </div>
        </section>

        <section className="booking-form">
          <div className="container">
            <div className="form-container">
              <h2>Buchungsanfrage</h2>
              <form>
                <div className="form-group">
                  <label htmlFor="service-type">Art der Dienstleistung</label>
                  <select id="service-type" name="service-type" required>
                    <option value="">Bitte wählen</option>
                    <option value="travel">Luxusreise</option>
                    <option value="dental">Zahnbehandlung</option>
                    <option value="hair">Haartransplantation</option>
                    <option value="eye">Augenoperation</option>
                    <option value="cosmetic">Schönheitschirurgie</option>
                    <option value="combined">Kombinierte Reise & Behandlung</option>
                  </select>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="start-date">Anreisedatum</label>
                    <input type="date" id="start-date" name="start-date" required />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="end-date">Abreisedatum</label>
                    <input type="date" id="end-date" name="end-date" required />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="adults">Erwachsene</label>
                    <input type="number" id="adults" name="adults" min="1" defaultValue="1" required />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="children">Kinder</label>
                    <input type="number" id="children" name="children" min="0" defaultValue="0" />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="special-requests">Besondere Wünsche</label>
                  <textarea id="special-requests" name="special-requests" rows="4"></textarea>
                </div>

                <h3>Persönliche Informationen</h3>

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
                  <input type="tel" id="phone" name="phone" required />
                </div>

                <div className="form-group">
                  <label htmlFor="country">Land</label>
                  <select id="country" name="country" required>
                    <option value="">Bitte wählen</option>
                    <option value="DE">Deutschland</option>
                    <option value="AT">Österreich</option>
                    <option value="CH">Schweiz</option>
                    <option value="other">Anderes Land</option>
                  </select>
                </div>

                <div className="form-group checkbox">
                  <input type="checkbox" id="terms" name="terms" required />
                  <label htmlFor="terms">Ich akzeptiere die <a href="/terms">AGB</a> und <a href="/privacy">Datenschutzbestimmungen</a></label>
                </div>

                <button type="submit" className="btn btn-primary">{t('common.buttons.submit')}</button>
              </form>
            </div>

            <div className="booking-info">
              <h3>Informationen zur Buchung</h3>
              <p>Nach Eingang Ihrer Buchungsanfrage werden wir uns innerhalb von 24 Stunden mit Ihnen in Verbindung setzen, um die Details zu besprechen und Ihnen ein individuelles Angebot zu unterbreiten.</p>
              
              <h4>Zahlungsmöglichkeiten</h4>
              <ul>
                <li>Kreditkarte (Visa, Mastercard)</li>
                <li>PayPal</li>
                <li>Überweisung</li>
              </ul>
              
              <h4>Stornierungsbedingungen</h4>
              <p>Kostenfreie Stornierung bis 30 Tage vor Anreise. Bei späteren Stornierungen fallen Gebühren an. Details finden Sie in unseren AGB.</p>
              
              <div className="contact-box">
                <h4>Fragen zur Buchung?</h4>
                <p>Unser Team steht Ihnen gerne zur Verfügung:</p>
                <p><strong>Telefon:</strong> +90 123 456 7890</p>
                <p><strong>E-Mail:</strong> booking@beautyontour.com</p>
              </div>
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
