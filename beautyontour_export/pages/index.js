import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';

export default function Home() {
  const { t } = useTranslation('common');

  return (
    <Layout>
      <Head>
        <title>Beautyontour - Luxusreisen & Gesundheitstourismus</title>
        <meta name="description" content="Exklusive Luxusreisen und Gesundheitstourismus in die Türkei. Entdecken Sie maßgeschneiderte Reiseerlebnisse und hochwertige Gesundheitsbehandlungen." />
      </Head>

      <main>
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-content">
            <h1>Beautyontour</h1>
            <p className="subtitle">Exklusive Luxusreisen & Gesundheitstourismus</p>
            <div className="cta-buttons">
              <Link href="/booking">
                <a className="btn btn-primary">{t('common.buttons.book_now')}</a>
              </Link>
              <Link href="/contact">
                <a className="btn btn-secondary">{t('common.buttons.contact_us')}</a>
              </Link>
            </div>
          </div>
        </section>

        {/* Luxury Travel Section */}
        <section className="luxury-travel">
          <div className="container">
            <h2>Luxusreisen in die Türkei</h2>
            <p>Erleben Sie die Türkei von ihrer exklusivsten Seite. Maßgeschneiderte Reiseerlebnisse, luxuriöse Unterkünfte und persönlicher Service.</p>
            
            <div className="features">
              <div className="feature">
                <h3>Exklusive Resorts</h3>
                <p>Handverlesene 5-Sterne-Resorts an den schönsten Orten der Türkei.</p>
              </div>
              <div className="feature">
                <h3>Private Touren</h3>
                <p>Entdecken Sie historische Stätten und Naturwunder mit Ihrem persönlichen Guide.</p>
              </div>
              <div className="feature">
                <h3>Kulinarische Erlebnisse</h3>
                <p>Genießen Sie die authentische türkische Küche in ausgewählten Restaurants.</p>
              </div>
            </div>
            
            <Link href="/shop">
              <a className="btn btn-outline">{t('common.buttons.read_more')}</a>
            </Link>
          </div>
        </section>

        {/* Health Tourism Section */}
        <section className="health-tourism">
          <div className="container">
            <h2>Gesundheitstourismus</h2>
            <p>Kombinieren Sie Ihre Reise mit hochwertigen medizinischen Behandlungen. Wir bieten Ihnen Zugang zu den besten Kliniken und Spezialisten der Türkei.</p>
            
            <div className="treatments">
              <div className="treatment">
                <h3>Zahnbehandlungen</h3>
                <p>Hochwertige Zahnbehandlungen zu attraktiven Preisen.</p>
              </div>
              <div className="treatment">
                <h3>Haartransplantation</h3>
                <p>Modernste Techniken für natürliche Ergebnisse.</p>
              </div>
              <div className="treatment">
                <h3>Schönheitschirurgie</h3>
                <p>Ästhetische Eingriffe von renommierten Spezialisten.</p>
              </div>
              <div className="treatment">
                <h3>Augenoperationen</h3>
                <p>Laserbehandlungen und andere ophthalmologische Eingriffe.</p>
              </div>
            </div>
            
            <Link href="/health">
              <a className="btn btn-outline">{t('common.buttons.read_more')}</a>
            </Link>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="testimonials">
          <div className="container">
            <h2>Was unsere Kunden sagen</h2>
            
            <div className="testimonial-slider">
              <div className="testimonial">
                <p>"Meine Reise mit Beautyontour war ein unvergessliches Erlebnis. Die Kombination aus Luxusurlaub und Zahnbehandlung war perfekt organisiert."</p>
                <div className="author">- Maria S., Deutschland</div>
              </div>
              <div className="testimonial">
                <p>"Die Betreuung vor, während und nach meiner Haartransplantation war erstklassig. Ich kann Beautyontour nur empfehlen!"</p>
                <div className="author">- Thomas K., Österreich</div>
              </div>
              <div className="testimonial">
                <p>"Wunderschöne Unterkünfte, exzellenter Service und eine perfekte Organisation. Mein Aufenthalt in Istanbul war traumhaft."</p>
                <div className="author">- Sophie M., Schweiz</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta">
          <div className="container">
            <h2>Bereit für Ihr nächstes Abenteuer?</h2>
            <p>Kontaktieren Sie uns noch heute und lassen Sie uns Ihre perfekte Reise planen.</p>
            <Link href="/contact">
              <a className="btn btn-primary">{t('common.buttons.contact_us')}</a>
            </Link>
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
