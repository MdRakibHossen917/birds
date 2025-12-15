import { useState } from 'react'
import { Link, useLocation } from 'react-router'
import { FaWhatsapp } from 'react-icons/fa'
import { HiMenu, HiX } from 'react-icons/hi'

function Navbar() {
  const location = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  const isActive = (path) => location.pathname === path
  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/blogs', label: 'Blogs' },
    { path: '/award', label: 'Award' },
    { path: '/about-us', label: 'About us' }
  ]

  return (
    <>
      <nav className="bg-white shadow-lg sticky top-0 z-50 backdrop-blur-sm bg-opacity-95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo on left side */}
            <div className="flex items-center">
              <Link to="/" onClick={() => setIsMenuOpen(false)} className="text-2xl font-bold text-blue-600 hover:text-orange-500 transition-all duration-300 flex items-center gap-3">
                <img 
                  src="/logo.png" 
                  alt="HK Aviary BD Logo" 
                  className="h-12 w-auto object-contain"
                />
                <span>HK Aviary BD</span>
              </Link>
            </div>
            
            {/* Desktop Navigation links on right side */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map(link => (
                <Link 
                  key={link.path}
                  to={link.path} 
                  className={`relative font-semibold transition-all duration-300 ${
                    isActive(link.path) 
                      ? 'text-blue-600' 
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  {link.label}
                  {isActive(link.path) && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600"></span>
                  )}
                </Link>
              ))}
              <a
                href="https://wa.me/8801737149420"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-green-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center gap-2"
              >
                <FaWhatsapp className="w-5 h-5" />
                WhatsApp
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-700 hover:text-blue-600 focus:outline-none transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <HiX className="w-6 h-6" />
              ) : (
                <HiMenu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}

      {/* Mobile Menu Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Menu Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <div className="flex items-center gap-3">
              <img 
                src="/logo.png" 
                alt="HK Aviary BD Logo" 
                className="h-10 w-auto object-contain"
              />
              <span className="text-xl font-bold text-blue-600">HK Aviary BD</span>
            </div>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-700 hover:text-blue-600 transition-colors"
              aria-label="Close menu"
            >
              <HiX className="w-6 h-6" />
            </button>
          </div>

          {/* Menu Links */}
          <nav className="flex-1 p-6">
            <ul className="space-y-4">
              {navLinks.map(link => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block px-4 py-3 rounded-lg font-semibold transition-all duration-300 ${
                      isActive(link.path)
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Menu Footer */}
          <div className="p-6 border-t border-gray-200">
            <a
              href="https://wa.me/8801737149420"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMenuOpen(false)}
              className="w-full bg-green-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-600 transition-all duration-300 shadow-lg flex items-center justify-center gap-2"
            >
              <FaWhatsapp className="w-5 h-5" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar

