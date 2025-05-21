import React, { useState, useEffect } from 'react';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Layout from '../components/Layout';

const Home = () => {
  const { t } = useTranslation('common');
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Testimonial data
  const testimonials = [
    {
      id: 1,
      quote: "Meine Haartransplantation in Istanbul war ein voller Erfolg. Das Team von Beauty on Tour hat mich von Anfang bis Ende perfekt betreut. Die Klinik war erstklassig und das Ergebnis übertrifft meine Erwartungen!",
      name: "Thomas Müller",
      title: "Haartransplantation Patient",
      image: "/images/testimonial-1.jpg"
    },
    {
      id: 2,
      quote: "Unser Luxusurlaub in Bodrum war unvergesslich. Die persönliche Betreuung, das exklusive Hotel und die maßgeschneiderten Ausflüge haben unsere Erwartungen weit übertroffen. Wir kommen definitiv wieder!",
      name: "Familie Schmidt",
      title: "Luxusreise Kunden",
      image: "/images/testimonial-2.jpg"
    }
  ];
  
  // Services data
  const services = [
    {
      id: 1,
      title: "Luxusreisen",
      description: "Maßgeschneiderte Reiseerlebnisse an die schönsten Orte der Türkei mit exklusiven Unterkünften und persönlicher Betreuung.",
      image: "/images/luxury-travel.jpg",
      link: "/travel"
    },
    {
      id: 2,
      title: "Zahnbehandlungen",
      description: "Hochwertige Zahnbehandlungen in erstklassigen Kliniken zu attraktiven Preisen mit umfassender Betreuung.",
      image: "/images/health-dental.jpg",
      link: "/health"
    },
    {
      id: 3,
      title: "Haartransplantation",
      description: "Modernste Techniken für natürlich aussehende Ergebnisse durch erfahrene Experten in führenden Kliniken.",
      image: "/images/health-hair.jpg",
      link: "/health"
    },
    {
      id: 4,
      title: "Augenoperationen",
      description: "Präzise Augenlaserbehandlungen mit neuester Technologie für besseres Sehen ohne Brille oder Kontaktlinsen.",
      image: "/images/health-eye.jpg",
      link: "/health"
    },
    {
      id: 5,
      title: "Ästhetische Chirurgie",
      description: "Diskrete und professionelle ästhetische Eingriffe in erstklassigen Kliniken mit erfahrenen Chirurgen.",
      image: "/images/health-aesthetic.jpg",
      link: "/health"
    },
    {
      id: 6,
      title: "Wellness & Beauty",
      description: "Exklusive Spa-Erlebnisse und Beauty-Treatments in luxuriösen Umgebungen für Ihr Wohlbefinden.",
      image: "/images/beauty-wellness.jpg",
      link: "/beauty"
    }
  ];
  
  // Destinations data
  const destinations = [
    {
      id: 1,
      title: "Ägäische Küste",
      description: "Kristallklares Wasser, weiße Sandstrände und luxuriöse Resorts an der malerischen Ägäisküste.",
      image: "/images/destination-aegean.jpg",
      link: "/travel"
    },
    {
      id: 2,
      title: "Kappadokien",
      description: "Einzigartige Landschaften mit Feenkaminen, Heißluftballonfahrten und exklusiven Höhlenhotels.",
      image: "/images/destination-cappadocia.jpg",
      link: "/travel"
    },
    {
      id: 3,
      title: "Istanbul",
      description: "Die pulsierende Metropole zwischen Orient und Okzident mit erstklassigen Kliniken und Luxushotels.",
      image: "/images/destination-istanbul.jpg",
      link: "/travel"
    },
    {
      id: 4,
      title: "Bodrum",
      description: "Die türkische Riviera mit exklusiven Yachthäfen, Luxusresorts und pulsierendem Nachtleben.",
      image: "/images/destination-bodrum.jpg",
      link: "/travel"
    }
  ];
  
  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [testimonials.length]);
  
  return (
    <Layout
      title="Beauty on Tour - Luxusreisen und Gesundheitstourismus"
      description="Ihr Partner für exklusive Reisen und hochwertige Gesundheitsbehandlungen in der Türkei. Maßgeschneiderte Erlebnisse mit persönlicher Betreuung."
    >
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Beauty on Tour</h1>
            <h2 className="hero-subtitle">Ihr Partner für exklusive Reisen und Gesundheitstourismus in der Türkei</h2>
            <div className="hero-buttons">
              <a href="/booking" className="btn btn-primary">Anfrage stellen</a>
              <a href="/services" className="btn btn-secondary">Unsere Dienstleistungen</a>
            </div>
          </div>
        </div>
      </section>
      
      <section className="services">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Unsere Dienstleistungen</h2>
            <p className="section-subtitle">Entdecken Sie unser umfassendes Angebot an exklusiven Reisen und hochwertigen Gesundheitsbehandlungen</p>
          </div>
          
          <div className="services-grid">
            {services.map(service => (
              <div key={service.id} className="service-card">
                <div className="service-image">
                  <img src={service.image} alt={service.title} />
                </div>
                <div className="service-content">
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.description}</p>
                  <a href={service.link} className="service-link">Mehr erfahren</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="destinations">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Unsere Reiseziele</h2>
            <p className="section-subtitle">Entdecken Sie die schönsten Orte der Türkei mit maßgeschneiderten Luxusreisen</p>
          </div>
          
          <div className="destinations-grid">
            {destinations.map(destination => (
              <div key={destination.id} className="destination-card">
                <img src={destination.image} alt={destination.title} className="destination-image" />
                <div className="destination-overlay">
                  <h3 className="destination-title">{destination.title}</h3>
                  <p className="destination-description">{destination.description}</p>
                  <a href={destination.link} className="destination-link">Entdecken</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="testimonials">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Kundenstimmen</h2>
            <p className="section-subtitle">Was unsere Kunden über ihre Erfahrungen mit Beauty on Tour sagen</p>
          </div>
          
          <div className="testimonials-slider">
            <div className="testimonial-item">
              <p className="testimonial-quote">"{testimonials[currentSlide].quote}"</p>
              <div className="testimonial-author">
                <div className="author-image">
                  <img src={testimonials[currentSlide].image} alt={testimonials[currentSlide].name} />
                </div>
                <h4 className="author-name">{testimonials[currentSlide].name}</h4>
                <p className="author-title">{testimonials[currentSlide].title}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="cta">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Bereit für Ihr nächstes Erlebnis?</h2>
            <p className="cta-text">Kontaktieren Sie uns noch heute und lassen Sie uns gemeinsam Ihre maßgeschneiderte Reise oder Behandlung planen.</p>
            <div className="hero-buttons">
              <a href="/booking" className="btn btn-primary">Anfrage stellen</a>
              <a href="/contact" className="btn btn-secondary">Kontakt aufnehmen</a>
            </div>
          </div>
        </div>
      </section>
      
      <style jsx>{`
        /* Component-specific styles */
        .testimonials-slider {
          position: relative;
        }
        
        .testimonial-item {
          opacity: 1;
          transition: opacity 0.5s ease;
        }
      `}</style>
    </Layout>
  );
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}

export default Home;
