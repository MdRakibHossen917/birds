import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router'
import { FaHome, FaImage } from 'react-icons/fa'

function NotFound() {
  return (
    <>
      <Helmet>
        <title>404 - Page Not Found | HK Aviary BD</title>
        <meta name="description" content="The page you are looking for could not be found." />
      </Helmet>
      <div className="bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen flex items-center justify-center py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* 404 Number */}
          <div className="mb-8">
            <h1 className="text-9xl sm:text-[12rem] md:text-[15rem] font-extrabold bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent leading-none">
              404
            </h1>
          </div>

          {/* Error Message */}
          <div className="mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
              Page <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">Not Found</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-4 max-w-2xl mx-auto">
              Oops! The page you are looking for doesn't exist or has been moved.
            </p>
            <p className="text-sm sm:text-base md:text-lg text-gray-500 max-w-xl mx-auto">
              Don't worry, let's get you back to exploring our beautiful birds!
            </p>
          </div>

          {/* Illustration */}
          <div className="mb-12 flex justify-center">
            <div className="relative">
              <div className="text-8xl sm:text-9xl opacity-20">🦅</div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-6xl sm:text-7xl opacity-40">?</div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-orange-500 text-white font-bold rounded-full hover:from-blue-700 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <FaHome className="w-5 h-5" />
              Go to Home
            </Link>
            <Link
              to="/lovebirds"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 font-bold rounded-full border-2 border-blue-600 hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <FaImage className="w-5 h-5" />
              View Lovebirds
            </Link>
          </div>

          {/* Quick Links */}
          <div className="mt-16 pt-12 border-t border-gray-200">
            <p className="text-sm sm:text-base text-gray-600 mb-6">You might be looking for:</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/blogs"
                className="text-blue-600 hover:text-orange-500 font-semibold transition-colors"
              >
                Blogs
              </Link>
              <span className="text-gray-300">|</span>
              <Link
                to="/award"
                className="text-blue-600 hover:text-orange-500 font-semibold transition-colors"
              >
                Awards
              </Link>
              <span className="text-gray-300">|</span>
              <Link
                to="/about-us"
                className="text-blue-600 hover:text-orange-500 font-semibold transition-colors"
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

