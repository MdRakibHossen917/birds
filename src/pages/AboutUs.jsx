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
          <h1 className="text-3xl md:text-6xl font-extrabold text-gray-800 mb-6">
            About <span className="text-blue-600">HK Aviary BD</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We are passionate about birds and dedicated to providing comprehensive information 
            about bird species, their care, habitats, and conservation.
          </p>
        </div>

        {/* Mission Section */}
        <div className="bg-white rounded-xl shadow-xl p-10 mb-12 border border-gray-100">
          <div className="flex items-center mb-6">
            <div className="text-5xl mr-4">🎯</div>
            <h2 className="text-3xl font-bold text-gray-800">Our Mission</h2>
          </div>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            At Bird Aviary, our mission is to educate and inspire bird enthusiasts while promoting 
            the protection and well-being of birds worldwide. We believe that through knowledge and 
            community, we can make a significant impact on bird conservation and appreciation.
          </p>
          
          <div className="bg-gradient-to-r from-blue-50 to-orange-50 rounded-xl p-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">What We Do</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0 font-bold">✓</div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Species Information</h4>
                  <p className="text-gray-600">Detailed information about various bird species from around the world</p>
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
            <div className="flex items-center mb-6">
              <div className="text-4xl mr-4">💎</div>
              <h3 className="text-2xl font-bold text-gray-800">Our Values</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-blue-600 mr-3 text-xl">🌿</span>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Conservation</h4>
                  <p className="text-gray-600">Protection and conservation of bird species worldwide</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-3 text-xl">📚</span>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Education</h4>
                  <p className="text-gray-600">Knowledge sharing and continuous learning</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3 text-xl">🌍</span>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Respect</h4>
                  <p className="text-gray-600">Respect for wildlife and nature</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-3 text-xl">🤝</span>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Community</h4>
                  <p className="text-gray-600">Building a supportive community of bird lovers</p>
                </div>
              </li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-blue-600 to-orange-500 rounded-xl shadow-xl p-8 text-white hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex items-center mb-6">
              <div className="text-4xl mr-4">🚀</div>
              <h3 className="text-2xl font-bold">Join Us</h3>
            </div>
            <p className="mb-6 leading-relaxed text-blue-100">
              Whether you're a seasoned bird watcher or just starting your journey into the world of 
              birds, we welcome you to explore, learn, and share your passion with our community.
            </p>
            <p className="mb-8 leading-relaxed text-blue-100">
              Together, we can make a difference in the lives of birds and contribute to their 
              conservation for future generations.
            </p>
            <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold hover:bg-orange-50 hover:text-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Get Started Today
            </button>
          </div>
        </div>

        {/* Founder/Owner Section */}
        <div className="bg-white rounded-xl shadow-xl p-10 mb-12 border border-gray-100">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">Founder</h3>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-orange-500 mx-auto"></div>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="bg-gradient-to-r from-blue-50 to-orange-50 rounded-xl p-8 text-center">
              <div className="mb-4">
                <span className="text-5xl">👤</span>
              </div>
              <h4 className="text-2xl font-bold text-gray-800 mb-2">Md.Humaiyun Kabir </h4>
              <p className="text-lg text-gray-700 font-semibold mb-1">Ground Services Assistant</p>
              <p className="text-lg text-blue-600 font-semibold mb-4">Biman Bangladesh Airlines</p>
              <p className="text-gray-600">Dhaka,Bangladesh</p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-white rounded-xl shadow-xl p-10 border border-gray-100">
          <h3 className="text-3xl font-bold text-gray-800 text-center mb-10">Our Impact</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-extrabold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600 font-semibold">Bird Species</div>
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

