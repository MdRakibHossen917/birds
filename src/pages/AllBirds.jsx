import { Helmet } from 'react-helmet-async'

function AllBirds() {
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
      <div className="bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-800 mb-4">
              All <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">Bird Species</span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-orange-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our complete collection of fascinating bird species from around the world
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allBirds.map((bird, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="text-center mb-4">
                  <div className="text-6xl mb-3 transform group-hover:scale-110 transition-transform duration-300">
                    {bird.emoji}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                    {bird.name}
                  </h3>
                </div>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{bird.description}</p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start">
                    <span className="text-blue-600 font-semibold mr-2 min-w-[60px]">Habitat:</span>
                    <span className="text-gray-600">{bird.habitat}</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-orange-500 font-semibold mr-2 min-w-[60px]">Diet:</span>
                    <span className="text-gray-600">{bird.diet}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default AllBirds

