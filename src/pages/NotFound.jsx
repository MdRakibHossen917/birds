import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router'
import { FaHome, FaEnvelope } from 'react-icons/fa'

function NotFound() {
  return (
    <>
      <Helmet>
        <title>404 - Page Not Found | HK Aviary BD</title>
        <meta name="description" content="The page you are looking for could not be found." />
      </Helmet>
      
      {/* Clean White Background Container */}
      <div className="bg-white min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-2xl w-full text-center">
          
          {/* Abstract Minimal Illustration */}
          <div className="mb-8 sm:mb-12 relative inline-block">
            {/* Animated Abstract Shapes */}
            <div className="relative">
              {/* Background Circles */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 sm:w-40 sm:h-40 bg-blue-50 rounded-full animate-pulse opacity-60"></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 sm:w-32 sm:h-32 bg-orange-50 rounded-full animate-pulse opacity-40" style={{ animationDelay: '0.5s' }}></div>
              </div>
              
              {/* Large 404 Text */}
              <h1 className="relative text-8xl sm:text-9xl md:text-[10rem] font-bold text-gray-900 tracking-tight leading-none py-8">
                404
              </h1>
            </div>
          </div>

          {/* Error Message */}
          <div className="mb-10 sm:mb-12 space-y-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 tracking-tight">
              Oops! Page not found
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-md mx-auto leading-relaxed">
              The page you're looking for doesn't exist or has been moved. Let's get you back on track.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            {/* Primary Button */}
            <Link
              to="/"
              className="group inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-all duration-200 shadow-sm hover:shadow-md w-full sm:w-auto"
            >
              <FaHome className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
              <span>Back to Home</span>
            </Link>

            {/* Secondary Link */}
            <Link
              to="/about-us"
              className="group inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white text-gray-700 font-medium rounded-lg border border-gray-300 hover:border-gray-400 hover:bg-gray-50 transition-all duration-200 w-full sm:w-auto"
            >
              <FaEnvelope className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
              <span>Contact Support</span>
            </Link>
          </div>

          {/* Quick Links */}
          <div className="pt-10 border-t border-gray-200">
            <p className="text-sm text-gray-500 mb-4">Popular pages:</p>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
              <Link
                to="/lovebirds"
                className="text-gray-600 hover:text-gray-900 font-medium transition-colors duration-200"
              >
                Lovebirds
              </Link>
              <Link
                to="/blogs"
                className="text-gray-600 hover:text-gray-900 font-medium transition-colors duration-200"
              >
                Blogs
              </Link>
              <Link
                to="/award"
                className="text-gray-600 hover:text-gray-900 font-medium transition-colors duration-200"
              >
                Awards
              </Link>
              <Link
                to="/about-us"
                className="text-gray-600 hover:text-gray-900 font-medium transition-colors duration-200"
              >
                About Us
              </Link>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default NotFound

