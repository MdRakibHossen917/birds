import { Outlet, useLocation } from 'react-router'
import { useEffect } from 'react'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import { FaWhatsapp } from 'react-icons/fa'

function RootLayouts() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <Outlet />
      </div>
      <Footer />
      
      <div className="fixed top-[85%] right-4 z-50 md:hidden">
        <a
          href="https://wa.me/8801737149420"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center shadow-2xl hover:bg-green-600 transition-all duration-300 transform hover:scale-110"
          aria-label="WhatsApp"
        >
          <FaWhatsapp className="w-7 h-7" />
        </a>
      </div>
    </div>
  )
}

export default RootLayouts

