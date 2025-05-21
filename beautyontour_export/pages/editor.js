import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import Layout from '../components/Layout';

export default function Editor() {
  const { t } = useTranslation('common');
  const [pageContent, setPageContent] = useState('');
  const [pageName, setPageName] = useState('');
  const [previewMode, setPreviewMode] = useState(false);

  const handleSave = () => {
    // In einer echten Anwendung würde hier eine API-Anfrage zum Speichern des Inhalts erfolgen
    alert('Seite gespeichert!');
  };

  return (
    <Layout>
      <Head>
        <title>Seiteneditor - Beautyontour</title>
        <meta name="description" content="Bearbeiten Sie die Inhalte Ihrer Beautyontour-Website" />
      </Head>

      <main>
        <section className="page-header">
          <div className="container">
            <h1>Seiteneditor</h1>
            <p>Bearbeiten Sie die Inhalte Ihrer Website</p>
          </div>
        </section>

        <section className="editor-section">
          <div className="container">
            <div className="editor-controls">
              <div className="form-group">
                <label htmlFor="page-select">Seite auswählen</label>
                <select 
                  id="page-select" 
                  onChange={(e) => {
                    // In einer echten Anwendung würde hier der Inhalt der ausgewählten Seite geladen
                    setPageName(e.target.value);
                    setPageContent('Inhalt der Seite ' + e.target.value);
                  }}
                >
                  <option value="">Bitte wählen</option>
                  <option value="home">Startseite</option>
                  <option value="about">Über uns</option>
                  <option value="services">Dienstleistungen</option>
                  <option value="contact">Kontakt</option>
                  <option value="new">Neue Seite erstellen</option>
                </select>
              </div>

              {pageName === 'new' && (
                <div className="form-group">
                  <label htmlFor="new-page-name">Name der neuen Seite</label>
                  <input type="text" id="new-page-name" placeholder="z.B. team, faq, etc." />
                </div>
              )}

              <div className="editor-buttons">
                <button 
                  className={`btn ${previewMode ? 'btn-outline' : 'btn-primary'}`}
                  onClick={() => setPreviewMode(false)}
                >
                  Editor
                </button>
                <button 
                  className={`btn ${previewMode ? 'btn-primary' : 'btn-outline'}`}
                  onClick={() => setPreviewMode(true)}
                >
                  Vorschau
                </button>
                <button className="btn btn-success" onClick={handleSave}>
                  Speichern
                </button>
              </div>
            </div>

            {pageName && !previewMode && (
              <div className="editor-container">
                <div className="editor-toolbar">
                  <button title="Fett"><i className="fas fa-bold"></i></button>
                  <button title="Kursiv"><i className="fas fa-italic"></i></button>
                  <button title="Unterstrichen"><i className="fas fa-underline"></i></button>
                  <span className="separator"></span>
                  <button title="Überschrift 1"><i className="fas fa-heading"></i>1</button>
                  <button title="Überschrift 2"><i className="fas fa-heading"></i>2</button>
                  <button title="Überschrift 3"><i className="fas fa-heading"></i>3</button>
                  <span className="separator"></span>
                  <button title="Liste"><i className="fas fa-list-ul"></i></button>
                  <button title="Nummerierte Liste"><i className="fas fa-list-ol"></i></button>
                  <span className="separator"></span>
                  <button title="Link einfügen"><i className="fas fa-link"></i></button>
                  <button title="Bild einfügen"><i className="fas fa-image"></i></button>
                  <span className="separator"></span>
                  <button title="Rückgängig"><i className="fas fa-undo"></i></button>
                  <button title="Wiederholen"><i className="fas fa-redo"></i></button>
                </div>
                <textarea 
                  className="editor-textarea"
                  value={pageContent}
                  onChange={(e) => setPageContent(e.target.value)}
                  placeholder="Geben Sie hier den Inhalt der Seite ein..."
                  rows="20"
                ></textarea>
              </div>
            )}

            {pageName && previewMode && (
              <div className="preview-container">
                <h2>Vorschau</h2>
                <div className="preview-content">
                  {pageContent || <em>Kein Inhalt zum Anzeigen</em>}
                </div>
              </div>
            )}

            {!pageName && (
              <div className="editor-placeholder">
                <p>Bitte wählen Sie eine Seite zum Bearbeiten aus oder erstellen Sie eine neue Seite.</p>
              </div>
            )}
          </div>
        </section>

        <section className="editor-help">
          <div className="container">
            <h2>Hilfe zum Editor</h2>
            <div className="help-grid">
              <div className="help-item">
                <h3>Markdown-Syntax</h3>
                <p>Der Editor unterstützt Markdown-Syntax für die Formatierung:</p>
                <ul>
                  <li><code># Überschrift 1</code></li>
                  <li><code>## Überschrift 2</code></li>
                  <li><code>**Fett**</code></li>
                  <li><code>*Kursiv*</code></li>
                  <li><code>[Link](https://example.com)</code></li>
                  <li><code>![Bild](bild.jpg)</code></li>
                </ul>
              </div>
              
              <div className="help-item">
                <h3>Bilder einfügen</h3>
                <p>Um ein Bild einzufügen, können Sie:</p>
                <ol>
                  <li>Auf das Bild-Symbol in der Toolbar klicken</li>
                  <li>Ein Bild aus der Medienbibliothek auswählen</li>
                  <li>Oder die Markdown-Syntax verwenden</li>
                </ol>
              </div>
              
              <div className="help-item">
                <h3>Mehrsprachigkeit</h3>
                <p>Für mehrsprachige Inhalte:</p>
                <ol>
                  <li>Wählen Sie die Sprache oben rechts aus</li>
                  <li>Bearbeiten Sie den Inhalt in der gewählten Sprache</li>
                  <li>Speichern Sie die Änderungen</li>
                  <li>Wechseln Sie zur nächsten Sprache</li>
                </ol>
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
