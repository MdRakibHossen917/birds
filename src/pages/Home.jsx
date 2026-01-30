import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router'
import { useState, useEffect } from 'react'
import Header from '../components/Header.jsx'
import SkeletonLoader from '../components/SkeletonLoader.jsx'

function Home() {
  const [loadedImages, setLoadedImages] = useState({})
  const [currentSlide, setCurrentSlide] = useState(0)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)
  const [loading, setLoading] = useState(true)

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = (e) => {
    setTouchEnd(e.changedTouches[0].clientX)
    handleSwipe()
  }

  const handleSwipe = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50
    
    if (isLeftSwipe) {
      setCurrentSlide((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1))
    }
    if (isRightSwipe) {
      setCurrentSlide((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1))
    }
  }

  const galleryImages = [
    { src: new URL('../assets/LoveBirds/birds3.jpg', import.meta.url).href, id: 'img1', mutation: 'Yellow-face Blue' },
    { src: new URL('../assets/LoveBirds/birds4.jpg', import.meta.url).href, id: 'img2', mutation: 'Cobalt Blue' },
    { src: new URL('../assets/LoveBirds/birds5.jpg', import.meta.url).href, id: 'img3', mutation: 'Parblue Fischer' },
    { src: new URL('../assets/LoveBirds/birds6.jpg', import.meta.url).href, id: 'img4', mutation: 'Green Fischer' },
    { src: new URL('../assets/LoveBirds/birds7.jpg', import.meta.url).href, id: 'img5', mutation: 'Lutino Fischer' },
    { src: new URL('../assets/LoveBirds/birds10.jpg', import.meta.url).href, id: 'img6', mutation: 'Pastel Blue' },
    { src: new URL('../assets/LoveBirds/birds11.jpg', import.meta.url).href, id: 'img7', mutation: 'Violet Cobalt' },
    { src: new URL('../assets/LoveBirds/loveBirds2.jpg', import.meta.url).href, id: 'img8', mutation: 'Wild Type Green' },
    { src: new URL('../assets/LoveBirds/Perblue fisher.jpg', import.meta.url).href, id: 'img9', mutation: 'Perblue Fischer' },
  ]

  const handleImageLoad = (imageId) => {
    setLoadedImages(prev => ({ ...prev, [imageId]: true }))
  }

  useEffect(() => {
    // Simulate content loading
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1500)
    return () => clearTimeout(timer)
  }, [])

  const popularBirds = [
    { 
      name: 'Upcoming Champion', 
      image: new URL('../assets/LoveBirds/41.jpg', import.meta.url).href,
      badge: 'Title Holder',
      badgeColor: 'bg-orange-500',
      description: 'Upcoming Title Holder - Exceptional beauty and quality, ready to take the crown.', 
      color: 'from-orange-500 to-orange-600',
      link: '/lovebird/2'
    },
   { 
      name: 'Opaline Fischer Violet Pied', 
      image: new URL('../assets/LoveBirds/45.jpg', import.meta.url).href,
      badge: 'Exotic Pair',
      badgeColor: 'bg-purple-500',
      description: 'A stunning pair featuring a Green Opaline Fischer and a Violet Pied mutation, both showcasing perfect eye-rings.', 
      color: 'from-blue-500 to-green-600',
      link: '/lovebird/4'
    },
    { 
      name: 'perblue opaline', 
      image: new URL('../assets/LoveBirds/51.jpg', import.meta.url).href,
      badge: 'Best in Show',
      badgeColor: 'bg-yellow-500',
      description: 'Quality perblue opaline baby ( Mango Head)', 
      color: 'from-purple-500 to-blue-600',
      link: '/lovebird/5'
    },
    { 
      name: 'Perblue fisher', 
      image: new URL('../assets/LoveBirds/birds3.jpg', import.meta.url).href,
      badge: 'Elite Selection',
      badgeColor: 'bg-yellow-400',
      description: 'A vibrant mutation featuring a solid bright yellow body, a striking deep red mask, and the signature bold white eye-ring.', 
      color: 'from-yellow-400 to-orange-500',
      link: '/lovebird/lutino-fischer'
    },
   { 
  name: 'Green opaline', 
  image: new URL('../assets/LoveBirds/Birds35.jpg', import.meta.url).href,
  badge: 'Wild Type',
  badgeColor: 'bg-green-600',
  description: 'Classic wild-type green opaline with a bright orange-red mask and bold white eye-ring', 
  color: 'from-green-500 to-emerald-700',
  link: '/lovebird/standard-green'
},
{ 
  name: 'Parblue Fischer', 
  image: new URL('../assets/LoveBirds/44.jpg', import.meta.url).href,
  badge: 'Exotic Pastel',
  badgeColor: 'bg-blue-500',
  description: 'A beautiful blue-series mutation with a soft yellow-to-peach mask, turquoise/cobalt body feathers, and a prominent white eye-ring.', 
  color: 'from-cyan-500 to-blue-700',
  link: '/lovebird/parblue-fischer'
}
    
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
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-6 lg:py-6">
        {loading ? (
          <div className="mb-12 md:mb-16">
            <SkeletonLoader type="header" count={1} />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-12">
              <SkeletonLoader type="card" count={6} />
            </div>
          </div>
        ) : (
          <>
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-black mb-4 md:mb-6">
            Popular Bird Species
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-orange-500 mx-auto mb-6 md:mb-8"></div>
          <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            Explore our collection of fascinating bird species from around the world. 
            Discover their unique characteristics and learn how to care for them.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {popularBirds.map((bird, index) => (
            <Link
              key={index}
              to={bird.link}
              className="group relative bg-white rounded shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100 overflow-hidden block flex flex-col"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${bird.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded`}></div>
              
              <div className="relative h-64 overflow-hidden rounded-t flex-shrink-0 shadow-lg shadow-black/10">
                <img 
                  src={bird.image} 
                  alt={bird.name}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {bird.badge && (
                  <div className={`absolute top-4 right-4 ${bird.badgeColor} text-white px-4 py-2 rounded-full text-xs sm:text-sm font-bold shadow-lg transform group-hover:scale-110 transition-transform backdrop-blur-lg bg-opacity-80 border border-white/40 drop-shadow-lg`}>
                    {bird.badge}
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="relative p-5 md:p-6 lg:p-8 flex flex-col flex-grow">
                <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-black mb-3 md:mb-4 text-center">
                  {bird.name}
                </h3>
                <p className="text-xs md:text-sm lg:text-base text-gray-600 text-center leading-relaxed mb-4 md:mb-4 line-clamp-3 flex-grow">{bird.description}</p>
                <div className="text-center mt-auto">
                  <div className="inline-flex items-center gap-2 px-5 md:px-6 py-2.5 md:py-3 border-2 border-blue-600 text-blue-600 font-semibold text-sm md:text-base rounded-xl hover:border-orange-600 hover:text-orange-600 transition-all duration-300 transform hover:scale-105 cursor-pointer">
                    View Details
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
          </>
        )}
      </div>

      {/* Photo Gallery Slider Section */}
      <div className="bg-white py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 md:mb-12">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-black mb-4 md:mb-6">
            Wings of Nature
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-orange-500 mx-auto mb-6 md:mb-8"></div>
            <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
             Explore our beautiful collection of lovebirds captured in stunning moments
            </p>
          </div>
        </div>
        
        {loading ? (
          <div className="max-w-6xl mx-auto px-4">
            <SkeletonLoader type="gallery" count={1} />
          </div>
        ) : (
        <>
        {/* Slider Container */}
        <div className="relative max-w-6xl mx-auto px-4">
          {/* Main Slider */}
          <div className="relative overflow-hidden rounded-2xl shadow-2xl" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
            <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
              {galleryImages.map((image, index) => (
                <div key={index} className="w-full flex-shrink-0 relative">
                  <div className="relative h-96 md:h-[500px] overflow-hidden">
                    {!loadedImages[`slider-${image.id}`] && (
                      <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse z-10">
                        <div className="w-full h-full flex items-center justify-center">
                          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                        </div>
                      </div>
                    )}
                    <img 
                      src={image.src}
                      alt={image.mutation} 
                      loading="lazy"
                      onLoad={() => setLoadedImages(prev => ({ ...prev, [`slider-${image.id}`]: true }))}
                      className={`w-full h-full object-cover transition-transform duration-500 ${
                        !loadedImages[`slider-${image.id}`] ? 'opacity-0' : 'opacity-100'
                      }`}
                    />
                    
                    {/* Mutation Info Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex items-end justify-center pb-8">
                      <div className="text-center px-4">
                        <h4 className="text-white font-bold text-2xl md:text-3xl mb-2">{image.mutation}</h4>
                        <p className="text-white/90 text-base md:text-lg font-medium">Premium Quality Bird</p>
                      </div>
                    </div>

                    {/* Love Icon */}
                    <div className="absolute top-4 right-4 z-30">
                      <svg className="w-7 h-7 text-red-500" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Previous Button */}
            <button
              onClick={() => setCurrentSlide((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1))}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20"
              aria-label="Previous slide"
            >
            </button>

            {/* Next Button */}
            <button
              onClick={() => setCurrentSlide((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1))}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20"
              aria-label="Next slide"
            >
            </button>
          </div>

          {/* Slider Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-blue-600 w-8'
                    : 'bg-gray-300 hover:bg-gray-400 w-3'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
        </>
        )}
      </div>

      <div className="bg-gradient-to-br from-gray-50 via-blue-50 to-orange-50 py-16 md:py-20 lg:py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-black mb-4 md:mb-6">
              Bird Care Tips
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-orange-500 mx-auto mb-6 md:mb-8"></div>
            <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              Essential guidelines to keep your feathered friends healthy and happy. 
              Follow these expert tips for the best care.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className="group bg-white rounded p-6 md:p-8 lg:p-10 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-l-4 border-blue-500 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-full -mr-16 -mt-16 opacity-50 group-hover:opacity-75 transition-opacity"></div>
              <div className="relative">
                <div className="flex items-center mb-5 md:mb-6">
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded flex items-center justify-center text-2xl md:text-3xl mr-3 md:mr-4 shadow-lg transform group-hover:rotate-6 transition-transform">
                    🍎
                  </div>
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-black">Feeding</h3>
                </div>
                <ul className="space-y-3 md:space-y-4 text-gray-600">
                  <li className="flex items-start group/item">
                    <span className="w-5 h-5 md:w-6 md:h-6 bg-blue-500 text-white rounded-full flex items-center justify-center mr-3 flex-shrink-0 text-xs md:text-sm font-bold mt-0.5">✓</span>
                    <span className="text-sm md:text-base lg:text-lg group-hover/item:text-blue-600 transition-colors">Provide fresh water daily and change it regularly</span>
                  </li>
                  <li className="flex items-start group/item">
                    <span className="w-5 h-5 md:w-6 md:h-6 bg-blue-500 text-white rounded-full flex items-center justify-center mr-3 flex-shrink-0 text-xs md:text-sm font-bold mt-0.5">✓</span>
                    <span className="text-sm md:text-base lg:text-lg group-hover/item:text-blue-600 transition-colors">Offer a variety of seeds, fruits, and vegetables</span>
                  </li>
                  <li className="flex items-start group/item">
                    <span className="w-5 h-5 md:w-6 md:h-6 bg-blue-500 text-white rounded-full flex items-center justify-center mr-3 flex-shrink-0 text-xs md:text-sm font-bold mt-0.5">✓</span>
                    <span className="text-sm md:text-base lg:text-lg group-hover/item:text-blue-600 transition-colors">Avoid feeding chocolate, avocado, or caffeine</span>
                  </li>
                  <li className="flex items-start group/item">
                    <span className="w-5 h-5 md:w-6 md:h-6 bg-blue-500 text-white rounded-full flex items-center justify-center mr-3 flex-shrink-0 text-xs md:text-sm font-bold mt-0.5">✓</span>
                    <span className="text-sm md:text-base lg:text-lg group-hover/item:text-blue-600 transition-colors">Clean food dishes regularly to prevent bacteria</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="group bg-white rounded p-6 md:p-8 lg:p-10 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-l-4 border-orange-500 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-100 rounded-full -mr-16 -mt-16 opacity-50 group-hover:opacity-75 transition-opacity"></div>
              <div className="relative">
                <div className="flex items-center mb-5 md:mb-6">
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded flex items-center justify-center text-2xl md:text-3xl mr-3 md:mr-4 shadow-lg transform group-hover:rotate-6 transition-transform">
                    🏠
                  </div>
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-black">Housing</h3>
                </div>
                <ul className="space-y-3 md:space-y-4 text-gray-600">
                  <li className="flex items-start group/item">
                    <span className="w-5 h-5 md:w-6 md:h-6 bg-orange-500 text-white rounded-full flex items-center justify-center mr-3 flex-shrink-0 text-xs md:text-sm font-bold mt-0.5">✓</span>
                    <span className="text-sm md:text-base lg:text-lg group-hover/item:text-orange-600 transition-colors">Ensure adequate cage size for your bird's species</span>
                  </li>
                  <li className="flex items-start group/item">
                    <span className="w-5 h-5 md:w-6 md:h-6 bg-orange-500 text-white rounded-full flex items-center justify-center mr-3 flex-shrink-0 text-xs md:text-sm font-bold mt-0.5">✓</span>
                    <span className="text-sm md:text-base lg:text-lg group-hover/item:text-orange-600 transition-colors">Provide perches of different sizes and materials</span>
                  </li>
                  <li className="flex items-start group/item">
                    <span className="w-5 h-5 md:w-6 md:h-6 bg-orange-500 text-white rounded-full flex items-center justify-center mr-3 flex-shrink-0 text-xs md:text-sm font-bold mt-0.5">✓</span>
                    <span className="text-sm md:text-base lg:text-lg group-hover/item:text-orange-600 transition-colors">Keep cage clean and well-ventilated</span>
                  </li>
                  <li className="flex items-start group/item">
                    <span className="w-5 h-5 md:w-6 md:h-6 bg-orange-500 text-white rounded-full flex items-center justify-center mr-3 flex-shrink-0 text-xs md:text-sm font-bold mt-0.5">✓</span>
                    <span className="text-sm md:text-base lg:text-lg group-hover/item:text-orange-600 transition-colors">Place cage away from drafts and direct sunlight</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="group bg-white rounded p-6 md:p-8 lg:p-10 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-l-4 border-blue-500 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-full -mr-16 -mt-16 opacity-50 group-hover:opacity-75 transition-opacity"></div>
              <div className="relative">
                <div className="flex items-center mb-5 md:mb-6">
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded flex items-center justify-center text-2xl md:text-3xl mr-3 md:mr-4 shadow-lg transform group-hover:rotate-6 transition-transform">
                    💊
                  </div>
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-black">Health</h3>
                </div>
                <ul className="space-y-3 md:space-y-4 text-gray-600">
                  <li className="flex items-start group/item">
                    <span className="w-5 h-5 md:w-6 md:h-6 bg-blue-500 text-white rounded-full flex items-center justify-center mr-3 flex-shrink-0 text-xs md:text-sm font-bold mt-0.5">✓</span>
                    <span className="text-sm md:text-base lg:text-lg group-hover/item:text-blue-600 transition-colors">Schedule regular veterinary check-ups</span>
                  </li>
                  <li className="flex items-start group/item">
                    <span className="w-5 h-5 md:w-6 md:h-6 bg-blue-500 text-white rounded-full flex items-center justify-center mr-3 flex-shrink-0 text-xs md:text-sm font-bold mt-0.5">✓</span>
                    <span className="text-sm md:text-base lg:text-lg group-hover/item:text-blue-600 transition-colors">Watch for signs of illness or distress</span>
                  </li>
                  <li className="flex items-start group/item">
                    <span className="w-5 h-5 md:w-6 md:h-6 bg-blue-500 text-white rounded-full flex items-center justify-center mr-3 flex-shrink-0 text-xs md:text-sm font-bold mt-0.5">✓</span>
                    <span className="text-sm md:text-base lg:text-lg group-hover/item:text-blue-600 transition-colors">Provide opportunities for exercise and flight</span>
                  </li>
                  <li className="flex items-start group/item">
                    <span className="w-5 h-5 md:w-6 md:h-6 bg-blue-500 text-white rounded-full flex items-center justify-center mr-3 flex-shrink-0 text-xs md:text-sm font-bold mt-0.5">✓</span>
                    <span className="text-sm md:text-base lg:text-lg group-hover/item:text-blue-600 transition-colors">Maintain proper hygiene and cleanliness</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="group bg-white rounded p-6 md:p-8 lg:p-10 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-l-4 border-orange-500 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-100 rounded-full -mr-16 -mt-16 opacity-50 group-hover:opacity-75 transition-opacity"></div>
              <div className="relative">
                <div className="flex items-center mb-5 md:mb-6">
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded flex items-center justify-center text-2xl md:text-3xl mr-3 md:mr-4 shadow-lg transform group-hover:rotate-6 transition-transform">
                    ❤️
                  </div>
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-black">Socialization</h3>
                </div>
                <ul className="space-y-3 md:space-y-4 text-gray-600">
                  <li className="flex items-start group/item">
                    <span className="w-5 h-5 md:w-6 md:h-6 bg-orange-500 text-white rounded-full flex items-center justify-center mr-3 flex-shrink-0 text-xs md:text-sm font-bold mt-0.5">✓</span>
                    <span className="text-sm md:text-base lg:text-lg group-hover/item:text-orange-600 transition-colors">Spend quality time with your bird daily</span>
                  </li>
                  <li className="flex items-start group/item">
                    <span className="w-5 h-5 md:w-6 md:h-6 bg-orange-500 text-white rounded-full flex items-center justify-center mr-3 flex-shrink-0 text-xs md:text-sm font-bold mt-0.5">✓</span>
                    <span className="text-sm md:text-base lg:text-lg group-hover/item:text-orange-600 transition-colors">Provide toys for mental stimulation</span>
                  </li>
                  <li className="flex items-start group/item">
                    <span className="w-5 h-5 md:w-6 md:h-6 bg-orange-500 text-white rounded-full flex items-center justify-center mr-3 flex-shrink-0 text-xs md:text-sm font-bold mt-0.5">✓</span>
                    <span className="text-sm md:text-base lg:text-lg group-hover/item:text-orange-600 transition-colors">Train with positive reinforcement techniques</span>
                  </li>
                  <li className="flex items-start group/item">
                    <span className="w-5 h-5 md:w-6 md:h-6 bg-orange-500 text-white rounded-full flex items-center justify-center mr-3 flex-shrink-0 text-xs md:text-sm font-bold mt-0.5">✓</span>
                    <span className="text-sm md:text-base lg:text-lg group-hover/item:text-orange-600 transition-colors">Understand your bird's body language and signals</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
       {/* FAQ Section */}
      <div className="bg-white py-16 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-black mb-4 md:mb-6">
              Frequently Asked Questions
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-orange-500 mx-auto mb-6 md:mb-8"></div>
            <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              Find answers to common questions about our lovebirds and bird care
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-4">
            <details className="group bg-gradient-to-r from-blue-50 to-orange-50 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
              <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-lg md:text-xl text-gray-800">
                <span>What type of lovebirds do you have?</span>
                <span className="transform group-open:rotate-180 transition-transform duration-300 text-blue-600">▼</span>
              </summary>
              <div className="px-6 pb-6 text-gray-600 text-base md:text-lg leading-relaxed">
                We specialize in various types of lovebirds including Fischer's Lovebirds, Perblue Opaline, and other beautiful mutations. Each bird is carefully bred for quality and health.
              </div>
            </details>

            <details className="group bg-gradient-to-r from-blue-50 to-orange-50 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
              <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-lg md:text-xl text-gray-800">
                <span>How do I care for a lovebird?</span>
                <span className="transform group-open:rotate-180 transition-transform duration-300 text-blue-600">▼</span>
              </summary>
              <div className="px-6 pb-6 text-gray-600 text-base md:text-lg leading-relaxed">
                Lovebirds need a spacious cage, fresh water daily, a balanced diet of seeds, fruits, and vegetables, regular interaction, and proper veterinary care. They are social birds and thrive with attention and companionship.
              </div>
            </details>

            <details className="group bg-gradient-to-r from-blue-50 to-orange-50 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
              <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-lg md:text-xl text-gray-800">
                <span>Are lovebirds good pets for beginners?</span>
                <span className="transform group-open:rotate-180 transition-transform duration-300 text-blue-600">▼</span>
              </summary>
              <div className="px-6 pb-6 text-gray-600 text-base md:text-lg leading-relaxed">
                Yes! Lovebirds can be excellent pets for beginners. They are relatively easy to care for, have playful personalities, and don't require as much space as larger parrots. However, they do need daily attention and socialization.
              </div>
            </details>

            <details className="group bg-gradient-to-r from-blue-50 to-orange-50 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
              <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-lg md:text-xl text-gray-800">
                <span>How long do lovebirds live?</span>
                <span className="transform group-open:rotate-180 transition-transform duration-300 text-blue-600">▼</span>
              </summary>
              <div className="px-6 pb-6 text-gray-600 text-base md:text-lg leading-relaxed">
                With proper care, lovebirds can live 10-15 years on average. Some have been known to live even longer with excellent nutrition, veterinary care, and a stress-free environment.
              </div>
            </details>

            <details className="group bg-gradient-to-r from-blue-50 to-orange-50 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
              <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-lg md:text-xl text-gray-800">
                <span>Do lovebirds need to be in pairs?</span>
                <span className="transform group-open:rotate-180 transition-transform duration-300 text-blue-600">▼</span>
              </summary>
              <div className="px-6 pb-6 text-gray-600 text-base md:text-lg leading-relaxed">
                While lovebirds are known for forming strong pair bonds, a single lovebird can be perfectly happy with sufficient human interaction and attention. If you can't spend much time with your bird daily, keeping them in pairs is recommended.
              </div>
            </details>

            <details className="group bg-gradient-to-r from-blue-50 to-orange-50 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
              <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-lg md:text-xl text-gray-800">
                <span>What should I feed my lovebird?</span>
                <span className="transform group-open:rotate-180 transition-transform duration-300 text-blue-600">▼</span>
              </summary>
              <div className="px-6 pb-6 text-gray-600 text-base md:text-lg leading-relaxed">
                A balanced diet includes high-quality pellets, fresh vegetables (leafy greens, carrots, bell peppers), fruits in moderation, and some seeds. Avoid avocado, chocolate, caffeine, and salty foods as they are toxic to birds.
              </div>
            </details>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Home

