import { useState } from 'react'
import { guardarEnLocalStorage, obtenerDeLocalStorage } from '../helpers/local-storage'

const initialForm = {
  nombre: '',
  apellidos: '',
  email: '',
  asunto: '',
  mensaje: '',
}

const contactInfo = [
  {
    label: 'DIRECCIÓN',
    value: 'Calle Urban Style 123\n28001 Madrid, España',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" width="22" height="22">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
  },
  {
    label: 'TELÉFONO',
    value: '+34 91 123 45 67',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" width="22" height="22">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
  },
  {
    label: 'EMAIL',
    value: 'info@urbanthreads.com',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" width="22" height="22">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
  },
  {
    label: 'HORARIO',
    value: 'Lun - Vie: 9:00 - 18:00\nSáb: 10:00 - 14:00',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" width="22" height="22">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
]

const inputStyle = {
  width: '100%',
  backgroundColor: '#fff',
  border: '1px solid #d1d5db',
  color: '#111',
  padding: '10px 14px',
  fontSize: '0.95rem',
  outline: 'none',
  boxSizing: 'border-box',
  borderRadius: '2px',
}

const labelStyle = {
  display: 'block',
  fontSize: '0.75rem',
  fontWeight: '700',
  letterSpacing: '2px',
  color: '#374151',
  marginBottom: '6px',
}

const Contacto = () => {
  const [formData, setFormData] = useState(initialForm)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const mensajes = obtenerDeLocalStorage('mensajes') || []
    mensajes.push({ ...formData, fecha: new Date().toISOString() })
    guardarEnLocalStorage('mensajes', mensajes)
    console.log('Formulario enviado:', formData)
    setFormData(initialForm)
  }

  return (
    <div style={{ backgroundColor: '#f3f4f6', color: '#111', paddingTop: '100px', paddingBottom: '80px', fontFamily: 'sans-serif', minHeight: '100vh' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 32px' }}>

        {/* Título */}
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <h2 style={{ fontSize: '2.4rem', fontWeight: '900', letterSpacing: '4px', marginBottom: '12px', color: '#111' }}>CONTACTO</h2>
          <p style={{ color: '#6b7280', fontSize: '1rem' }}>¿Tienes alguna pregunta? Nos encantaría escucharte</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.3fr', gap: '64px', alignItems: 'start' }}>

          {/* Info de contacto */}
          <div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: '800', letterSpacing: '2px', marginBottom: '32px', color: '#111' }}>
              INFORMACIÓN DE CONTACTO
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {contactInfo.map((item) => (
                <div key={item.label} style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                  <div style={{
                    width: '48px', height: '48px', minWidth: '48px',
                    backgroundColor: '#1e2a3a',
                    borderRadius: '6px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    {item.icon}
                  </div>
                  <div>
                    <p style={{ fontWeight: '800', fontSize: '0.85rem', letterSpacing: '2px', marginBottom: '4px', color: '#111' }}>{item.label}</p>
                    <p style={{ color: '#4b5563', fontSize: '0.95rem', whiteSpace: 'pre-line', margin: 0 }}>{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Formulario */}
          <div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: '800', letterSpacing: '2px', marginBottom: '20px', color: '#111' }}>
              ENVÍANOS UN MENSAJE
            </h3>

            {/* Aviso demo */}
            <div style={{
              backgroundColor: '#fef9c3',
              borderLeft: '4px solid #f5a623',
              padding: '14px 16px',
              marginBottom: '24px',
              fontSize: '0.9rem',
              color: '#92400e',
            }}>
              <strong>Demo:</strong> Este es un formulario de demostración. Los mensajes no se enviarán realmente.
            </div>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>

              {/* Nombre y Apellidos en dos columnas */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div>
                  <label style={labelStyle}>NOMBRE</label>
                  <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} required style={inputStyle} />
                </div>
                <div>
                  <label style={labelStyle}>APELLIDOS</label>
                  <input type="text" name="apellidos" value={formData.apellidos} onChange={handleChange} required style={inputStyle} />
                </div>
              </div>

              <div>
                <label style={labelStyle}>EMAIL</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required style={inputStyle} />
              </div>

              <div>
                <label style={labelStyle}>ASUNTO</label>
                <select name="asunto" value={formData.asunto} onChange={handleChange} required style={inputStyle}>
                  <option value="">Selecciona un asunto</option>
                  <option value="consulta">Consulta general</option>
                  <option value="producto">Información de producto</option>
                  <option value="pedido">Estado de pedido</option>
                  <option value="devolucion">Devoluciones</option>
                  <option value="otro">Otro</option>
                </select>
              </div>

              <div>
                <label style={labelStyle}>MENSAJE</label>
                <textarea name="mensaje" value={formData.mensaje} onChange={handleChange} required rows={5} style={{ ...inputStyle, resize: 'none' }} />
              </div>

              <button
                type="submit"
                style={{ backgroundColor: '#111', color: '#fff', border: 'none', padding: '14px', fontSize: '0.9rem', fontWeight: '800', letterSpacing: '2px', cursor: 'pointer', transition: 'background 0.2s' }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#333'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#111'}
              >
                ENVIAR MENSAJE
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Contacto