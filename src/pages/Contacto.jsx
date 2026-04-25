import { useState } from 'react'
import Swal from 'sweetalert2'
import { guardarEnLocalStorage, obtenerDeLocalStorage } from '../helpers/local-storage'
 
const initialForm = {
  nombre: '',
  apellidos: '',
  email: '',
  asunto: '',
  mensaje: '',
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
 
    Swal.fire({
      icon: 'success',
      title: '¡Mensaje enviado!',
      text: 'Nos pondremos en contacto contigo pronto.',
      background: '#1a1a1a',
      color: '#fff',
      confirmButtonColor: '#ffffff',
      confirmButtonText: '<span style="color:#000">OK</span>',
    })
 
    setFormData(initialForm)
  }
 
  return (
    <div className="bg-[#0f0f0f] text-white pt-28 pb-20">
      <div className="max-w-screen-xl mx-auto px-8">
 
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold tracking-widest uppercase mb-3">CONTACTO</h2>
          <p className="text-gray-400">¿Tienes alguna pregunta? Nos encantaría escucharte</p>
        </div>
 
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
 
          {/* Info */}
          <div className="space-y-10">
            <h3 className="text-xl font-bold tracking-widest uppercase mb-6">INFORMACIÓN DE CONTACTO</h3>
 
            {[
              { label: 'DIRECCIÓN', value: 'Calle Urban Style 123\n28001 Madrid, España' },
              { label: 'TELÉFONO', value: '+34 91 123 45 67' },
              { label: 'EMAIL', value: 'info@urbanthreads.com' },
              { label: 'HORARIO', value: 'Lun - Vie: 9:00 - 18:00\nSáb: 10:00 - 14:00' },
            ].map((item) => (
              <div key={item.label}>
                <h4 className="text-sm font-bold tracking-widest text-gray-400 uppercase mb-2">{item.label}</h4>
                <p className="text-gray-200 whitespace-pre-line">{item.value}</p>
              </div>
            ))}
          </div>
 
          {/* Form */}
          <div>
            <h3 className="text-xl font-bold tracking-widest uppercase mb-6">ENVÍANOS UN MENSAJE</h3>
            <p className="text-gray-500 text-sm mb-6">
              <strong className="text-gray-400">Demo:</strong> Este es un formulario de demostración. Los mensajes no se enviarán realmente.
            </p>
 
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-xs tracking-widest uppercase text-gray-400 mb-2">NOMBRE</label>
                <input
                  type="text"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#1a1a1a] border border-gray-700 text-white px-4 py-3 focus:outline-none focus:border-gray-400 transition"
                />
              </div>
 
              <div>
                <label className="block text-xs tracking-widest uppercase text-gray-400 mb-2">APELLIDOS</label>
                <input
                  type="text"
                  name="apellidos"
                  value={formData.apellidos}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#1a1a1a] border border-gray-700 text-white px-4 py-3 focus:outline-none focus:border-gray-400 transition"
                />
              </div>
 
              <div>
                <label className="block text-xs tracking-widest uppercase text-gray-400 mb-2">EMAIL</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#1a1a1a] border border-gray-700 text-white px-4 py-3 focus:outline-none focus:border-gray-400 transition"
                />
              </div>
 
              <div>
                <label className="block text-xs tracking-widest uppercase text-gray-400 mb-2">ASUNTO</label>
                <select
                  name="asunto"
                  value={formData.asunto}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#1a1a1a] border border-gray-700 text-white px-4 py-3 focus:outline-none focus:border-gray-400 transition"
                >
                  <option value="">Selecciona un asunto</option>
                  <option value="consulta">Consulta general</option>
                  <option value="producto">Información de producto</option>
                  <option value="pedido">Estado de pedido</option>
                  <option value="devolucion">Devoluciones</option>
                  <option value="otro">Otro</option>
                </select>
              </div>
 
              <div>
                <label className="block text-xs tracking-widest uppercase text-gray-400 mb-2">MENSAJE</label>
                <textarea
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-[#1a1a1a] border border-gray-700 text-white px-4 py-3 focus:outline-none focus:border-gray-400 transition resize-none"
                />
              </div>
 
              <button
                type="submit"
                className="w-full border border-white text-white py-4 text-sm tracking-widest uppercase hover:bg-white hover:text-black transition duration-300"
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