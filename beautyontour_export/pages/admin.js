import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import Layout from '../components/Layout';

export default function Admin() {
  const { t } = useTranslation('common');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginError, setLoginError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // In einer echten Anwendung würde hier eine API-Anfrage zur Authentifizierung erfolgen
    const username = e.target.username.value;
    const password = e.target.password.value;
    
    if (username === 'admin' && password === 'admin123') {
      setIsLoggedIn(true);
      setLoginError('');
    } else {
      setLoginError('Ungültiger Benutzername oder Passwort');
    }
  };

  return (
    <Layout>
      <Head>
        <title>Admin - Beautyontour</title>
        <meta name="description" content="Administrationsbereich für Beautyontour" />
      </Head>

      <main>
        <section className="page-header">
          <div className="container">
            <h1>Admin-Bereich</h1>
            <p>Verwaltung der Beautyontour-Website</p>
          </div>
        </section>

        {!isLoggedIn ? (
          <section className="login-section">
            <div className="container">
              <div className="login-form">
                <h2>Anmelden</h2>
                {loginError && <div className="error-message">{loginError}</div>}
                <form onSubmit={handleLogin}>
                  <div className="form-group">
                    <label htmlFor="username">Benutzername</label>
                    <input type="text" id="username" name="username" required />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="password">Passwort</label>
                    <input type="password" id="password" name="password" required />
                  </div>
                  
                  <button type="submit" className="btn btn-primary">Anmelden</button>
                </form>
              </div>
            </div>
          </section>
        ) : (
          <>
            <section className="dashboard-section">
              <div className="container">
                <div className="dashboard-grid">
                  <div className="dashboard-card">
                    <h3>Inhalte</h3>
                    <ul className="dashboard-menu">
                      <li>
                        <Link href="/admin/pages">
                          <a>Seiten verwalten</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/admin/editor">
                          <a>Seiteneditor</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/admin/media">
                          <a>Medienbibliothek</a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="dashboard-card">
                    <h3>Shop</h3>
                    <ul className="dashboard-menu">
                      <li>
                        <Link href="/admin/products">
                          <a>Produkte</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/admin/categories">
                          <a>Kategorien</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/admin/orders">
                          <a>Bestellungen</a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="dashboard-card">
                    <h3>Buchungen</h3>
                    <ul className="dashboard-menu">
                      <li>
                        <Link href="/admin/bookings">
                          <a>Buchungsanfragen</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/admin/calendar">
                          <a>Kalender</a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="dashboard-card">
                    <h3>Gesundheit</h3>
                    <ul className="dashboard-menu">
                      <li>
                        <Link href="/admin/health-inquiries">
                          <a>Gesundheitsanfragen</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/admin/clinics">
                          <a>Kliniken</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/admin/treatments">
                          <a>Behandlungen</a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="dashboard-card">
                    <h3>Benutzer</h3>
                    <ul className="dashboard-menu">
                      <li>
                        <Link href="/admin/users">
                          <a>Benutzer verwalten</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/admin/roles">
                          <a>Rollen und Berechtigungen</a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="dashboard-card">
                    <h3>Einstellungen</h3>
                    <ul className="dashboard-menu">
                      <li>
                        <Link href="/admin/settings">
                          <a>Allgemeine Einstellungen</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/admin/payment-links">
                          <a>Zahlungslinks</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/admin/languages">
                          <a>Sprachen</a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
            
            <section className="stats-section">
              <div className="container">
                <h2>Statistiken</h2>
                <div className="stats-grid">
                  <div className="stat-card">
                    <h3>Besucher</h3>
                    <div className="stat-value">1,234</div>
                    <div className="stat-label">Letzte 30 Tage</div>
                  </div>
                  
                  <div className="stat-card">
                    <h3>Bestellungen</h3>
                    <div className="stat-value">42</div>
                    <div className="stat-label">Letzte 30 Tage</div>
                  </div>
                  
                  <div className="stat-card">
                    <h3>Buchungen</h3>
                    <div className="stat-value">18</div>
                    <div className="stat-label">Letzte 30 Tage</div>
                  </div>
                  
                  <div className="stat-card">
                    <h3>Anfragen</h3>
                    <div className="stat-value">56</div>
                    <div className="stat-label">Letzte 30 Tage</div>
                  </div>
                </div>
              </div>
            </section>
            
            <section className="recent-activity">
              <div className="container">
                <h2>Neueste Aktivitäten</h2>
                <div className="activity-list">
                  <div className="activity-item">
                    <div className="activity-time">Heute, 14:32</div>
                    <div className="activity-content">
                      <strong>Neue Buchungsanfrage:</strong> Luxusreise nach Istanbul (7 Tage)
                    </div>
                  </div>
                  
                  <div className="activity-item">
                    <div className="activity-time">Heute, 11:15</div>
                    <div className="activity-content">
                      <strong>Neue Bestellung:</strong> Türkisches Rosenöl (2x)
                    </div>
                  </div>
                  
                  <div className="activity-item">
                    <div className="activity-time">Gestern, 16:48</div>
                    <div className="activity-content">
                      <strong>Neue Gesundheitsanfrage:</strong> Zahnbehandlung in Antalya
                    </div>
                  </div>
                  
                  <div className="activity-item">
                    <div className="activity-time">Gestern, 09:23</div>
                    <div className="activity-content">
                      <strong>Seitenbearbeitung:</strong> Startseite aktualisiert
                    </div>
                  </div>
                  
                  <div className="activity-item">
                    <div className="activity-time">19.05.2025, 15:10</div>
                    <div className="activity-content">
                      <strong>Neuer Benutzer:</strong> Maria Schmidt hat sich registriert
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </>
        )}
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
