import { Helmet } from 'react-helmet-async'
import Header from '../components/Header.jsx'

function Home() {
  const popularBirds = [
    { name: 'Parrot', emoji: '🦜', description: 'Colorful and intelligent birds known for their ability to mimic sounds.', color: 'from-blue-500 to-blue-600' },
    { name: 'Eagle', emoji: '🦅', description: 'Majestic birds of prey with incredible vision and hunting skills.', color: 'from-orange-500 to-orange-600' },
    { name: 'Owl', emoji: '🦉', description: 'Nocturnal birds with exceptional night vision and silent flight.', color: 'from-blue-500 to-blue-600' },
    { name: 'Peacock', emoji: '🦚', description: 'Beautiful birds known for their stunning colorful tail feathers.', color: 'from-orange-500 to-orange-600' },
    { name: 'Flamingo', emoji: '🦩', description: 'Elegant pink birds found in tropical and subtropical regions.', color: 'from-blue-500 to-blue-600' },
    { name: 'Hummingbird', emoji: '🐦', description: 'Tiny birds with rapid wing beats and ability to hover in place.', color: 'from-orange-500 to-orange-600' },
  ]

  return (
    <>
      <Helmet>
        <title>Home - Bird Aviary | Discover Bird Species & Care Guides</title>
        <meta name="description" content="Discover the fascinating world of birds, their habitats, and comprehensive care guides. Explore popular bird species and learn essential bird care tips." />
        <meta name="keywords" content="birds, bird species, bird care, bird aviary, pet birds, bird watching" />
      </Helmet>
      <div className="min-h-screen">
        <Header />
      
      {/* Popular Birds Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-800 mb-4">
            Popular <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">Bird Species</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-orange-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore our collection of fascinating bird species from around the world. 
            Discover their unique characteristics and learn how to care for them.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {popularBirds.map((bird, index) => (
            <div 
              key={index} 
              className="group relative bg-white rounded-xl shadow-xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100 overflow-hidden"
            >
              {/* Gradient Background on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${bird.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-xl`}></div>
              
              {/* Icon Container */}
              <div className="relative mb-6">
                <div className="w-24 h-24 mx-auto bg-gradient-to-br from-blue-50 to-orange-50 rounded-full flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <div className="text-6xl transform group-hover:scale-110 transition-transform duration-300">
                    {bird.emoji}
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="relative">
                <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center group-hover:text-blue-600 transition-colors duration-300">
                  {bird.name}
                </h3>
                <p className="text-gray-600 text-center leading-relaxed mb-6">{bird.description}</p>
                <div className="text-center">
                  <button className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-orange-500 text-white font-semibold rounded-full hover:from-blue-700 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                    Learn More
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bird Care Tips Section */}
      <div className="bg-gradient-to-br from-gray-50 via-blue-50 to-orange-50 py-24 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-5xl">💡</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-800 mb-4">
              Bird <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">Care Tips</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-orange-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Essential guidelines to keep your feathered friends healthy and happy. 
              Follow these expert tips for the best care.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group bg-white rounded-xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-l-4 border-blue-500 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-full -mr-16 -mt-16 opacity-50 group-hover:opacity-75 transition-opacity"></div>
              <div className="relative">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center text-3xl mr-4 shadow-lg transform group-hover:rotate-6 transition-transform">
                    🍎
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">Feeding</h3>
                </div>
                <ul className="space-y-4 text-gray-600">
                  <li className="flex items-start group/item">
                    <span className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center mr-3 flex-shrink-0 text-sm font-bold mt-0.5">✓</span>
                    <span className="group-hover/item:text-blue-600 transition-colors">Provide fresh water daily and change it regularly</span>
                  </li>
                  <li className="flex items-start group/item">
                    <span className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center mr-3 flex-shrink-0 text-sm font-bold mt-0.5">✓</span>
                    <span className="group-hover/item:text-blue-600 transition-colors">Offer a variety of seeds, fruits, and vegetables</span>
                  </li>
                  <li className="flex items-start group/item">
                    <span className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center mr-3 flex-shrink-0 text-sm font-bold mt-0.5">✓</span>
                    <span className="group-hover/item:text-blue-600 transition-colors">Avoid feeding chocolate, avocado, or caffeine</span>
                  </li>
                  <li className="flex items-start group/item">
                    <span className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center mr-3 flex-shrink-0 text-sm font-bold mt-0.5">✓</span>
                    <span className="group-hover/item:text-blue-600 transition-colors">Clean food dishes regularly to prevent bacteria</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="group bg-white rounded-xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-l-4 border-orange-500 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-100 rounded-full -mr-16 -mt-16 opacity-50 group-hover:opacity-75 transition-opacity"></div>
              <div className="relative">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center text-3xl mr-4 shadow-lg transform group-hover:rotate-6 transition-transform">
                    🏠
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">Housing</h3>
                </div>
                <ul className="space-y-4 text-gray-600">
                  <li className="flex items-start group/item">
                    <span className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center mr-3 flex-shrink-0 text-sm font-bold mt-0.5">✓</span>
                    <span className="group-hover/item:text-orange-600 transition-colors">Ensure adequate cage size for your bird's species</span>
                  </li>
                  <li className="flex items-start group/item">
                    <span className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center mr-3 flex-shrink-0 text-sm font-bold mt-0.5">✓</span>
                    <span className="group-hover/item:text-orange-600 transition-colors">Provide perches of different sizes and materials</span>
                  </li>
                  <li className="flex items-start group/item">
                    <span className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center mr-3 flex-shrink-0 text-sm font-bold mt-0.5">✓</span>
                    <span className="group-hover/item:text-orange-600 transition-colors">Keep cage clean and well-ventilated</span>
                  </li>
                  <li className="flex items-start group/item">
                    <span className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center mr-3 flex-shrink-0 text-sm font-bold mt-0.5">✓</span>
                    <span className="group-hover/item:text-orange-600 transition-colors">Place cage away from drafts and direct sunlight</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="group bg-white rounded-xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-l-4 border-blue-500 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-full -mr-16 -mt-16 opacity-50 group-hover:opacity-75 transition-opacity"></div>
              <div className="relative">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center text-3xl mr-4 shadow-lg transform group-hover:rotate-6 transition-transform">
                    💊
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">Health</h3>
                </div>
                <ul className="space-y-4 text-gray-600">
                  <li className="flex items-start group/item">
                    <span className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center mr-3 flex-shrink-0 text-sm font-bold mt-0.5">✓</span>
                    <span className="group-hover/item:text-blue-600 transition-colors">Schedule regular veterinary check-ups</span>
                  </li>
                  <li className="flex items-start group/item">
                    <span className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center mr-3 flex-shrink-0 text-sm font-bold mt-0.5">✓</span>
                    <span className="group-hover/item:text-blue-600 transition-colors">Watch for signs of illness or distress</span>
                  </li>
                  <li className="flex items-start group/item">
                    <span className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center mr-3 flex-shrink-0 text-sm font-bold mt-0.5">✓</span>
                    <span className="group-hover/item:text-blue-600 transition-colors">Provide opportunities for exercise and flight</span>
                  </li>
                  <li className="flex items-start group/item">
                    <span className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center mr-3 flex-shrink-0 text-sm font-bold mt-0.5">✓</span>
                    <span className="group-hover/item:text-blue-600 transition-colors">Maintain proper hygiene and cleanliness</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="group bg-white rounded-xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-l-4 border-orange-500 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-100 rounded-full -mr-16 -mt-16 opacity-50 group-hover:opacity-75 transition-opacity"></div>
              <div className="relative">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center text-3xl mr-4 shadow-lg transform group-hover:rotate-6 transition-transform">
                    ❤️
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">Socialization</h3>
                </div>
                <ul className="space-y-4 text-gray-600">
                  <li className="flex items-start group/item">
                    <span className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center mr-3 flex-shrink-0 text-sm font-bold mt-0.5">✓</span>
                    <span className="group-hover/item:text-orange-600 transition-colors">Spend quality time with your bird daily</span>
                  </li>
                  <li className="flex items-start group/item">
                    <span className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center mr-3 flex-shrink-0 text-sm font-bold mt-0.5">✓</span>
                    <span className="group-hover/item:text-orange-600 transition-colors">Provide toys for mental stimulation</span>
                  </li>
                  <li className="flex items-start group/item">
                    <span className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center mr-3 flex-shrink-0 text-sm font-bold mt-0.5">✓</span>
                    <span className="group-hover/item:text-orange-600 transition-colors">Train with positive reinforcement techniques</span>
                  </li>
                  <li className="flex items-start group/item">
                    <span className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center mr-3 flex-shrink-0 text-sm font-bold mt-0.5">✓</span>
                    <span className="group-hover/item:text-orange-600 transition-colors">Understand your bird's body language and signals</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default Home

