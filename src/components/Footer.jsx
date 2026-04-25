const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#111111] via-[#1a1a1a] to-[#111111] text-white">
      
      <div className="max-w-screen-xl mx-auto px-8 py-14">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

      
          <div>
            <h2 className="text-2xl font-bold mb-5">URBAN THREADS</h2>

            <p className="text-gray-300 leading-8 text-lg">
              Redefiniendo el estilo urbano con <br />
              diseños minimalistas y calidad <br />
              premium.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-5 uppercase">
              Enlaces
            </h2>

            <ul className="space-y-4 text-gray-300 text-lg">
              <li>
                <a href="#" className="hover:text-white transition">
                  Inicio
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white transition">
                  Productos
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white transition">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-5 uppercase">
              Ayuda
            </h2>

            <ul className="space-y-4 text-gray-300 text-lg">
              <li>
                <a href="#" className="hover:text-white transition">
                  Guía de tallas
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white transition">
                  Envíos
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white transition">
                  Devoluciones
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white transition">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

    
          <div>
            <h2 className="text-xl font-bold mb-5 uppercase">
              Síguenos
            </h2>

            <div className="flex gap-5 text-gray-300 text-3xl">

              <a href="#" className="hover:text-white transition">
                <img src="" alt="" />
              </a>

              <a href="#" className="hover:text-white transition">
                <img src="" alt="" />
              </a>

              <a href="#" className="hover:text-white transition">
                <img src="" alt="" />
              </a>

            </div>
          </div>

        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-300 text-lg">
            © 2024 Urban Threads. Todos los derechos reservados.
          </p>
        </div>

      </div>

    </footer>
  )
}

export default Footer