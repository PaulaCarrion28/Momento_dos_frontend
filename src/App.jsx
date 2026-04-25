import { Outlet } from 'react-router-dom'
import Header from './components/header'
import Footer from './components/Footer'
 
const App = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
 
export default App