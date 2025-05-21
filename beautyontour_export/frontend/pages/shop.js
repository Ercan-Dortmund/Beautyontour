import React, { useState } from 'react';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Layout from '../components/Layout';

const Shop = () => {
  const { t } = useTranslation(['common', 'shop']);
  const [cart, setCart] = useState([]);
  
  // Beispiel-Produkte
  const products = [
    {
      id: 1,
      name: 'Luxury Face Cream',
      price: 89.99,
      image: '/images/product-1.jpg',
      category: 'skincare',
      description: 'Luxuriöse Gesichtscreme mit Anti-Aging-Effekt und natürlichen Inhaltsstoffen.'
    },
    {
      id: 2,
      name: 'Premium Hair Oil',
      price: 49.99,
      image: '/images/product-2.jpg',
      category: 'haircare',
      description: 'Hochwertiges Haaröl für glänzendes und gesundes Haar.'
    },
    {
      id: 3,
      name: 'Revitalizing Serum',
      price: 129.99,
      image: '/images/product-3.jpg',
      category: 'skincare',
      description: 'Revitalisierendes Serum für strahlende und jugendliche Haut.'
    },
    {
      id: 4,
      name: 'Luxury Bath Set',
      price: 79.99,
      image: '/images/product-4.jpg',
      category: 'bodycare',
      description: 'Luxuriöses Badeset mit ätherischen Ölen und natürlichen Düften.'
    },
    {
      id: 5,
      name: 'Wellness Tea Collection',
      price: 39.99,
      image: '/images/product-5.jpg',
      category: 'wellness',
      description: 'Exklusive Teekollektion für Entspannung und Wohlbefinden.'
    },
    {
      id: 6,
      name: 'Aromatherapy Set',
      price: 69.99,
      image: '/images/product-6.jpg',
      category: 'wellness',
      description: 'Aromatherapie-Set mit ätherischen Ölen für Entspannung und Wohlbefinden.'
    }
  ];

  // Kategorien
  const categories = [
    { id: 'all', name: 'Alle Produkte' },
    { id: 'skincare', name: 'Hautpflege' },
    { id: 'haircare', name: 'Haarpflege' },
    { id: 'bodycare', name: 'Körperpflege' },
    { id: 'wellness', name: 'Wellness' }
  ];

  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Produkte filtern
  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Warenkorb-Funktionen
  const addToCart = (product) => {
    const existingItem = cart.find(item => item.id === product.id);
    
    if (existingItem) {
      setCart(cart.map(item => 
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, quantity) => {
    if (quantity < 1) {
      removeFromCart(productId);
      return;
    }
    
    setCart(cart.map(item => 
      item.id === productId ? { ...item, quantity } : item
    ));
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
  };

  const [showCart, setShowCart] = useState(false);

  return (
    <Layout
      title={`Shop - ${t('common:beautyontour')}`}
      description="Exklusive Beauty-Produkte und Wellness-Artikel"
    >
      <section className="shop-hero">
        <div className="container">
          <div className="section-header">
            <h1>Beauty & Wellness Shop</h1>
            <h2>Exklusive Produkte für Ihr Wohlbefinden</h2>
          </div>
        </div>
      </section>

      <section className="shop-content">
        <div className="container">
          <div className="shop-controls">
            <div className="category-filter">
              {categories.map(category => (
                <button
                  key={category.id}
                  className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(category.id)}
                >
                  {category.name}
                </button>
              ))}
            </div>
            
            <div className="search-filter">
              <input
                type="text"
                placeholder="Produkte suchen..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="cart-toggle">
              <button className="cart-btn" onClick={() => setShowCart(!showCart)}>
                <span className="cart-icon">🛒</span>
                <span className="cart-count">{cart.length}</span>
              </button>
            </div>
          </div>
          
          <div className="shop-layout">
            <div className={`product-grid ${showCart ? 'with-cart' : ''}`}>
              {filteredProducts.length > 0 ? (
                filteredProducts.map(product => (
                  <div key={product.id} className="product-card">
                    <div className="product-image">
                      <img src={product.image} alt={product.name} />
                    </div>
                    <div className="product-content">
                      <h3>{product.name}</h3>
                      <p className="product-price">{product.price.toFixed(2)} €</p>
                      <p className="product-description">{product.description}</p>
                      <button 
                        className="btn btn-primary"
                        onClick={() => addToCart(product)}
                      >
                        {t('common:buttons.addToCart')}
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="no-products">
                  <p>Keine Produkte gefunden.</p>
                </div>
              )}
            </div>
            
            {showCart && (
              <div className="cart-sidebar">
                <div className="cart-header">
                  <h3>Warenkorb</h3>
                  <button className="close-cart" onClick={() => setShowCart(false)}>×</button>
                </div>
                
                {cart.length > 0 ? (
                  <>
                    <div className="cart-items">
                      {cart.map(item => (
                        <div key={item.id} className="cart-item">
                          <div className="item-image">
                            <img src={item.image} alt={item.name} />
                          </div>
                          <div className="item-details">
                            <h4>{item.name}</h4>
                            <p className="item-price">{item.price.toFixed(2)} €</p>
                          </div>
                          <div className="item-quantity">
                            <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                            <span>{item.quantity}</span>
                            <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                          </div>
                          <button 
                            className="remove-item"
                            onClick={() => removeFromCart(item.id)}
                          >
                            ×
                          </button>
                        </div>
                      ))}
                    </div>
                    
                    <div className="cart-footer">
                      <div className="cart-total">
                        <span>Gesamt:</span>
                        <span>{getTotalPrice()} €</span>
                      </div>
                      <a href="/checkout" className="btn btn-primary checkout-btn">
                        {t('common:buttons.checkout')}
                      </a>
                    </div>
                  </>
                ) : (
                  <div className="empty-cart">
                    <p>Ihr Warenkorb ist leer.</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      <style jsx>{`
        .shop-hero {
          background-color: var(--background-light);
          padding: 80px 0;
          text-align: center;
        }
        
        .shop-hero h1 {
          font-size: 3rem;
          color: var(--accent-color);
          margin-bottom: 15px;
        }
        
        .shop-hero h2 {
          font-size: 1.2rem;
          color: var(--text-secondary);
          font-weight: 400;
        }
        
        .shop-content {
          padding: 80px 0;
          background-color: var(--primary-color);
        }
        
        .shop-controls {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 40px;
          flex-wrap: wrap;
          gap: 20px;
        }
        
        .category-filter {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }
        
        .category-btn {
          background-color: var(--background-light);
          border: none;
          padding: 8px 16px;
          border-radius: 5px;
          color: var(--text-color);
          cursor: pointer;
          transition: var(--transition);
          font-size: 0.9rem;
        }
        
        .category-btn.active {
          background-color: var(--accent-color);
          color: var(--primary-color);
        }
        
        .category-btn:hover {
          background-color: var(--accent-color);
          color: var(--primary-color);
        }
        
        .search-filter input {
          padding: 8px 16px;
          border-radius: 5px;
          border: none;
          background-color: var(--background-light);
          color: var(--text-color);
          width: 250px;
        }
        
        .search-filter input:focus {
          outline: none;
          box-shadow: 0 0 0 2px var(--accent-color);
        }
        
        .cart-btn {
          background-color: var(--background-light);
          border: none;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          position: relative;
          transition: var(--transition);
        }
        
        .cart-btn:hover {
          background-color: var(--accent-color);
        }
        
        .cart-icon {
          font-size: 1.2rem;
        }
        
        .cart-count {
          position: absolute;
          top: -5px;
          right: -5px;
          background-color: var(--accent-color);
          color: var(--primary-color);
          width: 20px;
          height: 20px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.8rem;
          font-weight: bold;
        }
        
        .shop-layout {
          display: flex;
          gap: 30px;
        }
        
        .product-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 30px;
          width: 100%;
        }
        
        .product-grid.with-cart {
          width: 70%;
        }
        
        .product-card {
          background-color: var(--background-light);
          border-radius: 10px;
          overflow: hidden;
          box-shadow: var(--box-shadow);
          transition: var(--transition);
        }
        
        .product-card:hover {
          transform: translateY(-5px);
        }
        
        .product-image {
          height: 200px;
          overflow: hidden;
        }
        
        .product-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: var(--transition);
        }
        
        .product-card:hover .product-image img {
          transform: scale(1.05);
        }
        
        .product-content {
          padding: 20px;
        }
        
        .product-content h3 {
          font-size: 1.2rem;
          margin-bottom: 10px;
          color: var(--accent-color);
        }
        
        .product-price {
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 15px;
          color: var(--text-color);
        }
        
        .product-description {
          margin-bottom: 20px;
          color: var(--text-secondary);
          font-size: 0.9rem;
          line-height: 1.6;
        }
        
        .btn {
          display: inline-block;
          padding: 10px 20px;
          border-radius: 5px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          transition: var(--transition);
          cursor: pointer;
          border: none;
          font-size: 0.9rem;
        }
        
        .btn-primary {
          background-color: var(--accent-color);
          color: var(--primary-color);
        }
        
        .btn-primary:hover {
          background-color: #e69100;
        }
        
        .no-products {
          grid-column: 1 / -1;
          text-align: center;
          padding: 50px;
          background-color: var(--background-light);
          border-radius: 10px;
        }
        
        .cart-sidebar {
          width: 30%;
          background-color: var(--background-light);
          border-radius: 10px;
          padding: 20px;
          box-shadow: var(--box-shadow);
          height: fit-content;
          position: sticky;
          top: 100px;
        }
        
        .cart-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
          padding-bottom: 10px;
          border-bottom: 1px solid var(--border-color);
        }
        
        .cart-header h3 {
          font-size: 1.2rem;
          color: var(--accent-color);
        }
        
        .close-cart {
          background: none;
          border: none;
          color: var(--text-color);
          font-size: 1.5rem;
          cursor: pointer;
          transition: var(--transition);
        }
        
        .close-cart:hover {
          color: var(--accent-color);
        }
        
        .cart-items {
          max-height: 400px;
          overflow-y: auto;
          margin-bottom: 20px;
        }
        
        .cart-item {
          display: flex;
          align-items: center;
          padding: 10px 0;
          border-bottom: 1px solid var(--border-color);
          position: relative;
        }
        
        .item-image {
          width: 60px;
          height: 60px;
          border-radius: 5px;
          overflow: hidden;
          margin-right: 15px;
        }
        
        .item-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        .item-details {
          flex: 1;
        }
        
        .item-details h4 {
          font-size: 0.9rem;
          margin-bottom: 5px;
          color: var(--text-color);
        }
        
        .item-price {
          font-size: 0.9rem;
          color: var(--text-secondary);
        }
        
        .item-quantity {
          display: flex;
          align-items: center;
          margin: 0 15px;
        }
        
        .item-quantity button {
          width: 25px;
          height: 25px;
          background-color: var(--primary-color);
          border: none;
          border-radius: 3px;
          color: var(--text-color);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: var(--transition);
        }
        
        .item-quantity button:hover {
          background-color: var(--accent-color);
          color: var(--primary-color);
        }
        
        .item-quantity span {
          margin: 0 10px;
          min-width: 20px;
          text-align: center;
        }
        
        .remove-item {
          background: none;
          border: none;
          color: var(--text-secondary);
          font-size: 1.2rem;
          cursor: pointer;
          transition: var(--transition);
        }
        
        .remove-item:hover {
          color: var(--error-color);
        }
        
        .cart-footer {
          padding-top: 20px;
          border-top: 1px solid var(--border-color);
        }
        
        .cart-total {
          display: flex;
          justify-content: space-between;
          margin-bottom: 20px;
          font-weight: 600;
          font-size: 1.1rem;
        }
        
        .checkout-btn {
          width: 100%;
          text-align: center;
        }
        
        .empty-cart {
          text-align: center;
          padding: 30px 0;
          color: var(--text-secondary);
        }
        
        @media (max-width: 992px) {
          .shop-layout {
            flex-direction: column;
          }
          
          .product-grid.with-cart {
            width: 100%;
          }
          
          .cart-sidebar {
            width: 100%;
            position: static;
          }
        }
        
        @media (max-width: 768px) {
          .shop-controls {
            flex-direction: column;
            align-items: stretch;
          }
          
          .search-filter input {
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
      ...(await serverSideTranslations(locale, ['common', 'shop'])),
    },
  };
}

export default Shop;
