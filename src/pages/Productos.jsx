const productos = [
  { id: 1, nombre: 'Camiseta Básica Urban', material: 'Algodón 100% orgánico', precio: 29 },
  { id: 2, nombre: 'Jeans Slim Fit', material: 'Denim premium stretch', precio: 89 },
  { id: 3, nombre: 'Sudadera Oversize', material: 'Algodón French Terry', precio: 65 },
  { id: 4, nombre: 'Chaqueta Bomber', material: 'Nylon resistente al agua', precio: 120 },
  { id: 5, nombre: 'Gorra Snapback', material: 'Bordado premium', precio: 35 },
  { id: 6, nombre: 'Zapatillas Urban', material: 'Suela de goma antideslizante', precio: 95 },
]

const Productos = () => {
  return (
    <div style={{ backgroundColor: '#ffffff', color: '#111', minHeight: '100vh', paddingTop: '100px', paddingBottom: '80px', fontFamily: 'sans-serif' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 32px' }}>

        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h2 style={{ fontSize: '2.2rem', fontWeight: '900', letterSpacing: '4px', marginBottom: '12px', color: '#111' }}>
            NUESTRA COLECCIÓN
          </h2>
          <p style={{ color: '#666' }}>Estilo urbano para cada ocasión</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
          {productos.map((producto) => (
            <div
              key={producto.id}
              style={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '4px', overflow: 'hidden', transition: 'box-shadow 0.2s' }}
              onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)'}
              onMouseLeave={(e) => e.currentTarget.style.boxShadow = 'none'}
            >
              {/* Imagen placeholder */}
              <div style={{ height: '220px', backgroundColor: '#f3f4f6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="#9ca3af" width="64" height="64">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
              </div>

              <div style={{ padding: '20px' }}>
                <h3 style={{ fontSize: '1rem', fontWeight: '700', marginBottom: '6px', color: '#111' }}>{producto.nombre}</h3>
                <p style={{ color: '#888', fontSize: '0.9rem', marginBottom: '16px' }}>{producto.material}</p>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: '1.4rem', fontWeight: '800', color: '#111' }}>€{producto.precio}</span>
                  <button
                    style={{ backgroundColor: '#111', color: '#fff', border: 'none', padding: '10px 20px', fontWeight: '700', letterSpacing: '1px', fontSize: '0.8rem', cursor: 'pointer', borderRadius: '2px' }}
                    onMouseEnter={(e) => e.target.style.backgroundColor = '#333'}
                    onMouseLeave={(e) => e.target.style.backgroundColor = '#111'}
                  >
                    AÑADIR
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default Productos