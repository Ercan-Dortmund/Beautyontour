import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';

export default function Shop() {
  const { t } = useTranslation('common');

  return (
    <Layout>
      <Head>
        <title>Shop - Beautyontour</title>
        <meta name="description" content="Entdecken Sie unsere exklusiven Produkte und Dienstleistungen für Ihre Reise und Gesundheitsbehandlung." />
      </Head>

      <main>
        <section className="page-header">
          <div className="container">
            <h1>Shop</h1>
            <p>Entdecken Sie unsere exklusiven Produkte und Dienstleistungen</p>
          </div>
        </section>

        <section className="product-categories">
          <div className="container">
            <h2>Kategorien</h2>
            <div className="category-grid">
              <div className="category-card">
                <div className="category-image">
                  <img src="/images/category-travel.jpg" alt="Reisepakete" />
                </div>
                <h3>Reisepakete</h3>
                <p>Exklusive Reisepakete für Ihren Aufenthalt in der Türkei</p>
                <Link href="/shop/travel-packages">
                  <a className="btn btn-outline">{t('common.buttons.read_more')}</a>
                </Link>
              </div>
              
              <div className="category-card">
                <div className="category-image">
                  <img src="/images/category-health.jpg" alt="Gesundheitsbehandlungen" />
                </div>
                <h3>Gesundheitsbehandlungen</h3>
                <p>Hochwertige medizinische und ästhetische Behandlungen</p>
                <Link href="/shop/health-treatments">
                  <a className="btn btn-outline">{t('common.buttons.read_more')}</a>
                </Link>
              </div>
              
              <div className="category-card">
                <div className="category-image">
                  <img src="/images/category-beauty.jpg" alt="Beauty-Produkte" />
                </div>
                <h3>Beauty-Produkte</h3>
                <p>Exklusive Kosmetik- und Pflegeprodukte</p>
                <Link href="/shop/beauty-products">
                  <a className="btn btn-outline">{t('common.buttons.read_more')}</a>
                </Link>
              </div>
              
              <div className="category-card">
                <div className="category-image">
                  <img src="/images/category-souvenirs.jpg" alt="Souvenirs" />
                </div>
                <h3>Souvenirs</h3>
                <p>Einzigartige Erinnerungsstücke aus der Türkei</p>
                <Link href="/shop/souvenirs">
                  <a className="btn btn-outline">{t('common.buttons.read_more')}</a>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="featured-products">
          <div className="container">
            <h2>Empfohlene Produkte</h2>
            <div className="product-grid">
              <div className="product-card">
                <div className="product-image">
                  <img src="/images/product-istanbul-package.jpg" alt="Istanbul Luxuspaket" />
                </div>
                <h3>Istanbul Luxuspaket</h3>
                <p className="product-description">7 Tage im 5-Sterne-Hotel mit exklusiven Touren</p>
                <p className="product-price">€1.999</p>
                <button className="btn btn-primary">{t('common.buttons.add_to_cart')}</button>
              </div>
              
              <div className="product-card">
                <div className="product-image">
                  <img src="/images/product-dental-treatment.jpg" alt="Premium Zahnbehandlung" />
                </div>
                <h3>Premium Zahnbehandlung</h3>
                <p className="product-description">Komplette Zahnreinigung und Bleaching</p>
                <p className="product-price">€499</p>
                <button className="btn btn-primary">{t('common.buttons.add_to_cart')}</button>
              </div>
              
              <div className="product-card">
                <div className="product-image">
                  <img src="/images/product-turkish-oil.jpg" alt="Türkisches Rosenöl" />
                </div>
                <h3>Türkisches Rosenöl</h3>
                <p className="product-description">100% natürliches ätherisches Öl</p>
                <p className="product-price">€39</p>
                <button className="btn btn-primary">{t('common.buttons.add_to_cart')}</button>
              </div>
              
              <div className="product-card">
                <div className="product-image">
                  <img src="/images/product-turkish-bath.jpg" alt="Traditionelles Hamam-Set" />
                </div>
                <h3>Traditionelles Hamam-Set</h3>
                <p className="product-description">Handtuch, Seife und Peeling-Handschuh</p>
                <p className="product-price">€59</p>
                <button className="btn btn-primary">{t('common.buttons.add_to_cart')}</button>
              </div>
            </div>
          </div>
        </section>

        <section className="special-offers">
          <div className="container">
            <h2>Sonderangebote</h2>
            <div className="offers-grid">
              <div className="offer-card">
                <div className="offer-content">
                  <h3>10% Rabatt auf alle Reisepakete</h3>
                  <p>Gültig bis zum 30. Juni 2025</p>
                  <button className="btn btn-secondary">Code: TRAVEL10</button>
                </div>
              </div>
              
              <div className="offer-card">
                <div className="offer-content">
                  <h3>Gratis Flughafentransfer</h3>
                  <p>Bei Buchung einer Gesundheitsbehandlung</p>
                  <button className="btn btn-secondary">Code: FREETRANSFER</button>
                </div>
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
