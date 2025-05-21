import React, { useState } from 'react';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Layout from '../components/Layout';

const Editor = () => {
  const { t } = useTranslation(['common', 'editor']);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginData, setLoginData] = useState({
    username: '',
    password: ''
  });
  const [activeTab, setActiveTab] = useState('pages');
  const [activePage, setActivePage] = useState(null);
  const [editMode, setEditMode] = useState(false);
  
  // Beispiel-Daten für Seiten
  const [pages, setPages] = useState([
    { 
      id: 1, 
      title: 'Startseite', 
      slug: 'home', 
      lastEdited: '15.05.2025',
      content: `
        <h1>Willkommen bei Beauty on Tour</h1>
        <h2>Ihr Partner für exklusive Reisen und Gesundheitstourismus</h2>
        
        <p>Beauty on Tour bietet Ihnen maßgeschneiderte Luxusreisen und hochwertige Gesundheitsbehandlungen in der Türkei. Mit unserem umfassenden Service erleben Sie einen sorgenfreien Aufenthalt von Anfang bis Ende.</p>
        
        <h3>Unsere Dienstleistungen</h3>
        <ul>
          <li>Luxusreisen an die schönsten Orte der Türkei</li>
          <li>Zahnbehandlungen in erstklassigen Kliniken</li>
          <li>Haartransplantationen mit modernsten Techniken</li>
          <li>Laser Augenoperationen durch erfahrene Spezialisten</li>
          <li>Ästhetische Chirurgie mit höchsten Qualitätsstandards</li>
        </ul>
      `
    },
    { 
      id: 2, 
      title: 'Über uns', 
      slug: 'about', 
      lastEdited: '10.05.2025',
      content: `
        <h1>Über Beauty on Tour</h1>
        <h2>Unsere Geschichte und Mission</h2>
        
        <p>Beauty on Tour wurde mit der Vision gegründet, erstklassige Reise- und Gesundheitsdienstleistungen zu kombinieren und Kunden aus Europa ein unvergessliches Erlebnis in der Türkei zu bieten.</p>
        
        <p>Unser erfahrenes Team besteht aus Reiseexperten, medizinischen Beratern und Dolmetschern, die Sie während Ihres gesamten Aufenthalts betreuen und für ein sorgenfreies Erlebnis sorgen.</p>
        
        <h3>Unsere Werte</h3>
        <ul>
          <li>Qualität: Wir arbeiten nur mit den besten Kliniken und Hotels zusammen</li>
          <li>Transparenz: Klare Kommunikation und keine versteckten Kosten</li>
          <li>Persönliche Betreuung: Individuelle Beratung und 24/7 Erreichbarkeit</li>
          <li>Nachhaltigkeit: Verantwortungsvoller Umgang mit Ressourcen</li>
        </ul>
      `
    },
    { 
      id: 3, 
      title: 'Datenschutz', 
      slug: 'privacy', 
      lastEdited: '05.05.2025',
      content: `
        <h1>Datenschutzerklärung</h1>
        
        <p>Der Schutz Ihrer persönlichen Daten ist uns ein wichtiges Anliegen. In dieser Datenschutzerklärung informieren wir Sie über die Erhebung, Verarbeitung und Nutzung Ihrer Daten bei der Nutzung unserer Webseite.</p>
        
        <h2>Verantwortliche Stelle</h2>
        <p>Verantwortlich für die Erhebung, Verarbeitung und Nutzung Ihrer personenbezogenen Daten im Sinne der Datenschutz-Grundverordnung (DSGVO) ist Beauty on Tour.</p>
        
        <h2>Erhebung und Speicherung personenbezogener Daten</h2>
        <p>Wenn Sie unsere Webseite besuchen, erheben wir folgende Daten, die für uns technisch erforderlich sind, um Ihnen die Webseite anzuzeigen und die Stabilität und Sicherheit zu gewährleisten:</p>
        <ul>
          <li>IP-Adresse</li>
          <li>Datum und Uhrzeit der Anfrage</li>
          <li>Zeitzonendifferenz zur Greenwich Mean Time (GMT)</li>
          <li>Inhalt der Anforderung (konkrete Seite)</li>
          <li>Zugriffsstatus/HTTP-Statuscode</li>
          <li>Jeweils übertragene Datenmenge</li>
          <li>Webseite, von der die Anforderung kommt</li>
          <li>Browser</li>
          <li>Betriebssystem und dessen Oberfläche</li>
          <li>Sprache und Version der Browsersoftware</li>
        </ul>
      `
    },
    { 
      id: 4, 
      title: 'AGB', 
      slug: 'terms', 
      lastEdited: '05.05.2025',
      content: `
        <h1>Allgemeine Geschäftsbedingungen</h1>
        
        <h2>1. Geltungsbereich</h2>
        <p>Diese Allgemeinen Geschäftsbedingungen gelten für alle Verträge zwischen Beauty on Tour und unseren Kunden bezüglich unserer Dienstleistungen und Produkte.</p>
        
        <h2>2. Vertragsschluss</h2>
        <p>Der Vertrag kommt durch die Annahme der Buchung oder Bestellung des Kunden durch Beauty on Tour zustande. Die Annahme erfolgt durch eine Buchungs- oder Bestellbestätigung per E-Mail.</p>
        
        <h2>3. Leistungen</h2>
        <p>Der Umfang der vertraglichen Leistungen ergibt sich aus der Leistungsbeschreibung in unseren Angeboten und der Buchungs- oder Bestellbestätigung.</p>
        
        <h2>4. Zahlungsbedingungen</h2>
        <p>Die Zahlung erfolgt per Überweisung, Kreditkarte oder über unsere Zahlungslinks. Bei Reisebuchungen ist eine Anzahlung von 20% des Reisepreises bei Buchung fällig, der Restbetrag 30 Tage vor Reisebeginn.</p>
        
        <h2>5. Stornierung und Umbuchung</h2>
        <p>Stornierungen und Umbuchungen müssen schriftlich erfolgen. Es gelten folgende Stornierungsgebühren:</p>
        <ul>
          <li>Bis 30 Tage vor Reisebeginn: 20% des Reisepreises</li>
          <li>29-15 Tage vor Reisebeginn: 40% des Reisepreises</li>
          <li>14-7 Tage vor Reisebeginn: 60% des Reisepreises</li>
          <li>Ab 6 Tage vor Reisebeginn: 80% des Reisepreises</li>
        </ul>
      `
    },
    { 
      id: 5, 
      title: 'Impressum', 
      slug: 'imprint', 
      lastEdited: '05.05.2025',
      content: `
        <h1>Impressum</h1>
        
        <h2>Angaben gemäß § 5 TMG</h2>
        <p>Beauty on Tour<br>
        Musterstraße 123<br>
        12345 Musterstadt<br>
        Deutschland</p>
        
        <h2>Kontakt</h2>
        <p>Telefon: +49 123 456789<br>
        E-Mail: info@beautyontour.com</p>
        
        <h2>Umsatzsteuer-ID</h2>
        <p>Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br>
        DE123456789</p>
        
        <h2>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
        <p>Max Mustermann<br>
        Musterstraße 123<br>
        12345 Musterstadt<br>
        Deutschland</p>
      `
    }
  ]);

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Simuliere Login-Prozess
    if (loginData.username === 'admin' && loginData.password === 'admin123') {
      setIsLoggedIn(true);
    } else {
      alert('Ungültige Anmeldedaten. Bitte versuchen Sie es erneut.');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setActiveTab('pages');
    setActivePage(null);
    setEditMode(false);
  };

  const handlePageSelect = (page) => {
    setActivePage(page);
    setEditMode(false);
  };

  const handleEditToggle = () => {
    setEditMode(!editMode);
  };

  const handleContentChange = (e) => {
    setActivePage({
      ...activePage,
      content: e.target.value
    });
  };

  const handleSavePage = () => {
    const updatedPages = pages.map(page => 
      page.id === activePage.id ? 
        { 
          ...activePage, 
          lastEdited: new Date().toLocaleDateString('de-DE')
        } : page
    );
    
    setPages(updatedPages);
    setEditMode(false);
    alert('Seite erfolgreich gespeichert!');
  };

  const handleCreateNewPage = () => {
    const newPage = {
      id: pages.length + 1,
      title: 'Neue Seite',
      slug: `new-page-${pages.length + 1}`,
      lastEdited: new Date().toLocaleDateString('de-DE'),
      content: '<h1>Neue Seite</h1>\n<p>Fügen Sie hier Ihren Inhalt ein.</p>'
    };
    
    setPages([...pages, newPage]);
    setActivePage(newPage);
    setEditMode(true);
  };

  const handleDeletePage = (pageId) => {
    if (window.confirm('Möchten Sie diese Seite wirklich löschen?')) {
      const updatedPages = pages.filter(page => page.id !== pageId);
      setPages(updatedPages);
      
      if (activePage && activePage.id === pageId) {
        setActivePage(null);
        setEditMode(false);
      }
    }
  };

  return (
    <Layout
      title={`Seiteneditor - ${t('common:beautyontour')}`}
      description="Bearbeiten Sie die Inhalte Ihrer Webseite"
    >
      <section className="editor-section">
        <div className="container">
          {!isLoggedIn ? (
            <div className="login-container">
              <div className="login-form">
                <h1>Editor Login</h1>
                <form onSubmit={handleLoginSubmit}>
                  <div className="form-group">
                    <label htmlFor="username">Benutzername</label>
                    <input
                      type="text"
                      id="username"
                      name="username"
                      value={loginData.username}
                      onChange={handleLoginChange}
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="password">Passwort</label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      value={loginData.password}
                      onChange={handleLoginChange}
                      required
                    />
                  </div>
                  
                  <button type="submit" className="btn btn-primary">
                    Anmelden
                  </button>
                </form>
              </div>
            </div>
          ) : (
            <div className="editor-dashboard">
              <div className="editor-header">
                <h1>Seiteneditor</h1>
                <button className="btn btn-secondary" onClick={handleLogout}>
                  Abmelden
                </button>
              </div>
              
              <div className="editor-content">
                <div className="editor-sidebar">
                  <div className="sidebar-header">
                    <h2>Seiten</h2>
                    <button 
                      className="btn btn-primary btn-sm"
                      onClick={handleCreateNewPage}
                    >
                      Neue Seite
                    </button>
                  </div>
                  
                  <div className="pages-list">
                    {pages.map(page => (
                      <div 
                        key={page.id} 
                        className={`page-item ${activePage && activePage.id === page.id ? 'active' : ''}`}
                        onClick={() => handlePageSelect(page)}
                      >
                        <div className="page-info">
                          <h3>{page.title}</h3>
                          <span className="page-slug">/{page.slug}</span>
                        </div>
                        <div className="page-actions">
                          {page.slug !== 'home' && (
                            <button 
                              className="action-btn delete"
                              onClick={(e) => {
                                e.stopPropagation();
                                handleDeletePage(page.id);
                              }}
                            >
                              Löschen
                            </button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="editor-main">
                  {activePage ? (
                    <>
                      <div className="main-header">
                        <div className="page-title">
                          <h2>{activePage.title}</h2>
                          <span className="page-meta">
                            Zuletzt bearbeitet: {activePage.lastEdited}
                          </span>
                        </div>
                        <div className="main-actions">
                          {editMode ? (
                            <>
                              <button 
                                className="btn btn-primary"
                                onClick={handleSavePage}
                              >
                                Speichern
                              </button>
                              <button 
                                className="btn btn-secondary"
                                onClick={handleEditToggle}
                              >
                                Abbrechen
                              </button>
                            </>
                          ) : (
                            <>
                              <button 
                                className="btn btn-primary"
                                onClick={handleEditToggle}
                              >
                                Bearbeiten
                              </button>
                              <a 
                                href={`/${activePage.slug}`} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="btn btn-secondary"
                              >
                                Ansehen
                              </a>
                            </>
                          )}
                        </div>
                      </div>
                      
                      <div className="content-area">
                        {editMode ? (
                          <div className="editor-textarea-container">
                            <textarea
                              className="editor-textarea"
                              value={activePage.content}
                              onChange={handleContentChange}
                            ></textarea>
                          </div>
                        ) : (
                          <div 
                            className="content-preview"
                            dangerouslySetInnerHTML={{ __html: activePage.content }}
                          ></div>
                        )}
                      </div>
                    </>
                  ) : (
                    <div className="no-page-selected">
                      <h2>Keine Seite ausgewählt</h2>
                      <p>Bitte wählen Sie eine Seite aus der Liste aus oder erstellen Sie eine neue Seite.</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <style jsx>{`
        .editor-section {
          padding: 80px 0;
          min-height: calc(100vh - 80px);
          background-color: var(--primary-color);
        }
        
        .login-container {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: calc(100vh - 300px);
        }
        
        .login-form {
          background-color: var(--background-light);
          padding: 40px;
          border-radius: 10px;
          box-shadow: var(--box-shadow);
          width: 100%;
          max-width: 400px;
        }
        
        .login-form h1 {
          font-size: 2rem;
          color: var(--accent-color);
          margin-bottom: 30px;
          text-align: center;
        }
        
        .form-group {
          margin-bottom: 20px;
        }
        
        .form-group label {
          display: block;
          margin-bottom: 8px;
          font-weight: 500;
          color: var(--text-color);
        }
        
        .form-group input {
          width: 100%;
          padding: 12px;
          background-color: var(--primary-color);
          border: 1px solid var(--border-color);
          border-radius: 5px;
          color: var(--text-color);
          font-size: 1rem;
          transition: var(--transition);
        }
        
        .form-group input:focus {
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
        
        .btn-sm {
          padding: 8px 15px;
          font-size: 0.8rem;
        }
        
        .btn-primary {
          background-color: var(--accent-color);
          color: var(--primary-color);
        }
        
        .btn-primary:hover {
          background-color: #e69100;
        }
        
        .btn-secondary {
          background-color: transparent;
          color: var(--text-color);
          border: 2px solid var(--accent-color);
        }
        
        .btn-secondary:hover {
          background-color: var(--accent-color);
          color: var(--primary-color);
        }
        
        .editor-dashboard {
          background-color: var(--background-light);
          border-radius: 10px;
          box-shadow: var(--box-shadow);
          overflow: hidden;
          height: calc(100vh - 200px);
          display: flex;
          flex-direction: column;
        }
        
        .editor-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 30px;
          background-color: var(--background-dark);
          border-bottom: 1px solid var(--border-color);
        }
        
        .editor-header h1 {
          font-size: 1.8rem;
          color: var(--accent-color);
          margin: 0;
        }
        
        .editor-content {
          display: flex;
          flex: 1;
          overflow: hidden;
        }
        
        .editor-sidebar {
          width: 300px;
          background-color: var(--background-dark);
          border-right: 1px solid var(--border-color);
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }
        
        .sidebar-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px;
          border-bottom: 1px solid var(--border-color);
        }
        
        .sidebar-header h2 {
          font-size: 1.2rem;
          color: var(--accent-color);
          margin: 0;
        }
        
        .pages-list {
          flex: 1;
          overflow-y: auto;
          padding: 10px;
        }
        
        .page-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 15px;
          border-radius: 5px;
          margin-bottom: 10px;
          cursor: pointer;
          transition: var(--transition);
          background-color: var(--primary-color);
        }
        
        .page-item:hover {
          background-color: rgba(255, 255, 255, 0.05);
        }
        
        .page-item.active {
          background-color: rgba(255, 165, 0, 0.1);
          border-left: 3px solid var(--accent-color);
        }
        
        .page-info {
          flex: 1;
        }
        
        .page-info h3 {
          font-size: 1rem;
          color: var(--text-color);
          margin: 0 0 5px 0;
        }
        
        .page-slug {
          font-size: 0.8rem;
          color: var(--text-secondary);
        }
        
        .page-actions {
          display: flex;
          gap: 5px;
        }
        
        .action-btn {
          padding: 5px 10px;
          border: none;
          border-radius: 4px;
          font-size: 0.8rem;
          font-weight: 600;
          cursor: pointer;
          transition: var(--transition);
        }
        
        .action-btn.delete {
          background-color: rgba(244, 67, 54, 0.1);
          color: var(--error-color);
          border: 1px solid var(--error-color);
        }
        
        .action-btn.delete:hover {
          background-color: rgba(244, 67, 54, 0.2);
        }
        
        .editor-main {
          flex: 1;
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }
        
        .main-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px;
          border-bottom: 1px solid var(--border-color);
        }
        
        .page-title h2 {
          font-size: 1.5rem;
          color: var(--accent-color);
          margin: 0 0 5px 0;
        }
        
        .page-meta {
          font-size: 0.8rem;
          color: var(--text-secondary);
        }
        
        .main-actions {
          display: flex;
          gap: 10px;
        }
        
        .content-area {
          flex: 1;
          overflow-y: auto;
          padding: 20px;
        }
        
        .content-preview {
          line-height: 1.6;
        }
        
        .content-preview h1 {
          font-size: 2.5rem;
          color: var(--accent-color);
          margin-bottom: 20px;
        }
        
        .content-preview h2 {
          font-size: 2rem;
          color: var(--text-color);
          margin: 30px 0 15px;
        }
        
        .content-preview h3 {
          font-size: 1.5rem;
          color: var(--accent-color);
          margin: 25px 0 15px;
        }
        
        .content-preview p {
          margin-bottom: 15px;
        }
        
        .content-preview ul {
          margin-bottom: 15px;
          padding-left: 20px;
        }
        
        .content-preview li {
          margin-bottom: 8px;
        }
        
        .editor-textarea-container {
          height: 100%;
        }
        
        .editor-textarea {
          width: 100%;
          height: 100%;
          padding: 15px;
          background-color: var(--primary-color);
          border: 1px solid var(--border-color);
          border-radius: 5px;
          color: var(--text-color);
          font-size: 1rem;
          line-height: 1.6;
          font-family: monospace;
          resize: none;
        }
        
        .editor-textarea:focus {
          border-color: var(--accent-color);
          outline: none;
        }
        
        .no-page-selected {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: 100%;
          text-align: center;
          padding: 20px;
        }
        
        .no-page-selected h2 {
          font-size: 1.8rem;
          color: var(--accent-color);
          margin-bottom: 15px;
        }
        
        .no-page-selected p {
          color: var(--text-secondary);
          max-width: 500px;
        }
        
        @media (max-width: 992px) {
          .editor-content {
            flex-direction: column;
          }
          
          .editor-sidebar {
            width: 100%;
            height: 300px;
            border-right: none;
            border-bottom: 1px solid var(--border-color);
          }
          
          .editor-dashboard {
            height: auto;
          }
        }
        
        @media (max-width: 768px) {
          .editor-header,
          .main-header {
            flex-direction: column;
            gap: 15px;
            text-align: center;
          }
          
          .main-actions {
            width: 100%;
            justify-content: center;
          }
          
          .btn {
            width: 100%;
          }
        }
      `}</style>
    </Layout>
  );
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'editor'])),
    },
  };
}

export default Editor;
