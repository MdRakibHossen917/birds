import { Link } from 'react-router'

function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="md:col-span-1">
            <div className="flex items-center mb-6">
              <span className="text-3xl mr-2">🦅</span>
              <h3 className="text-2xl font-bold text-blue-400">
                Bird Aviary
              </h3>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Your trusted source for bird information, care guides, and conservation efforts. 
              Join our community of bird enthusiasts.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/profile.php?id=100078258962488" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-600 transition-all duration-300 transform hover:scale-110"
              >
                <span className="text-lg">f</span>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-orange-500 transition-all duration-300 transform hover:scale-110">
                <span className="text-lg">t</span>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-600 transition-all duration-300 transform hover:scale-110">
                <span className="text-lg">in</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
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

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Contact Us</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start">
                <span className="mr-3">📧</span>
                <span>info@birdaviary.com</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">📞</span>
                <span>+1 (234) 567-890</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">📍</span>
                <span>123 Bird Street, Nature City, NC 12345</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to get updates on new bird species and care tips.
            </p>
            <div className="flex flex-col space-y-3">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-gray-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              />
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-500 transition-all duration-300 transform hover:scale-105">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Bird Aviary. All rights reserved.
            </p>
            <div className="flex space-x-6 text-gray-400 text-sm">
              <a href="#" className="hover:text-white transition">Privacy Policy</a>
              <a href="#" className="hover:text-white transition">Terms of Service</a>
              <a href="#" className="hover:text-white transition">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

