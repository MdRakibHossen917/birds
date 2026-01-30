import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router'
import { useState, useEffect } from 'react'
import SkeletonLoader from '../components/SkeletonLoader.jsx'

function LoveBirds() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1200)
    return () => clearTimeout(timer)
  }, [])

  const loveBirds = [
    {
      id: 1,
      name: 'Lovebird',
      mainImage: 'https://i.ibb.co.com/rVc1CPT/481908573-637099218908705-4380355355270839962-n.jpg',
      detailPage: '/lovebird/1',
      color: 'Various Colors',
      description: 'Beautiful and affectionate lovebirds perfect for companionship'
    },
    {
      id: 2,
      name: 'White Blue Parrot',
      mainImage: 'https://i.ibb.co.com/nM5bDmMp/541736819-771776712107621-4979564611869472147-n.jpg',
      detailPage: '/lovebird/2',
      color: 'White & Blue',
      description: 'Stunning white and blue color variation of lovebirds'
    },
    {
      id: 3,
      name: 'Red Yellow Lovebird',
      mainImage: 'https://i.ibb.co.com/ccymqrw2/523376996-738266118792014-5345568049304194449-n.jpg',
      detailPage: '/lovebird/3',
      color: 'Red & Yellow',
      description: 'Vibrant red and yellow colored lovebirds with beautiful plumage'
    },
    {
      id: 4,
      name: 'Baby Lovebirds',
      mainImage: 'https://i.ibb.co.com/zHZTCH50/484897377-642552788363348-5330246655922834583-n.jpg',
      detailPage: '/lovebird/4',
      color: 'Mixed Colors',
      description: 'Adorable baby lovebirds ready for new homes'
    }
  ]

  return (
    <>
      <Helmet>
        <title>Lovebirds - HK Aviary BD | Beautiful Companion Birds</title>
        <meta name="description" content="Explore our collection of beautiful lovebirds. Find detailed information, images, and specifications for different lovebird varieties." />
        <meta name="keywords" content="lovebirds, pet birds, companion birds, bird species, bird details" />
      </Helmet>
      <div className="bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-12 lg:mb-16">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-black mb-4 md:mb-6">
              Lovebirds
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-orange-500 mx-auto mb-4 md:mb-6"></div>
            <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Discover our beautiful collection of lovebirds with detailed specifications and multiple angle views
            </p>
          </div>

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              <SkeletonLoader type="card" count={4} />
            </div>
          ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {loveBirds.map((bird) => (
              <Link 
                key={bird.id}
                to={bird.detailPage}
                className="group bg-white rounded shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={bird.mainImage} 
                    alt={bird.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-5 md:p-6">
                  <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-black mb-2 md:mb-3">
                    {bird.name}
                  </h3>
                  <p className="text-xs md:text-sm text-blue-600 font-semibold mb-2 md:mb-3">
                    {bird.color}
                  </p>
                  <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-6 line-clamp-2">
                    {bird.description}
                  </p>
                  <div className="flex items-center text-sm md:text-base text-blue-600 font-semibold">
                    View Details
                    <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          )}
        </div>
      </div>
    </>
  )
}

export default LoveBirds

