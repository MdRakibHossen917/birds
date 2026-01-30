import { Helmet } from 'react-helmet-async'
import { useState, useEffect } from 'react'
import SkeletonLoader from '../components/SkeletonLoader.jsx'

function AllBirds() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1200)
    return () => clearTimeout(timer)
  }, [])

  const allBirds = [
    { name: 'Parrot', emoji: '🦜', description: 'Colorful and intelligent birds known for their ability to mimic sounds.', habitat: 'Tropical regions', diet: 'Seeds, fruits, nuts' },
    { name: 'Eagle', emoji: '🦅', description: 'Majestic birds of prey with incredible vision and hunting skills.', habitat: 'Mountains, forests', diet: 'Small mammals, fish' },
    { name: 'Owl', emoji: '🦉', description: 'Nocturnal birds with exceptional night vision and silent flight.', habitat: 'Forests, grasslands', diet: 'Small rodents, insects' },
    { name: 'Peacock', emoji: '🦚', description: 'Beautiful birds known for their stunning colorful tail feathers.', habitat: 'Forests, grasslands', diet: 'Seeds, insects, plants' },
    { name: 'Flamingo', emoji: '🦩', description: 'Elegant pink birds found in tropical and subtropical regions.', habitat: 'Lakes, lagoons', diet: 'Algae, shrimp, small fish' },
    { name: 'Hummingbird', emoji: '🐦', description: 'Tiny birds with rapid wing beats and ability to hover in place.', habitat: 'Tropical forests', diet: 'Nectar, small insects' },
    { name: 'Penguin', emoji: '🐧', description: 'Flightless birds adapted for life in water with excellent swimming abilities.', habitat: 'Antarctica, coasts', diet: 'Fish, krill, squid' },
    { name: 'Swan', emoji: '🦢', description: 'Graceful waterfowl known for their elegance and long necks.', habitat: 'Lakes, rivers', diet: 'Aquatic plants, small fish' },
    { name: 'Toucan', emoji: '🦜', description: 'Colorful birds with large, vibrant bills found in rainforests.', habitat: 'Tropical rainforests', diet: 'Fruits, insects, eggs' },
    { name: 'Robin', emoji: '🐦', description: 'Small songbirds with distinctive red breasts, common in gardens.', habitat: 'Gardens, woodlands', diet: 'Worms, insects, berries' },
    { name: 'Cardinal', emoji: '🐦', description: 'Bright red songbirds with distinctive crests and beautiful songs.', habitat: 'Woodlands, gardens', diet: 'Seeds, fruits, insects' },
    { name: 'Blue Jay', emoji: '🐦', description: 'Intelligent birds with blue feathers and loud, distinctive calls.', habitat: 'Forests, parks', diet: 'Nuts, seeds, insects' },
    { name: 'Sparrow', emoji: '🐦', description: 'Small, common birds found in urban and rural areas worldwide.', habitat: 'Urban, rural areas', diet: 'Seeds, insects' },
    { name: 'Crow', emoji: '🐦', description: 'Highly intelligent black birds known for problem-solving abilities.', habitat: 'Various habitats', diet: 'Omnivorous' },
    { name: 'Dove', emoji: '🕊️', description: 'Peaceful birds symbolizing peace and love, gentle in nature.', habitat: 'Urban, rural areas', diet: 'Seeds, grains' },
    { name: 'Hawk', emoji: '🦅', description: 'Powerful birds of prey with sharp talons and excellent hunting skills.', habitat: 'Open areas, forests', diet: 'Small birds, mammals' },
    { name: 'Falcon', emoji: '🦅', description: 'Fastest birds in the world, known for incredible speed in flight.', habitat: 'Open areas, cliffs', diet: 'Small birds, rodents' },
    { name: 'Woodpecker', emoji: '🐦', description: 'Birds with strong beaks for drilling into trees to find insects.', habitat: 'Forests, woodlands', diet: 'Insects, tree sap' },
  ]

  return (
    <>
      <Helmet>
        <title>All Birds - Bird Aviary | Complete Bird Species Collection</title>
        <meta name="description" content="Explore our complete collection of bird species from around the world. Learn about different birds, their habitats, diets, and characteristics." />
        <meta name="keywords" content="all birds, bird species, bird collection, bird database, types of birds" />
      </Helmet>
      <div className="bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-12 lg:mb-16">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-black mb-4 md:mb-6">
              All <span className="text-orange-500">Bird Species</span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-orange-500 mx-auto mb-4 md:mb-6"></div>
            <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Explore our complete collection of fascinating bird species from around the world
            </p>
          </div>

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 lg:gap-8">
              <SkeletonLoader type="card" count={18} />
            </div>
          ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 lg:gap-8">
            {allBirds.map((bird, index) => (
              <div
                key={index}
                className="group bg-white rounded shadow-lg p-5 md:p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="text-center mb-4 md:mb-5">
                  <div className="text-5xl md:text-6xl mb-2 md:mb-3 transform group-hover:scale-110 transition-transform duration-300">
                    {bird.emoji}
                  </div>
                  <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-black mb-2 md:mb-3">
                    {bird.name}
                  </h3>
                </div>
                <p className="text-gray-600 text-sm md:text-base mb-4 md:mb-5 leading-relaxed">{bird.description}</p>
                <div className="space-y-2 text-sm md:text-base">
                  <div className="flex items-start">
                    <span className="text-blue-600 font-semibold mr-2 min-w-[70px] md:min-w-[80px]">Habitat:</span>
                    <span className="text-gray-600">{bird.habitat}</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-orange-500 font-semibold mr-2 min-w-[70px] md:min-w-[80px]">Diet:</span>
                    <span className="text-gray-600">{bird.diet}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          )}
        </div>
      </div>
    </>
  )
}

export default AllBirds

