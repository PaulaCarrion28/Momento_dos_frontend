import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Home from '../pages/home'
import Productos from '../pages/Productos'
import Contacto from '../pages/Contacto'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'productos', element: <Productos /> },
      { path: 'contacto', element: <Contacto /> },
    ],
  },
])

export default router