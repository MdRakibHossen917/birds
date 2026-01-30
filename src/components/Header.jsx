import { Link } from 'react-router'

function Header() {
  const headerBgImage = 'https://i.ibb.co.com/gbFX8RWs/logo-2.png'
  
  return (
    <div className="relative overflow-hidden bg-white h-auto lg:h-screen">
      <div className="relative h-auto lg:h-full flex flex-col lg:flex-row items-center justify-center z-10 py-8 lg:py-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-auto lg:h-full flex flex-col lg:grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
          <div className="lg:hidden w-full text-left space-y-4 px-4 pt-8" style={{ marginTop: '-25px' }}>
            <div className="space-y-3">
              <h1 className="text-2xl sm:text-4xl font-black leading-tight text-black">
                Bird Care, <span className="text-orange-500">Bird Species</span> & Conservation Guide
              </h1>
            </div>
            
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-medium">
              Explore bird species, expert bird care tips, and learn how to protect birds and nature.
            </p>
          </div>

          <div className="lg:hidden w-full px-4 pb-6">
            <div className="bg-white rounded-3xl shadow-2xl p-4 sm:p-6 space-y-6">
              <div className="relative w-full max-w-sm mx-auto h-64">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100/50 to-orange-100/50 rounded-3xl transform rotate-3"></div>
                <div className="absolute inset-0 bg-gradient-to-tr from-orange-100/50 to-blue-100/50 rounded-3xl transform -rotate-3"></div>
                <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-xl">
                  <img 
                    src="https://i.ibb.co.com/gbFX8RWs/logo-2.png"
                    alt="HK Aviary BD"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              <div className="flex flex-row gap-3 justify-center">
                <Link 
                  to="/lovebirds"
                  className="group relative bg-gradient-to-r from-orange-500 to-orange-600 text-black px-4 sm:px-5 py-3 rounded-xl font-bold text-xs sm:text-sm hover:bg-black transition-all duration-300 shadow-xl hover:shadow-black/50 transform hover:-translate-y-1 text-center overflow-hidden whitespace-nowrap"
                >
                  <span className="relative z-10 flex items-center justify-center gap-1 text-black">
                    Explore All Birds
                    <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </Link>
                <Link
                  to="/blogs"
                  className="group bg-white border-2 border-blue-600 text-black px-4 sm:px-5 py-3 rounded-xl font-bold text-xs sm:text-sm hover:bg-blue-600 hover:text-black hover:border-blue-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 text-center whitespace-nowrap"
                >
                  Read Our Blogs
                </Link>
              </div>
            </div>
          </div>

          <div className="hidden lg:block text-left space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-8 z-20 relative">
            <div className="space-y-3 sm:space-y-4">
              <h1 className="text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-black leading-tight text-black">
                Bird Care, <span className="text-orange-500">Bird Species</span> & Conservation Guide
              </h1>
              <div className="w-16 sm:w-20 md:w-24 h-0.5 sm:h-1 bg-gradient-to-r from-orange-500 to-blue-600 rounded-full"></div>
            </div>
            
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl text-gray-700 leading-relaxed font-medium max-w-2xl">
              Explore bird species, expert bird care tips, and learn how to protect birds and nature.
            </p>
            
            <div className="flex flex-row gap-2 sm:gap-3 md:gap-4 lg:gap-6 pt-2 sm:pt-3 md:pt-4 flex-wrap">
              <Link 
                to="/lovebirds"
                className="group relative bg-gradient-to-r from-orange-500 to-orange-600 text-black px-6 sm:px-8 md:px-10 lg:px-12 py-3 sm:py-4 md:py-5 rounded-xl font-bold text-sm sm:text-base md:text-lg lg:text-xl hover:bg-black transition-all duration-300 shadow-2xl hover:shadow-black/50 transform hover:-translate-y-2 text-center overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center gap-2 text-black">
                  Explore All Birds
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </Link>
              <Link
                to="/blogs"
                className="group bg-white border-2 sm:border-3 border-blue-600 text-black px-6 sm:px-8 md:px-10 lg:px-12 py-3 sm:py-4 md:py-5 rounded-xl font-bold text-sm sm:text-base md:text-lg lg:text-xl hover:bg-blue-600 hover:text-black hover:border-blue-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 text-center"
              >
                Read Our Blogs
              </Link>
            </div>
          </div>

          <div className="hidden lg:block relative   min-h-[500px]">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-full h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100/50 to-orange-100/50 rounded-3xl transform rotate-3"></div>
                <div className="absolute inset-0 bg-gradient-to-tr from-orange-100/50 to-blue-100/50 rounded-3xl transform -rotate-3"></div>
                <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl">
                  <img 
                    src={headerBgImage}
                    alt="HK Aviary BD"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header

