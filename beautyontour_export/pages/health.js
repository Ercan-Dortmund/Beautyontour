import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';

export default function Health() {
  const { t } = useTranslation('common');

  return (
    <Layout>
      <Head>
        <title>Gesundheitstourismus - Beautyontour</title>
        <meta name="description" content="Hochwertige medizinische Behandlungen in der Türkei. Zahnbehandlungen, Haartransplantationen, Augenoperationen und Schönheitschirurgie." />
      </Head>

      <main>
        <section className="page-header">
          <div className="container">
            <h1>Gesundheitstourismus</h1>
            <p>Hochwertige medizinische Behandlungen in der Türkei</p>
          </div>
        </section>

        <section className="health-intro">
          <div className="container">
            <div className="intro-content">
              <h2>Warum Gesundheitstourismus in der Türkei?</h2>
              <p>Die Türkei hat sich in den letzten Jahren zu einem der führenden Länder im Bereich des Gesundheitstourismus entwickelt. Moderne Kliniken, international ausgebildete Ärzte und attraktive Preise machen das Land zu einem beliebten Ziel für medizinische Behandlungen.</p>
              <p>Bei Beautyontour bieten wir Ihnen Zugang zu den besten Kliniken und Spezialisten der Türkei. Wir organisieren Ihre gesamte Reise, von der Beratung über die Behandlung bis zur Nachsorge.</p>
            </div>
            <div className="intro-image">
              <img src="/images/health-tourism.jpg" alt="Moderne Klinik in der Türkei" />
            </div>
          </div>
        </section>

        <section className="treatments">
          <div className="container">
            <h2>Unsere Behandlungen</h2>
            
            <div className="treatment-card">
              <div className="treatment-image">
                <img src="/images/dental-treatment.jpg" alt="Zahnbehandlung" />
              </div>
              <div className="treatment-content">
                <h3>Zahnbehandlungen</h3>
                <p>Von der einfachen Zahnreinigung bis hin zu komplexen Implantaten – unsere Partnerkliniken bieten das gesamte Spektrum moderner Zahnmedizin.</p>
                <ul>
                  <li>Zahnimplantate</li>
                  <li>Kronen und Brücken</li>
                  <li>Veneers</li>
                  <li>Zahnaufhellung</li>
                  <li>Wurzelbehandlungen</li>
                </ul>
                <Link href="/health/dental">
                  <a className="btn btn-outline">{t('common.buttons.read_more')}</a>
                </Link>
              </div>
            </div>
            
            <div className="treatment-card">
              <div className="treatment-content">
                <h3>Haartransplantation</h3>
                <p>Die Türkei ist weltweit führend im Bereich der Haartransplantation. Unsere Partnerkliniken verwenden modernste Techniken für natürliche Ergebnisse.</p>
                <ul>
                  <li>FUE-Methode (Follicular Unit Extraction)</li>
                  <li>DHI-Methode (Direct Hair Implantation)</li>
                  <li>Sapphire FUE</li>
                  <li>Barttransplantation</li>
                  <li>Augenbrauentransplantation</li>
                </ul>
                <Link href="/health/hair-transplant">
                  <a className="btn btn-outline">{t('common.buttons.read_more')}</a>
                </Link>
              </div>
              <div className="treatment-image">
                <img src="/images/hair-transplant.jpg" alt="Haartransplantation" />
              </div>
            </div>
            
            <div className="treatment-card">
              <div className="treatment-image">
                <img src="/images/eye-surgery.jpg" alt="Augenoperation" />
              </div>
              <div className="treatment-content">
                <h3>Augenoperationen</h3>
                <p>Verbessern Sie Ihre Sehkraft mit modernsten Augenoperationen. Unsere Partnerkliniken bieten verschiedene Verfahren zur Korrektur von Fehlsichtigkeiten.</p>
                <ul>
                  <li>LASIK</li>
                  <li>LASEK</li>
                  <li>PRK</li>
                  <li>ReLEx SMILE</li>
                  <li>Katarakt-Operationen</li>
                </ul>
                <Link href="/health/eye-surgery">
                  <a className="btn btn-outline">{t('common.buttons.read_more')}</a>
                </Link>
              </div>
            </div>
            
            <div className="treatment-card">
              <div className="treatment-content">
                <h3>Schönheitschirurgie</h3>
                <p>Unsere Partnerkliniken bieten ein breites Spektrum an ästhetischen Eingriffen, durchgeführt von erfahrenen Fachärzten für plastische Chirurgie.</p>
                <ul>
                  <li>Brustvergrößerung und -verkleinerung</li>
                  <li>Fettabsaugung</li>
                  <li>Bauchstraffung</li>
                  <li>Facelift</li>
                  <li>Nasenkorrektur</li>
                  <li>Lidstraffung</li>
                </ul>
                <Link href="/health/cosmetic-surgery">
                  <a className="btn btn-outline">{t('common.buttons.read_more')}</a>
                </Link>
              </div>
              <div className="treatment-image">
                <img src="/images/cosmetic-surgery.jpg" alt="Schönheitschirurgie" />
              </div>
            </div>
          </div>
        </section>

        <section className="process">
          <div className="container">
            <h2>Unser Prozess</h2>
            
            <div className="process-steps">
              <div className="step">
                <div className="step-number">1</div>
                <h3>Beratung</h3>
                <p>Kostenlose Erstberatung und Analyse Ihrer Bedürfnisse</p>
              </div>
              
              <div className="step">
                <div className="step-number">2</div>
                <h3>Planung</h3>
                <p>Auswahl der geeigneten Klinik und Erstellung eines individuellen Behandlungsplans</p>
              </div>
              
              <div className="step">
                <div className="step-number">3</div>
                <h3>Reiseorganisation</h3>
                <p>Buchung von Flügen, Unterkunft und Transfers</p>
              </div>
              
              <div className="step">
                <div className="step-number">4</div>
                <h3>Behandlung</h3>
                <p>Durchführung der Behandlung in einer unserer Partnerkliniken</p>
              </div>
              
              <div className="step">
                <div className="step-number">5</div>
                <h3>Nachsorge</h3>
                <p>Umfassende Nachsorge und Unterstützung nach Ihrer Rückkehr</p>
              </div>
            </div>
          </div>
        </section>

        <section className="clinics">
          <div className="container">
            <h2>Unsere Partnerkliniken</h2>
            
            <div className="clinic-grid">
              <div className="clinic-card">
                <div className="clinic-image">
                  <img src="/images/clinic-1.jpg" alt="Istanbul Medical Center" />
                </div>
                <h3>Istanbul Medical Center</h3>
                <p>Moderne Klinik im Herzen Istanbuls, spezialisiert auf Zahnbehandlungen und Haartransplantationen.</p>
                <div className="clinic-features">
                  <span>JCI-akkreditiert</span>
                  <span>Deutschsprachiges Personal</span>
                </div>
              </div>
              
              <div className="clinic-card">
                <div className="clinic-image">
                  <img src="/images/clinic-2.jpg" alt="Antalya Health Resort" />
                </div>
                <h3>Antalya Health Resort</h3>
                <p>Luxuriöse Klinik in Antalya mit Fokus auf Schönheitschirurgie und Erholung.</p>
                <div className="clinic-features">
                  <span>5-Sterne-Unterkunft</span>
                  <span>Ganzheitliche Betreuung</span>
                </div>
              </div>
              
              <div className="clinic-card">
                <div className="clinic-image">
                  <img src="/images/clinic-3.jpg" alt="Izmir Eye Center" />
                </div>
                <h3>Izmir Eye Center</h3>
                <p>Spezialklinik für Augenoperationen mit modernster Technologie.</p>
                <div className="clinic-features">
                  <span>Modernste Laser-Technologie</span>
                  <span>Erfahrene Augenchirurgen</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="testimonials">
          <div className="container">
            <h2>Erfahrungsberichte</h2>
            
            <div className="testimonial-slider">
              <div className="testimonial">
                <div className="testimonial-content">
                  <p>"Ich war sehr zufrieden mit meiner Zahnbehandlung in Istanbul. Das Ergebnis ist fantastisch und der Preis war deutlich günstiger als in Deutschland."</p>
                </div>
                <div className="testimonial-author">
                  <img src="/images/testimonial-1.jpg" alt="Markus S." />
                  <div>
                    <h4>Markus S.</h4>
                    <p>Zahnimplantate, Berlin</p>
                  </div>
                </div>
              </div>
              
              <div className="testimonial">
                <div className="testimonial-content">
                  <p>"Die Haartransplantation hat mein Leben verändert. Das Team war professionell und einfühlsam, und das Ergebnis übertrifft meine Erwartungen."</p>
                </div>
                <div className="testimonial-author">
                  <img src="/images/testimonial-2.jpg" alt="Thomas K." />
                  <div>
                    <h4>Thomas K.</h4>
                    <p>Haartransplantation, München</p>
                  </div>
                </div>
              </div>
              
              <div className="testimonial">
                <div className="testimonial-content">
                  <p>"Nach meiner Augenoperation in Izmir kann ich endlich ohne Brille sehen. Die Betreuung durch Beautyontour war von Anfang bis Ende erstklassig."</p>
                </div>
                <div className="testimonial-author">
                  <img src="/images/testimonial-3.jpg" alt="Lisa M." />
                  <div>
                    <h4>Lisa M.</h4>
                    <p>LASIK-Operation, Hamburg</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="cta">
          <div className="container">
            <h2>Bereit für Ihre Behandlung?</h2>
            <p>Kontaktieren Sie uns für eine kostenlose Beratung und erfahren Sie mehr über unsere Angebote.</p>
            <div className="cta-buttons">
              <Link href="/contact">
                <a className="btn btn-primary">{t('common.buttons.contact_us')}</a>
              </Link>
              <Link href="/booking">
                <a className="btn btn-secondary">{t('common.buttons.book_now')}</a>
              </Link>
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
