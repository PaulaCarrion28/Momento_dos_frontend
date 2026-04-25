import { Link } from 'react-router-dom'
import './header.css'
 
const header = () => {
  return (
    <nav className="bg-gradient-to-r from-[#111111] to-[#1c1c1c] fixed w-full z-20 top-0 start-0 border-b border-gray-800">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-8">
        <Link to="/" className="titulo flex items-center space-x-3 text-white font-bold text-xl tracking-widest">
          URBAN THREADS
        </Link>
        <button
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-300 rounded md:hidden hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600"
          aria-controls="navbar-solid"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M5 7h14M5 12h14M5 17h14" />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-solid">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-16 md:mt-0">
            <li>
              <Link to="/" className="block py-2 px-3 text-white rounded hover:text-gray-300 md:p-0 transition">
                Inicio
              </Link>
            </li>
            <li>
              <Link to="/productos" className="block py-2 px-3 text-white rounded hover:text-gray-300 md:p-0 transition">
                Productos
              </Link>
            </li>
            <li>
              <Link to="/contacto" className="block py-2 px-3 text-white rounded hover:text-gray-300 md:p-0 transition">
                Contacto
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
 
export default header