import { Link } from 'react-router'

function Header() {
  const lovebirdsImage = 'https://i.ibb.co.com/WNpcbnhT/484012358-642550928363534-4935449803921063486-n.jpg'
  
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
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="text-left max-w-3xl">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight">
            Your Ultimate Guide to <span className="text-orange-300">Bird Care</span> & Conservation
          </h1>
          <p className="text-xl md:text-2xl mb-4 text-blue-100 leading-relaxed">
            Explore hundreds of bird species, learn expert care tips, and join a community passionate about protecting our feathered friends.
          </p>
          <p className="text-lg md:text-xl mb-10 text-blue-200 leading-relaxed">
            From lovebirds to eagles, discover everything you need to know about birds and their habitats.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-start">
            <Link 
              to="/birds"
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-500 hover:text-white transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 text-center"
            >
              Explore All Birds
            </Link>
            <Link
              to="/blogs"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 text-center"
            >
              Read Our Blogs
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header

