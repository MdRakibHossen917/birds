import { Helmet } from 'react-helmet-async'

function AboutUs() {
  return (
    <>
      <Helmet>
        <title>About Us - Bird Aviary | Our Mission & Values</title>
        <meta name="description" content="Learn about Bird Aviary's mission to educate and inspire bird enthusiasts while promoting bird conservation worldwide." />
        <meta name="keywords" content="about bird aviary, bird conservation, bird education, bird community" />
        <link rel="icon" type="image/png" href="/fav.png" />
      </Helmet>
      <div className="bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-800 mb-6">
            About <span className="text-blue-600">HK Aviary BD</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We are passionate about birds and dedicated to providing comprehensive information 
            about bird species, their care, habitats, and conservation.
          </p>
        </div>

        {/* Mission Section */}
        <div className="bg-white rounded-xl shadow-xl p-10 mb-12 border border-gray-100">
          <div className="mb-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">Our Mission</h2>
          </div>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed mb-8">
            At Bird Aviary, our mission is to educate and inspire bird enthusiasts while promoting 
            the protection and well-being of birds worldwide. We believe that through knowledge and 
            community, we can make a significant impact on bird conservation and appreciation.
          </p>
          
          <div className="bg-gradient-to-r from-blue-50 to-orange-50 rounded-xl p-6">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-6">What We Do</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0 font-bold">✓</div>
                <div>
                  <h4 className="text-sm sm:text-base md:text-lg font-semibold text-gray-800 mb-1">Species Information</h4>
                  <p className="text-xs sm:text-sm md:text-base text-gray-600">Detailed information about various bird species from around the world</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0 font-bold">✓</div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Expert Advice</h4>
                  <p className="text-gray-600">Share expert advice on bird care, feeding, and housing</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0 font-bold">✓</div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Educational Content</h4>
                  <p className="text-gray-600">Publish educational articles about bird behavior and habitats</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0 font-bold">✓</div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Conservation Support</h4>
                  <p className="text-gray-600">Support bird conservation efforts and raise awareness</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values and Join Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="mb-6">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800">Our Values</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 text-sm font-bold mt-0.5">✓</div>
                <div>
                  <h4 className="text-sm sm:text-base md:text-lg font-semibold text-gray-800 mb-1">Conservation</h4>
                  <p className="text-xs sm:text-sm md:text-base text-gray-600">Protection and conservation of bird species worldwide</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 text-sm font-bold mt-0.5">✓</div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Education</h4>
                  <p className="text-gray-600">Knowledge sharing and continuous learning</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 text-sm font-bold mt-0.5">✓</div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Respect</h4>
                  <p className="text-gray-600">Respect for wildlife and nature</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 text-sm font-bold mt-0.5">✓</div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Community</h4>
                  <p className="text-gray-600">Building a supportive community of bird lovers</p>
                </div>
              </li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-blue-600 to-orange-500 rounded-xl shadow-xl p-8 text-white hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            {/* Facebook Page Details */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8 border border-white/20">
              <h4 className="text-xl sm:text-2xl font-bold mb-4 flex items-center gap-3">
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                Connect on Facebook
              </h4>
              <p className="text-sm sm:text-base md:text-lg mb-4 leading-relaxed text-blue-50">
                Follow our Facebook page to stay updated with the latest news, photos, and updates from HK Aviary BD. 
                Join our growing community of bird enthusiasts and get exclusive content directly on Facebook.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-start">
                  <span className="text-orange-300 mr-3 text-xl">✓</span>
                  <p className="text-sm sm:text-base text-blue-50">Get latest updates about our lovebirds and breeding program</p>
                </div>
                <div className="flex items-start">
                  <span className="text-orange-300 mr-3 text-xl">✓</span>
                  <p className="text-sm sm:text-base text-blue-50">View photos and videos of our champion birds</p>
                </div>
                <div className="flex items-start">
                  <span className="text-orange-300 mr-3 text-xl">✓</span>
                  <p className="text-sm sm:text-base text-blue-50">Connect with other bird lovers and share experiences</p>
                </div>
                <div className="flex items-start">
                  <span className="text-orange-300 mr-3 text-xl">✓</span>
                  <p className="text-sm sm:text-base text-blue-50">Receive exclusive offers and announcements</p>
                </div>
              </div>
            </div>

            <a
              href="https://www.facebook.com/profile.php?id=100078258962488"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-white text-blue-600 px-8 py-4 rounded-full font-bold hover:bg-orange-50 hover:text-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-3"
            >
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              <span className="text-lg sm:text-xl">Visit Our Facebook Page</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="bg-white rounded-xl shadow-xl p-10 mb-12 border border-gray-100">
          <div className="text-center mb-8">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">Connect With Us</h3>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-orange-500 mx-auto"></div>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 mt-6 max-w-2xl mx-auto">
              Stay updated with our latest news, bird care tips, and community updates by following us on social media.
            </p>
          </div>
          <div className="flex justify-center">
            <a
              href="https://www.facebook.com/profile.php?id=100078258962488"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-blue-600 text-white px-10 py-5 rounded-full font-bold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-3"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              <span className="text-lg sm:text-xl">Visit Our Facebook Page</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>
        </div>

        {/* Founder/Owner Section */}
        <div className="bg-white rounded-xl shadow-xl p-10 mb-12 border border-gray-100">
          <div className="text-center mb-8">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">Founder</h3>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-orange-500 mx-auto"></div>
          </div>
          <div className="max-w-5xl mx-auto">
            {/* Mobile View - Centered */}
            <div className="md:hidden bg-gradient-to-r from-blue-50 to-orange-50 rounded-xl p-8 text-center overflow-hidden">
              <div className="mb-6 flex justify-center">
                <div className="relative">
                  <img 
                    src="https://i.ibb.co.com/Kc43XtLf/513957320-719384884013471-1840928253361452718-n.jpg" 
                    alt="Md. Humaiyun Kabir - Founder"
                    className="w-48 h-48 rounded-full object-cover border-4 border-white shadow-xl"
                  />
                </div>
              </div>
              <h4 className="text-2xl font-bold text-gray-800 mb-3">Md. Humaiyun Kabir</h4>
              <p className="text-lg text-gray-700 font-semibold mb-2">Ground Services Assistant</p>
              <p className="text-lg text-blue-600 font-semibold mb-3">Biman Bangladesh Airlines</p>
              <p className="text-base text-gray-600 mb-6">Dhaka, Bangladesh</p>
              <div className="border-t border-gray-300 pt-6 mt-6">
                <p className="text-base text-gray-700 leading-relaxed">
                  Humaiyun ground services assistant organization at Biman Bangladesh Airlines, Bangladesh. 
                  Passionate about lovebird breeding and dedicated to producing high-quality champion birds 
                  through careful breeding and genetic excellence.
                </p>
              </div>
            </div>

            {/* Tablet & Desktop View - Side by Side */}
            <div className="hidden md:flex bg-gradient-to-r from-blue-50 to-orange-50 rounded-xl p-8 overflow-hidden shadow-lg">
              <div className="flex-shrink-0 mr-8">
                <div className="relative">
                  <img 
                    src="https://i.ibb.co.com/Kc43XtLf/513957320-719384884013471-1840928253361452718-n.jpg" 
                    alt="Md. Humaiyun Kabir - Founder"
                    className="w-56 h-56 lg:w-72 lg:h-72 rounded-xl object-cover border-4 border-white shadow-2xl"
                  />
                  <div className="absolute inset-0 rounded-xl border-4 border-blue-500 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
              <div className="flex-1 flex flex-col justify-center">
                <div className="mb-4">
                  <h4 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-800 mb-2">Md. Humaiyun Kabir</h4>
                  <p className="text-sm lg:text-base text-blue-600 font-semibold mb-1">- Founder</p>
            </div>
                <div className="space-y-2 mb-6">
                  <p className="text-base lg:text-lg xl:text-xl text-gray-700 font-semibold">
                    Ground Services Assistant
                  </p>
                  <p className="text-base lg:text-lg xl:text-xl text-blue-600 font-semibold">
                    Biman Bangladesh Airlines
                  </p>
                  <p className="text-sm lg:text-base text-gray-600">
                    Dhaka, Bangladesh
                  </p>
                </div>
                <div className="border-t border-gray-300 pt-4">
                  <p className="text-sm lg:text-base xl:text-lg text-gray-700 leading-relaxed">
                    Humaiyun ground services assistant organization at Biman Bangladesh Airlines, Bangladesh. 
                    Passionate about lovebird breeding and dedicated to producing high-quality champion birds 
                    through careful breeding and genetic excellence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-white rounded-xl shadow-xl p-10 border border-gray-100">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 text-center mb-10">Our Impact</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-blue-600 mb-2">500+</div>
              <div className="text-sm sm:text-base md:text-lg text-gray-600 font-semibold">Bird Species</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-extrabold text-orange-500 mb-2">10K+</div>
              <div className="text-gray-600 font-semibold">Active Members</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-extrabold text-blue-600 mb-2">50+</div>
              <div className="text-gray-600 font-semibold">Countries</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-extrabold text-orange-500 mb-2">100+</div>
              <div className="text-gray-600 font-semibold">Articles</div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default AboutUs

