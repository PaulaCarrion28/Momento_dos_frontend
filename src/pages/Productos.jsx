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
    <div style={{ backgroundColor: '#1a1a1a', color: '#fff', minHeight: '100vh', paddingTop: '100px', paddingBottom: '80px', fontFamily: 'sans-serif' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 32px' }}>

        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h2 style={{ fontSize: '2.2rem', fontWeight: '900', letterSpacing: '4px', marginBottom: '12px' }}>
            NUESTRA COLECCIÓN
          </h2>
          <p style={{ color: '#999' }}>Estilo urbano para cada ocasión</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
          {productos.map((producto) => (
            <div
              key={producto.id}
              style={{ backgroundColor: '#1e1e1e', border: '1px solid #2a2a2a', padding: '32px', transition: 'border-color 0.2s' }}
              onMouseEnter={(e) => e.currentTarget.style.borderColor = '#f5a623'}
              onMouseLeave={(e) => e.currentTarget.style.borderColor = '#2a2a2a'}
            >
              <div style={{ height: '180px', backgroundColor: '#2a2a2a', marginBottom: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '4rem' }}>
                👕
              </div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '8px' }}>{producto.nombre}</h3>
              <p style={{ color: '#888', fontSize: '0.9rem', marginBottom: '20px' }}>{producto.material}</p>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '1.5rem', fontWeight: '800', color: '#f5a623' }}>€{producto.precio}</span>
                <button
                  style={{ backgroundColor: '#f5a623', color: '#000', border: 'none', padding: '10px 24px', fontWeight: '800', letterSpacing: '2px', fontSize: '0.8rem', cursor: 'pointer' }}
                  onMouseEnter={(e) => e.target.style.opacity = '0.85'}
                  onMouseLeave={(e) => e.target.style.opacity = '1'}
                >
                  AÑADIR
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default Productos