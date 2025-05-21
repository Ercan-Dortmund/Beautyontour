import React, { useState } from 'react';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Layout from '../components/Layout';

const Admin = () => {
  const { t } = useTranslation(['common', 'admin']);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginData, setLoginData] = useState({
    username: '',
    password: ''
  });
  const [activeTab, setActiveTab] = useState('dashboard');

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
    setActiveTab('dashboard');
  };

  // Beispiel-Daten für das Dashboard
  const dashboardData = {
    bookings: [
      { id: 1, name: 'Maria Schmidt', service: 'Luxusreise', destination: 'Bodrum', date: '15.06.2025', status: 'Bestätigt' },
      { id: 2, name: 'Thomas Müller', service: 'Zahnbehandlung', destination: 'Istanbul', date: '22.06.2025', status: 'Ausstehend' },
      { id: 3, name: 'Julia Weber', service: 'Haartransplantation', destination: 'Istanbul', date: '10.07.2025', status: 'Bestätigt' }
    ],
    products: [
      { id: 1, name: 'Luxury Face Cream', price: '89.99 €', stock: 15, sales: 28 },
      { id: 2, name: 'Premium Hair Oil', price: '49.99 €', stock: 8, sales: 42 },
      { id: 3, name: 'Revitalizing Serum', price: '129.99 €', stock: 12, sales: 19 }
    ],
    messages: [
      { id: 1, name: 'Andreas Bauer', email: 'a.bauer@example.com', subject: 'Anfrage zu Wellness-Paketen', date: '18.05.2025', status: 'Ungelesen' },
      { id: 2, name: 'Sabine Klein', email: 's.klein@example.com', subject: 'Rückfrage zur Buchung', date: '17.05.2025', status: 'Beantwortet' }
    ]
  };

  // Beispiel-Daten für Produkte
  const products = [
    {
      id: 1,
      name: 'Luxury Face Cream',
      price: 89.99,
      description: 'Luxuriöse Gesichtscreme mit Anti-Aging-Effekt und natürlichen Inhaltsstoffen.',
      category: 'skincare',
      stock: 15,
      image: '/images/product-1.jpg'
    },
    {
      id: 2,
      name: 'Premium Hair Oil',
      price: 49.99,
      description: 'Hochwertiges Haaröl für glänzendes und gesundes Haar.',
      category: 'haircare',
      stock: 8,
      image: '/images/product-2.jpg'
    },
    {
      id: 3,
      name: 'Revitalizing Serum',
      price: 129.99,
      description: 'Revitalisierendes Serum für strahlende und jugendliche Haut.',
      category: 'skincare',
      stock: 12,
      image: '/images/product-3.jpg'
    }
  ];

  // Beispiel-Daten für Seiten
  const pages = [
    { id: 1, title: 'Startseite', slug: 'home', lastEdited: '15.05.2025' },
    { id: 2, title: 'Über uns', slug: 'about', lastEdited: '10.05.2025' },
    { id: 3, title: 'Datenschutz', slug: 'privacy', lastEdited: '05.05.2025' },
    { id: 4, title: 'AGB', slug: 'terms', lastEdited: '05.05.2025' },
    { id: 5, title: 'Impressum', slug: 'imprint', lastEdited: '05.05.2025' }
  ];

  // Beispiel-Daten für Zahlungslinks
  const paymentLinks = [
    { id: 1, name: 'Premium-Paket Istanbul', amount: '1299.99 €', expires: '30.06.2025', url: 'https://payment.example.com/link1' },
    { id: 2, name: 'Zahnbehandlung Komplett', amount: '2499.99 €', expires: '15.07.2025', url: 'https://payment.example.com/link2' },
    { id: 3, name: 'Wellness-Wochenende Bodrum', amount: '899.99 €', expires: '10.08.2025', url: 'https://payment.example.com/link3' }
  ];

  return (
    <Layout
      title={`Admin - ${t('common:beautyontour')}`}
      description="Administrationsbereich für Beautyontour"
    >
      <section className="admin-section">
        <div className="container">
          {!isLoggedIn ? (
            <div className="login-container">
              <div className="login-form">
                <h1>Admin Login</h1>
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
            <div className="admin-dashboard">
              <div className="admin-header">
                <h1>Admin Dashboard</h1>
                <button className="btn btn-secondary" onClick={handleLogout}>
                  Abmelden
                </button>
              </div>
              
              <div className="admin-navigation">
                <button 
                  className={`nav-button ${activeTab === 'dashboard' ? 'active' : ''}`}
                  onClick={() => setActiveTab('dashboard')}
                >
                  Dashboard
                </button>
                <button 
                  className={`nav-button ${activeTab === 'products' ? 'active' : ''}`}
                  onClick={() => setActiveTab('products')}
                >
                  Produkte
                </button>
                <button 
                  className={`nav-button ${activeTab === 'bookings' ? 'active' : ''}`}
                  onClick={() => setActiveTab('bookings')}
                >
                  Buchungen
                </button>
                <button 
                  className={`nav-button ${activeTab === 'messages' ? 'active' : ''}`}
                  onClick={() => setActiveTab('messages')}
                >
                  Nachrichten
                </button>
                <button 
                  className={`nav-button ${activeTab === 'editor' ? 'active' : ''}`}
                  onClick={() => setActiveTab('editor')}
                >
                  Seiteneditor
                </button>
                <button 
                  className={`nav-button ${activeTab === 'payments' ? 'active' : ''}`}
                  onClick={() => setActiveTab('payments')}
                >
                  Zahlungslinks
                </button>
              </div>
              
              <div className="admin-content">
                {activeTab === 'dashboard' && (
                  <div className="dashboard-content">
                    <div className="dashboard-widgets">
                      <div className="widget">
                        <h3>Neueste Buchungen</h3>
                        <div className="widget-content">
                          <table className="data-table">
                            <thead>
                              <tr>
                                <th>Name</th>
                                <th>Dienstleistung</th>
                                <th>Reiseziel</th>
                                <th>Datum</th>
                                <th>Status</th>
                              </tr>
                            </thead>
                            <tbody>
                              {dashboardData.bookings.map(booking => (
                                <tr key={booking.id}>
                                  <td>{booking.name}</td>
                                  <td>{booking.service}</td>
                                  <td>{booking.destination}</td>
                                  <td>{booking.date}</td>
                                  <td>
                                    <span className={`status-badge ${booking.status === 'Bestätigt' ? 'confirmed' : 'pending'}`}>
                                      {booking.status}
                                    </span>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                      
                      <div className="widget">
                        <h3>Produktübersicht</h3>
                        <div className="widget-content">
                          <table className="data-table">
                            <thead>
                              <tr>
                                <th>Produkt</th>
                                <th>Preis</th>
                                <th>Lagerbestand</th>
                                <th>Verkäufe</th>
                              </tr>
                            </thead>
                            <tbody>
                              {dashboardData.products.map(product => (
                                <tr key={product.id}>
                                  <td>{product.name}</td>
                                  <td>{product.price}</td>
                                  <td>{product.stock}</td>
                                  <td>{product.sales}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                      
                      <div className="widget">
                        <h3>Neueste Nachrichten</h3>
                        <div className="widget-content">
                          <table className="data-table">
                            <thead>
                              <tr>
                                <th>Name</th>
                                <th>E-Mail</th>
                                <th>Betreff</th>
                                <th>Datum</th>
                                <th>Status</th>
                              </tr>
                            </thead>
                            <tbody>
                              {dashboardData.messages.map(message => (
                                <tr key={message.id}>
                                  <td>{message.name}</td>
                                  <td>{message.email}</td>
                                  <td>{message.subject}</td>
                                  <td>{message.date}</td>
                                  <td>
                                    <span className={`status-badge ${message.status === 'Ungelesen' ? 'unread' : 'read'}`}>
                                      {message.status}
                                    </span>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                
                {activeTab === 'products' && (
                  <div className="products-content">
                    <div className="content-header">
                      <h2>Produktverwaltung</h2>
                      <button className="btn btn-primary">Neues Produkt</button>
                    </div>
                    
                    <div className="products-list">
                      <table className="data-table">
                        <thead>
                          <tr>
                            <th>Bild</th>
                            <th>Name</th>
                            <th>Preis</th>
                            <th>Kategorie</th>
                            <th>Lagerbestand</th>
                            <th>Aktionen</th>
                          </tr>
                        </thead>
                        <tbody>
                          {products.map(product => (
                            <tr key={product.id}>
                              <td>
                                <div className="product-image-small">
                                  <img src={product.image} alt={product.name} />
                                </div>
                              </td>
                              <td>{product.name}</td>
                              <td>{product.price.toFixed(2)} €</td>
                              <td>{product.category}</td>
                              <td>{product.stock}</td>
                              <td className="actions-cell">
                                <button className="action-btn edit">Bearbeiten</button>
                                <button className="action-btn delete">Löschen</button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
                
                {activeTab === 'editor' && (
                  <div className="editor-content">
                    <div className="content-header">
                      <h2>Seiteneditor</h2>
                      <button className="btn btn-primary">Neue Seite</button>
                    </div>
                    
                    <div className="pages-list">
                      <table className="data-table">
                        <thead>
                          <tr>
                            <th>Titel</th>
                            <th>Slug</th>
                            <th>Zuletzt bearbeitet</th>
                            <th>Aktionen</th>
                          </tr>
                        </thead>
                        <tbody>
                          {pages.map(page => (
                            <tr key={page.id}>
                              <td>{page.title}</td>
                              <td>{page.slug}</td>
                              <td>{page.lastEdited}</td>
                              <td className="actions-cell">
                                <button className="action-btn edit">Bearbeiten</button>
                                <button className="action-btn view">Ansehen</button>
                                {page.slug !== 'home' && (
                                  <button className="action-btn delete">Löschen</button>
                                )}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
                
                {activeTab === 'payments' && (
                  <div className="payments-content">
                    <div className="content-header">
                      <h2>Zahlungslinks</h2>
                      <button className="btn btn-primary">Neuer Zahlungslink</button>
                    </div>
                    
                    <div className="payments-list">
                      <table className="data-table">
                        <thead>
                          <tr>
                            <th>Name</th>
                            <th>Betrag</th>
                            <th>Gültig bis</th>
                            <th>Link</th>
                            <th>Aktionen</th>
                          </tr>
                        </thead>
                        <tbody>
                          {paymentLinks.map(link => (
                            <tr key={link.id}>
                              <td>{link.name}</td>
                              <td>{link.amount}</td>
                              <td>{link.expires}</td>
                              <td>
                                <a href={link.url} target="_blank" rel="noopener noreferrer" className="payment-link">
                                  Link öffnen
                                </a>
                              </td>
                              <td className="actions-cell">
                                <button className="action-btn copy">Kopieren</button>
                                <button className="action-btn delete">Löschen</button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
                
                {activeTab === 'bookings' && (
                  <div className="bookings-content">
                    <div className="content-header">
                      <h2>Buchungsverwaltung</h2>
                    </div>
                    
                    <div className="bookings-filters">
                      <div className="filter-group">
                        <label>Status:</label>
                        <select>
                          <option value="all">Alle</option>
                          <option value="confirmed">Bestätigt</option>
                          <option value="pending">Ausstehend</option>
                          <option value="cancelled">Storniert</option>
                        </select>
                      </div>
                      
                      <div className="filter-group">
                        <label>Dienstleistung:</label>
                        <select>
                          <option value="all">Alle</option>
                          <option value="travel">Luxusreise</option>
                          <option value="dental">Zahnbehandlung</option>
                          <option value="hair">Haartransplantation</option>
                          <option value="eye">Augenoperation</option>
                          <option value="aesthetic">Ästhetische Chirurgie</option>
                        </select>
                      </div>
                      
                      <div className="search-filter">
                        <input type="text" placeholder="Suchen..." />
                      </div>
                    </div>
                    
                    <div className="bookings-list">
                      <table className="data-table">
                        <thead>
                          <tr>
                            <th>Name</th>
                            <th>E-Mail</th>
                            <th>Telefon</th>
                            <th>Dienstleistung</th>
                            <th>Reiseziel</th>
                            <th>Datum</th>
                            <th>Status</th>
                            <th>Aktionen</th>
                          </tr>
                        </thead>
                        <tbody>
                          {dashboardData.bookings.map(booking => (
                            <tr key={booking.id}>
                              <td>{booking.name}</td>
                              <td>kunde@example.com</td>
                              <td>+49 123 456789</td>
                              <td>{booking.service}</td>
                              <td>{booking.destination}</td>
                              <td>{booking.date}</td>
                              <td>
                                <span className={`status-badge ${booking.status === 'Bestätigt' ? 'confirmed' : 'pending'}`}>
                                  {booking.status}
                                </span>
                              </td>
                              <td className="actions-cell">
                                <button className="action-btn view">Details</button>
                                <button className="action-btn edit">Bearbeiten</button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
                
                {activeTab === 'messages' && (
                  <div className="messages-content">
                    <div className="content-header">
                      <h2>Nachrichtenverwaltung</h2>
                    </div>
                    
                    <div className="messages-filters">
                      <div className="filter-group">
                        <label>Status:</label>
                        <select>
                          <option value="all">Alle</option>
                          <option value="unread">Ungelesen</option>
                          <option value="read">Gelesen</option>
                          <option value="answered">Beantwortet</option>
                        </select>
                      </div>
                      
                      <div className="search-filter">
                        <input type="text" placeholder="Suchen..." />
                      </div>
                    </div>
                    
                    <div className="messages-list">
                      <table className="data-table">
                        <thead>
                          <tr>
                            <th>Name</th>
                            <th>E-Mail</th>
                            <th>Betreff</th>
                            <th>Datum</th>
                            <th>Status</th>
                            <th>Aktionen</th>
                          </tr>
                        </thead>
                        <tbody>
                          {dashboardData.messages.map(message => (
                            <tr key={message.id}>
                              <td>{message.name}</td>
                              <td>{message.email}</td>
                              <td>{message.subject}</td>
                              <td>{message.date}</td>
                              <td>
                                <span className={`status-badge ${message.status === 'Ungelesen' ? 'unread' : 'read'}`}>
                                  {message.status}
                                </span>
                              </td>
                              <td className="actions-cell">
                                <button className="action-btn view">Lesen</button>
                                <button className="action-btn reply">Antworten</button>
                                <button className="action-btn delete">Löschen</button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </section>

      <style jsx>{`
        .admin-section {
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
          width: 100%;
          text-align: center;
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
        
        .admin-dashboard {
          background-color: var(--background-light);
          border-radius: 10px;
          box-shadow: var(--box-shadow);
          overflow: hidden;
        }
        
        .admin-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 30px;
          background-color: var(--background-dark);
          border-bottom: 1px solid var(--border-color);
        }
        
        .admin-header h1 {
          font-size: 1.8rem;
          color: var(--accent-color);
          margin: 0;
        }
        
        .admin-header .btn {
          width: auto;
        }
        
        .admin-navigation {
          display: flex;
          background-color: var(--background-dark);
          border-bottom: 1px solid var(--border-color);
          overflow-x: auto;
        }
        
        .nav-button {
          padding: 15px 20px;
          background: none;
          border: none;
          color: var(--text-color);
          font-size: 1rem;
          font-weight: 500;
          cursor: pointer;
          transition: var(--transition);
          white-space: nowrap;
        }
        
        .nav-button:hover {
          color: var(--accent-color);
        }
        
        .nav-button.active {
          color: var(--accent-color);
          border-bottom: 3px solid var(--accent-color);
        }
        
        .admin-content {
          padding: 30px;
        }
        
        .dashboard-widgets {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
          gap: 30px;
        }
        
        .widget {
          background-color: var(--primary-color);
          border-radius: 10px;
          box-shadow: var(--box-shadow);
          overflow: hidden;
        }
        
        .widget h3 {
          font-size: 1.2rem;
          color: var(--accent-color);
          padding: 15px 20px;
          margin: 0;
          border-bottom: 1px solid var(--border-color);
        }
        
        .widget-content {
          padding: 20px;
        }
        
        .data-table {
          width: 100%;
          border-collapse: collapse;
        }
        
        .data-table th {
          text-align: left;
          padding: 12px 15px;
          background-color: var(--background-dark);
          color: var(--accent-color);
          font-weight: 600;
          font-size: 0.9rem;
        }
        
        .data-table td {
          padding: 12px 15px;
          border-bottom: 1px solid var(--border-color);
          font-size: 0.9rem;
        }
        
        .data-table tr:last-child td {
          border-bottom: none;
        }
        
        .status-badge {
          display: inline-block;
          padding: 4px 8px;
          border-radius: 4px;
          font-size: 0.8rem;
          font-weight: 600;
        }
        
        .status-badge.confirmed {
          background-color: rgba(76, 175, 80, 0.1);
          color: var(--success-color);
          border: 1px solid var(--success-color);
        }
        
        .status-badge.pending {
          background-color: rgba(255, 193, 7, 0.1);
          color: #ffc107;
          border: 1px solid #ffc107;
        }
        
        .status-badge.unread {
          background-color: rgba(33, 150, 243, 0.1);
          color: #2196f3;
          border: 1px solid #2196f3;
        }
        
        .status-badge.read {
          background-color: rgba(158, 158, 158, 0.1);
          color: #9e9e9e;
          border: 1px solid #9e9e9e;
        }
        
        .content-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 30px;
        }
        
        .content-header h2 {
          font-size: 1.8rem;
          color: var(--accent-color);
          margin: 0;
        }
        
        .content-header .btn {
          width: auto;
        }
        
        .product-image-small {
          width: 50px;
          height: 50px;
          border-radius: 5px;
          overflow: hidden;
        }
        
        .product-image-small img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        .actions-cell {
          display: flex;
          gap: 10px;
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
        
        .action-btn.edit {
          background-color: rgba(33, 150, 243, 0.1);
          color: #2196f3;
          border: 1px solid #2196f3;
        }
        
        .action-btn.edit:hover {
          background-color: rgba(33, 150, 243, 0.2);
        }
        
        .action-btn.delete {
          background-color: rgba(244, 67, 54, 0.1);
          color: var(--error-color);
          border: 1px solid var(--error-color);
        }
        
        .action-btn.delete:hover {
          background-color: rgba(244, 67, 54, 0.2);
        }
        
        .action-btn.view {
          background-color: rgba(76, 175, 80, 0.1);
          color: var(--success-color);
          border: 1px solid var(--success-color);
        }
        
        .action-btn.view:hover {
          background-color: rgba(76, 175, 80, 0.2);
        }
        
        .action-btn.reply {
          background-color: rgba(255, 193, 7, 0.1);
          color: #ffc107;
          border: 1px solid #ffc107;
        }
        
        .action-btn.reply:hover {
          background-color: rgba(255, 193, 7, 0.2);
        }
        
        .action-btn.copy {
          background-color: rgba(156, 39, 176, 0.1);
          color: #9c27b0;
          border: 1px solid #9c27b0;
        }
        
        .action-btn.copy:hover {
          background-color: rgba(156, 39, 176, 0.2);
        }
        
        .payment-link {
          color: var(--accent-color);
          text-decoration: underline;
          font-weight: 500;
        }
        
        .bookings-filters,
        .messages-filters {
          display: flex;
          gap: 20px;
          margin-bottom: 30px;
          flex-wrap: wrap;
        }
        
        .filter-group {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        
        .filter-group label {
          font-weight: 500;
          color: var(--text-color);
        }
        
        .filter-group select,
        .search-filter input {
          padding: 8px 12px;
          background-color: var(--primary-color);
          border: 1px solid var(--border-color);
          border-radius: 5px;
          color: var(--text-color);
          font-size: 0.9rem;
          transition: var(--transition);
        }
        
        .filter-group select:focus,
        .search-filter input:focus {
          border-color: var(--accent-color);
          outline: none;
        }
        
        .search-filter {
          flex: 1;
          min-width: 200px;
        }
        
        .search-filter input {
          width: 100%;
        }
        
        @media (max-width: 992px) {
          .dashboard-widgets {
            grid-template-columns: 1fr;
          }
          
          .admin-navigation {
            flex-wrap: wrap;
          }
          
          .nav-button {
            flex: 1 0 auto;
          }
        }
        
        @media (max-width: 768px) {
          .admin-header {
            flex-direction: column;
            gap: 15px;
            text-align: center;
          }
          
          .content-header {
            flex-direction: column;
            gap: 15px;
            text-align: center;
          }
          
          .actions-cell {
            flex-direction: column;
          }
          
          .data-table {
            display: block;
            overflow-x: auto;
          }
        }
      `}</style>
    </Layout>
  );
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'admin'])),
    },
  };
}

export default Admin;
