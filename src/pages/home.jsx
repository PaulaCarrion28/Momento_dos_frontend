import { Link } from 'react-router-dom'
import heroImg from '../assets/hero.png'

const features = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" width="28" height="28">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 3.487a2.25 2.25 0 113.182 3.182L7.5 19.213l-4.5 1.5 1.5-4.5L16.862 3.487z" />
      </svg>
    ),
    title: 'DISEÑO ÚNICO',
    desc: 'Piezas exclusivas con estética urbana y minimalista',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" width="28" height="28">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'CALIDAD PREMIUM',
    desc: 'Materiales de alta calidad para máxima durabilidad',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" width="28" height="28">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: 'ENVÍO RÁPIDO',
    desc: 'Entrega express en 24-48 horas',
  },
]

const Home = () => {
  return (
    <div style={{ fontFamily: 'sans-serif' }}>

      {/* Hero Section */}
      <section
        style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: '0 24px',
          backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${heroImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundColor: '#1a1a1a',
        }}
      >
        <div style={{ maxWidth: '700px' }}>
          <h1 style={{ fontSize: '3.5rem', fontWeight: '900', letterSpacing: '4px', marginBottom: '24px', lineHeight: 1.1, color: '#fff' }}>
            ESTILO URBANO{' '}
            <span style={{ color: '#f5a623' }}>REDEFINIDO</span>
          </h1>
          <p style={{ color: '#ccc', fontSize: '1.1rem', marginBottom: '40px' }}>
            Descubre nuestra colección exclusiva de ropa urbana minimalista
          </p>
          <Link
            to="/productos"
            style={{
              display: 'inline-block',
              backgroundColor: '#f5a623',
              color: '#000',
              padding: '16px 40px',
              fontWeight: '800',
              letterSpacing: '3px',
              textDecoration: 'none',
              fontSize: '0.9rem',
              transition: 'opacity 0.2s',
            }}
            onMouseEnter={(e) => e.target.style.opacity = '0.85'}
            onMouseLeave={(e) => e.target.style.opacity = '1'}
          >
            EXPLORAR COLECCIÓN
          </Link>
        </div>
      </section>

      {/* Features Section — fondo BLANCO */}
      <section style={{ backgroundColor: '#ffffff', padding: '80px 0' }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 32px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '32px',
          textAlign: 'center',
        }}>
          {features.map((f) => (
            <div key={f.title} style={{ padding: '48px 32px' }}>
              <div style={{
                width: '70px',
                height: '70px',
                backgroundColor: '#1e2a3a',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 24px auto',
              }}>
                {f.icon}
              </div>
              <h3 style={{ fontWeight: '800', letterSpacing: '2px', marginBottom: '12px', fontSize: '1rem', color: '#111' }}>{f.title}</h3>
              <p style={{ color: '#666', lineHeight: 1.7 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  )
}

export default Home