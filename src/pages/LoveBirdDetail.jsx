import { Helmet } from 'react-helmet-async'
import { useParams, Link } from 'react-router'
import { useState } from 'react'

function LoveBirdDetail() {
  const { id } = useParams()
  const [activeView, setActiveView] = useState('full')
  
  const loveBirdData = {
    1: {
      name: 'Lovebird - 2025 Champion',
      mainImage: 'https://i.ibb.co.com/mVYj3Jyy/513972978-719384907346802-5886751649123918036-n.jpg',
      angles: [
        {
          image: 'https://i.ibb.co.com/rVc1CPT/481908573-637099218908705-4380355355270839962-n.jpg',
          description: 'Head View',
          zoomFocus: 'head',
          position: { x: '50%', y: '20%' }
        },
        {
          image: 'https://i.ibb.co.com/nM5bDmMp/541736819-771776712107621-4979564611869472147-n.jpg',
          description: 'Wing View',
          zoomFocus: 'wing',
          position: { x: '30%', y: '40%' }
        },
        {
          image: 'https://i.ibb.co.com/ccymqrw2/523376996-738266118792014-5345568049304194449-n.jpg',
          description: 'Side View',
          zoomFocus: 'beak-leg',
          position: { x: '50%', y: '70%' }
        }
      ],
      specifications: {
        'Common Name': 'Lovebird - 2025 Champion',
        'Scientific Name': 'Agapornis',
        'Achievement': 'National Loverbird Championship 2025 Winner',
        'Lifespan': '10-15 years',
        'Size': '13-17 cm (5-7 inches)',
        'Weight': '40-60 grams',
        'Colors': 'White Blue, Red Yellow, Green, Peach, and more',
        'Temperament': 'Affectionate, Social, Active, Playful',
        'Diet': 'Seeds, fruits, vegetables, pellets',
        'Habitat': 'Wooded areas and savannas in Africa',
        'Cage Size': 'Minimum 24" x 18" x 18"',
        'Breeding Season': 'Year-round in captivity',
        'Eggs per Clutch': '4-6 eggs',
        'Incubation Period': '21-23 days'
      },
      care: [
        'Provide daily social interaction and playtime',
        'Offer a variety of fresh fruits and vegetables',
        'Ensure cage has multiple perches of different sizes',
        'Provide toys for mental stimulation',
        'Allow daily flight time outside cage',
        'Maintain clean environment and fresh water',
        'Regular health check-ups with avian veterinarian'
      ]
    },
    2: {
      name: 'Upcoming Champion - Title Holder',
      mainImage: 'https://i.ibb.co.com/hFdjK7mj/542047303-771751132110179-6116929702425819055-n.jpg',
      angles: [
        {
          image: 'https://i.ibb.co.com/nM5bDmMp/541736819-771776712107621-4979564611869472147-n.jpg',
          description: 'Head View',
          zoomFocus: 'head',
          position: { x: '50%', y: '20%' }
        },
        {
          image: 'https://i.ibb.co.com/rVc1CPT/481908573-637099218908705-4380355355270839962-n.jpg',
          description: 'Wing View',
          zoomFocus: 'wing',
          position: { x: '30%', y: '40%' }
        },
        {
          image: 'https://i.ibb.co.com/ccymqrw2/523376996-738266118792014-5345568049304194449-n.jpg',
          description: 'Side View',
          zoomFocus: 'beak-leg',
          position: { x: '50%', y: '70%' }
        }
      ],
      specifications: {
        'Common Name': 'Upcoming Champion',
        'Scientific Name': 'Agapornis roseicollis',
        'Status': 'Title Holder - Ready for Championship',
        'Lifespan': '10-15 years',
        'Size': '13-17 cm (5-7 inches)',
        'Weight': '40-60 grams',
        'Colors': 'White & Blue',
        'Temperament': 'Gentle, Calm, Affectionate, Social',
        'Diet': 'Seeds, fruits, vegetables, pellets',
        'Habitat': 'Domesticated, originally from Africa',
        'Cage Size': 'Minimum 24" x 18" x 18"',
        'Breeding Season': 'Year-round in captivity',
        'Eggs per Clutch': '4-6 eggs',
        'Incubation Period': '21-23 days'
      },
      care: [
        'Provide daily social interaction and playtime',
        'Offer a variety of fresh fruits and vegetables',
        'Ensure cage has multiple perches of different sizes',
        'Provide toys for mental stimulation',
        'Allow daily flight time outside cage',
        'Maintain clean environment and fresh water',
        'Regular health check-ups with avian veterinarian'
      ]
    },
    3: {
      name: 'Red Yellow Lovebird',
      mainImage: 'https://i.ibb.co.com/ccymqrw2/523376996-738266118792014-5345568049304194449-n.jpg',
      angles: [
        {
          image: 'https://i.ibb.co.com/rVc1CPT/481908573-637099218908705-4380355355270839962-n.jpg',
          description: 'Head View',
          zoomFocus: 'head',
          position: { x: '50%', y: '20%' }
        },
        {
          image: 'https://i.ibb.co.com/nM5bDmMp/541736819-771776712107621-4979564611869472147-n.jpg',
          description: 'Wing View',
          zoomFocus: 'wing',
          position: { x: '30%', y: '40%' }
        },
        {
          image: 'https://i.ibb.co.com/zHZTCH50/484897377-642552788363348-5330246655922834583-n.jpg',
          description: 'Full Body View',
          zoomFocus: 'beak-leg',
          position: { x: '50%', y: '70%' }
        }
      ],
      specifications: {
        'Common Name': 'Red Yellow Lovebird',
        'Scientific Name': 'Agapornis fischeri',
        'Lifespan': '10-15 years',
        'Size': '13-17 cm (5-7 inches)',
        'Weight': '40-60 grams',
        'Colors': 'Red & Yellow',
        'Temperament': 'Active, Playful, Energetic, Social',
        'Diet': 'Seeds, fruits, vegetables, pellets',
        'Habitat': 'Domesticated, originally from Africa',
        'Cage Size': 'Minimum 24" x 18" x 18"',
        'Breeding Season': 'Year-round in captivity',
        'Eggs per Clutch': '4-6 eggs',
        'Incubation Period': '21-23 days'
      },
      care: [
        'Provide daily social interaction and playtime',
        'Offer a variety of fresh fruits and vegetables',
        'Ensure cage has multiple perches of different sizes',
        'Provide toys for mental stimulation',
        'Allow daily flight time outside cage',
        'Maintain clean environment and fresh water',
        'Regular health check-ups with avian veterinarian'
      ]
    },
    4: {
      name: 'Baby Lovebirds - Next Big Thing',
      mainImage: 'https://i.ibb.co.com/WNpcbnhT/484012358-642550928363534-4935449803921063486-n.jpg',
      angles: [
        {
          image: 'https://i.ibb.co.com/zHZTCH50/484897377-642552788363348-5330246655922834583-n.jpg',
          description: 'Close-up View',
          zoomFocus: 'head',
          position: { x: '50%', y: '20%' }
        },
        {
          image: 'https://i.ibb.co.com/rVc1CPT/481908573-637099218908705-4380355355270839962-n.jpg',
          description: 'Group View',
          zoomFocus: 'wing',
          position: { x: '30%', y: '40%' }
        },
        {
          image: 'https://i.ibb.co.com/ccymqrw2/523376996-738266118792014-5345568049304194449-n.jpg',
          description: 'Side View',
          zoomFocus: 'beak-leg',
          position: { x: '50%', y: '70%' }
        }
      ],
      specifications: {
        'Common Name': 'Baby Lovebirds',
        'Scientific Name': 'Agapornis',
        'Status': 'Next Big Thing - Promising Potential',
        'Lifespan': '10-15 years',
        'Size': '10-13 cm (4-5 inches)',
        'Weight': '30-45 grams',
        'Colors': 'Mixed Colors',
        'Temperament': 'Curious, Playful, Energetic, Learning',
        'Diet': 'Soft seeds, fruits, vegetables, hand-feeding formula',
        'Habitat': 'Domesticated, needs special care',
        'Cage Size': 'Minimum 20" x 16" x 16"',
        'Age Range': '4-12 weeks old',
        'Special Care': 'Requires frequent feeding and warmth',
        'Potential': 'Bright future ahead'
      },
      care: [
        'Requires special baby bird care and frequent feeding',
        'Maintain warm environment (85-90°F)',
        'Provide soft food and formula if needed',
        'Ensure proper nest or cozy sleeping area',
        'Monitor health closely for growth issues',
        'Gradually introduce solid foods',
        'Regular health check-ups with avian veterinarian'
      ]
    }
  }

  const bird = loveBirdData[id] || loveBirdData[1]

  return (
    <>
      <Helmet>
        <title>{bird.name} Details - HK Aviary BD | Complete Specifications</title>
        <meta name="description" content={`Complete details, specifications, and care guide for ${bird.name}. View multiple angles and learn everything about these beautiful birds.`} />
      </Helmet>
      <div className="bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <Link 
            to="/lovebirds"
            className="inline-flex items-center text-blue-600 hover:text-orange-500 mb-8 font-semibold transition-colors"
          >
            <span className="mr-2">←</span>
            Back to Lovebirds
          </Link>

          {/* Main Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-800 mb-4">
              {bird.name} <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">Details</span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-orange-500 mx-auto"></div>
          </div>

          {/* Full View on Left, Zoomed Views on Right */}
          <div className="bg-white rounded-xl shadow-xl p-6 mb-8 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Left Side - Main Full Image */}
              <div className="rounded-xl overflow-hidden relative group">
                {activeView === 'full' ? (
                  <img 
                    src={bird.mainImage} 
                    alt={bird.name}
                    className="w-full h-full min-h-[600px] object-cover rounded-lg shadow-lg"
                  />
                ) : activeView === 'face-head' ? (
                  <div 
                    className="w-full min-h-[600px] rounded-lg overflow-hidden relative"
                    style={{
                      backgroundImage: `url(${bird.mainImage})`,
                      backgroundSize: '300%',
                      backgroundPosition: '50% 20%',
                      backgroundRepeat: 'no-repeat',
                    }}
                  >
                  </div>
                ) : activeView === 'beak-leg' ? (
                  <div 
                    className="w-full min-h-[600px] rounded-lg overflow-hidden relative"
                    style={{
                      backgroundImage: `url(${bird.mainImage})`,
                      backgroundSize: '300%',
                      backgroundPosition: '50% 75%',
                      backgroundRepeat: 'no-repeat',
                    }}
                  >
                  </div>
                ) : (
                  <div 
                    className="w-full min-h-[600px] rounded-lg overflow-hidden relative"
                    style={{
                      backgroundImage: `url(${bird.mainImage})`,
                      backgroundSize: '300%',
                      backgroundPosition: '40% 60%',
                      backgroundRepeat: 'no-repeat',
                    }}
                  >
                  </div>
                )}
                <div className="absolute top-4 left-4 bg-blue-600/90 text-white px-4 py-2 rounded-lg backdrop-blur-sm">
                  <p className="text-sm sm:text-base font-semibold">
                    {activeView === 'full' && 'Full View'}
                    {activeView === 'face-head' && 'Face & Head View'}
                    {activeView === 'wings-leg' && 'Wings & Leg View'}
                    {activeView === 'beak-leg' && 'Beak & Leg View'}
                  </p>
                </div>
              </div>

              {/* Right Side - 2 Zoomed Views */}
              <div className="space-y-4">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                  <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">Zoomed Views</span>
                </h2>
                
                {/* Face/Head Zoom View */}
                <div 
                  onClick={() => setActiveView('face-head')}
                  className={`rounded-xl overflow-hidden relative group cursor-pointer border-2 transition-all duration-300 shadow-lg hover:shadow-xl ${activeView === 'face-head' ? 'border-blue-500 ring-2 ring-blue-300' : 'border-gray-200 hover:border-blue-500'}`}
                >
                  <div 
                    className="w-full h-64 rounded-lg overflow-hidden relative"
                    style={{
                      backgroundImage: `url(${bird.mainImage})`,
                      backgroundSize: '300%',
                      backgroundPosition: '50% 20%',
                      backgroundRepeat: 'no-repeat',
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="text-white text-center font-semibold text-sm sm:text-base md:text-lg">Face & Head View</p>
                    </div>
                  </div>
                </div>

                {/* Wings & Leg Zoom View */}
                <div 
                  onClick={() => setActiveView('wings-leg')}
                  className={`rounded-xl overflow-hidden relative group cursor-pointer border-2 transition-all duration-300 shadow-lg hover:shadow-xl ${activeView === 'wings-leg' ? 'border-blue-500 ring-2 ring-blue-300' : 'border-gray-200 hover:border-blue-500'}`}
                >
                  <div 
                    className="w-full h-64 rounded-lg overflow-hidden relative"
                    style={{
                      backgroundImage: `url(${bird.mainImage})`,
                      backgroundSize: '300%',
                      backgroundPosition: '40% 60%',
                      backgroundRepeat: 'no-repeat',
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="text-white text-center font-semibold text-sm sm:text-base md:text-lg">Wings & Leg View</p>
                    </div>
                  </div>
                </div>

                {/* Beak & Leg Zoom View */}
                <div 
                  onClick={() => setActiveView('beak-leg')}
                  className={`rounded-xl overflow-hidden relative group cursor-pointer border-2 transition-all duration-300 shadow-lg hover:shadow-xl ${activeView === 'beak-leg' ? 'border-blue-500 ring-2 ring-blue-300' : 'border-gray-200 hover:border-blue-500'}`}
                >
                  <div 
                    className="w-full h-64 rounded-lg overflow-hidden relative"
                    style={{
                      backgroundImage: `url(${bird.mainImage})`,
                      backgroundSize: '300%',
                      backgroundPosition: '50% 75%',
                      backgroundRepeat: 'no-repeat',
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="text-white text-center font-semibold text-sm sm:text-base md:text-lg">Beak & Leg View</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Specifications and Details */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Specifications */}
            <div className="bg-white rounded-xl shadow-xl p-8">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">Specifications</span>
              </h2>
              <div className="space-y-4">
                {Object.entries(bird.specifications).map(([key, value]) => (
                  <div key={key} className="border-b border-gray-200 pb-4 last:border-0">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                      <span className="text-sm sm:text-base md:text-lg font-semibold text-gray-800 mb-1 sm:mb-0">
                        {key}:
                      </span>
                      <span className="text-sm sm:text-base md:text-lg text-gray-600 text-right">
                        {value}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Care Guide */}
            <div className="bg-white rounded-xl shadow-xl p-8">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">Care Guide</span>
              </h2>
              <ul className="space-y-4">
                {bird.care.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center mr-3 flex-shrink-0 text-sm font-bold mt-0.5">
                      ✓
                    </span>
                    <span className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Additional Information */}
          <div className="bg-gradient-to-r from-blue-50 to-orange-50 rounded-xl shadow-xl p-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center">
              Additional <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">Information</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3">About Lovebirds</h3>
                <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
                  Lovebirds are small, social parrots native to Africa. They are known for their affectionate behavior 
                  and strong pair bonds. These intelligent birds require social interaction and mental stimulation to thrive. 
                  They come in various beautiful color mutations including white-blue, red-yellow, green, and peach-faced varieties.
                </p>
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3">Why Choose Lovebirds?</h3>
                <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
                  Lovebirds make excellent companions due to their playful nature and ability to bond closely with their owners. 
                  They are relatively easy to care for and don't require as much space as larger parrots. Their vibrant colors 
                  and active personalities make them a joy to watch and interact with daily.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default LoveBirdDetail

