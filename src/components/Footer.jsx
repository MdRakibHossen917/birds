import { Link } from 'react-router'
import { FaFacebook, FaWhatsapp, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'

function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 lg:gap-12">
          <div className="md:col-span-1">
            <div className="flex items-center mb-4 md:mb-6 gap-3">
              <img 
                src="/logo.png" 
                alt="HK Aviary BD Logo" 
                className="h-10 md:h-12 w-auto object-contain"
              />
              <h3 className="text-xl md:text-2xl font-bold text-orange-500">
                HK Aviary BD
              </h3>
            </div>
            <p className="text-sm md:text-base text-gray-400 leading-relaxed mb-6 md:mb-8">
              Your trusted source for bird information, care guides, and conservation efforts. 
              Join our community of bird enthusiasts.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/profile.php?id=100078258962488" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-600 transition-all duration-300 transform hover:scale-110"
                aria-label="Facebook"
              >
                <FaFacebook className="w-5 h-5" />
              </a>
              <a 
                href="https://wa.me/8801737149420"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-green-500 transition-all duration-300 transform hover:scale-110"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6 text-white">Quick Links</h3>
            <ul className="space-y-2 md:space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-all duration-300 flex items-center group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-blue-500 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/blogs" className="text-gray-400 hover:text-white transition-all duration-300 flex items-center group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-blue-500 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                  Blogs
                </Link>
              </li>
              <li>
                <Link to="/award" className="text-gray-400 hover:text-white transition-all duration-300 flex items-center group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-blue-500 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                  Award
                </Link>
              </li>
              <li>
                <Link to="/about-us" className="text-gray-400 hover:text-white transition-all duration-300 flex items-center group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-blue-500 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                  About us
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-all duration-300 flex items-center group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-blue-500 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                  Species Database
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6 text-white">Contact Us</h3>
            <ul className="space-y-2 md:space-y-3 text-sm md:text-base text-gray-400">
              <li className="flex items-start">
                <FaEnvelope className="mr-3 mt-1 flex-shrink-0 w-4 h-4 md:w-5 md:h-5" />
                <a href="mailto:hkaviarybd@gmail.com" className="hover:text-white transition-colors break-all">hkaviarybd@gmail.com</a>
              </li>
              <li className="flex items-start">
                <FaPhone className="mr-3 mt-1 flex-shrink-0 w-4 h-4 md:w-5 md:h-5" />
                <a href="tel:+8801737149420" className="hover:text-white transition-colors">01737-149420</a>
              </li>
              <li className="flex items-start">
                <FaMapMarkerAlt className="mr-3 mt-1 flex-shrink-0 w-4 h-4 md:w-5 md:h-5" />
                <span>Holan, Samsu Garage, Dhaka, Bangladesh</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6 text-white">Newsletter</h3>
            <p className="text-sm md:text-base text-gray-400 mb-4 md:mb-6">
              Subscribe to get updates on new bird species and care tips.
            </p>
            <div className="flex flex-col space-y-3">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-gray-700 text-white px-4 py-3 rounded-lg text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              />
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold text-sm md:text-base hover:bg-orange-500 transition-all duration-300 transform hover:scale-105">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 md:mt-12 pt-6 md:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm md:text-base text-gray-400 text-center md:text-left">
              &copy; {new Date().getFullYear()} HK Aviary BD. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm md:text-base text-gray-400">
              <Link to="/privacy-policy" className="hover:text-white transition">Privacy Policy</Link>
              <Link to="/terms-of-service" className="hover:text-white transition">Terms of Service</Link>
              <Link to="/cookie-policy" className="hover:text-white transition">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

