import { Link } from 'react-router'
import lovebirdsImage from '../assets/LoveBirds/484012358_642550928363534_4935449803921063486_n.jpg'

function Header() {
  return (
    <div 
      className="relative text-white overflow-hidden"
      style={{
        backgroundImage: `url(${lovebirdsImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/80 via-blue-600/70 to-orange-500/80"></div>
      

      {/* Hero Section */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
            Welcome to <span className="text-orange-300">Bird Aviary</span>
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Discover the fascinating world of birds, their habitats, and comprehensive care guides. 
            Join thousands of bird enthusiasts worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/birds"
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-500 hover:text-white transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 text-center"
            >
              Explore Birds
            </Link>
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header

