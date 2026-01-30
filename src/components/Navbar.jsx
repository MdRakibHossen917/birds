import { useState } from 'react'
import { Link, useLocation } from 'react-router'
import { FaWhatsapp, FaHome, FaBlog, FaTrophy, FaInfoCircle } from 'react-icons/fa'
import { HiMenu, HiX } from 'react-icons/hi'

function Navbar() {
  const location = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  const isActive = (path) => location.pathname === path
  const navLinks = [
    { path: '/', label: 'Home', icon: FaHome, color: 'blue' },
    { path: '/blogs', label: 'Blogs', icon: FaBlog, color: 'purple' },
    { path: '/award', label: 'Award', icon: FaTrophy, color: 'yellow' },
    { path: '/about-us', label: 'About Us', icon: FaInfoCircle, color: 'orange' }
  ]

  return (
    <>
      <nav className="bg-white  sticky top-0 z-50 backdrop-blur-sm bg-opacity-95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            <div className="flex items-center">
              <Link to="/" onClick={() => setIsMenuOpen(false)} className="text-xl md:text-2xl font-bold text-orange-500 hover:text-black transition-all duration-300 flex items-center gap-2 md:gap-3">
                <img 
                  src="/logo.png" 
                  alt="HK Aviary BD Logo" 
                  className="h-10 md:h-12 w-auto object-contain"
                />
                <span className="inline-flex flex-col leading-tight">
                  <span>HK Aviary BD</span>
                  <span className="text-xs md:text-sm font-semibold text-gray-600">Premium Birds</span>
                </span>
              </Link>
            </div>
            
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
              {navLinks.map(link => (
                <Link 
                  key={link.path}
                  to={link.path} 
                  className={`relative font-semibold text-base lg:text-lg transition-all duration-300 ${
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
                className="bg-green-500 text-white px-5 lg:px-6 py-2 md:py-2.5 rounded-full font-semibold text-sm md:text-base hover:bg-green-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center gap-2"
              >
                <FaWhatsapp className="w-4 h-4 md:w-5 md:h-5" />
                <span className="hidden lg:inline">WhatsApp</span>
              </a>
            </div>

            {!isMenuOpen && (
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden text-gray-700 hover:text-blue-600 focus:outline-none transition-colors"
                aria-label="Toggle menu"
              >
                <HiMenu className="w-6 h-6" />
              </button>
            )}
          </div>
        </div>
      </nav>

      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}

      <div
        className={`fixed top-0 left-0 h-full w-[80%] bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 via-blue-500 to-orange-500 p-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-white p-2 rounded-lg shadow-md">
                  <img 
                    src="/logo.png" 
                    alt="HK Aviary BD Logo" 
                    className="h-8 w-auto object-contain"
                  />
                </div>
                <div>
                  <h2 className="text-white text-xl font-bold">HK Aviary BD</h2>
                  <p className="text-blue-100 text-xs">Premium Birds</p>
                </div>
              </div>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="text-white hover:bg-white/20 p-2 rounded-full transition-all"
                aria-label="Close menu"
              >
                <HiX className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 overflow-y-auto">
            <div className="space-y-2">
              {navLinks.map(link => {
                const IconComponent = link.icon
                const isCurrentPage = isActive(link.path)
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`relative flex items-center gap-4 px-4 py-3.5 rounded-xl font-semibold transition-all duration-300 group ${
                      isCurrentPage
                        ? 'text-blue-600'
                        : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                    }`}
                  >
                    <div className={`p-2 rounded-lg transition-all ${
                      isCurrentPage 
                        ? `bg-${link.color}-100` 
                        : `bg-${link.color}-100 group-hover:bg-${link.color}-200`
                    }`}>
                      <IconComponent className={`w-5 h-5 text-${link.color}-600`} />
                    </div>
                    <span className="text-base">{link.label}</span>
                    {isCurrentPage && (
                      <span className="absolute bottom-2 left-4 right-4 h-0.5 bg-blue-600"></span>
                    )}
                  </Link>
                )
              })}
            </div>
          </nav>

          {/* Footer */}
          <div className="p-4 bg-gray-50 text-center">
            <p className="text-sm font-semibold text-gray-800">HK Aviary BD</p>
            <p className="text-xs text-gray-600">Quality Bird Breeding</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar

