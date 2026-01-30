import { Helmet } from 'react-helmet-async'
import { useState, useEffect } from 'react'
import SkeletonLoader from '../components/SkeletonLoader.jsx'

function Award() {
  const [yearsCount, setYearsCount] = useState(0)
  const [awardsCount, setAwardsCount] = useState(0)
  const [certificationsCount, setCertificationsCount] = useState(0)
  const [loading, setLoading] = useState(true)

  const awards = [
    {
      id: 1,
      title: 'National Loverbird Championship 2025',
      organization: 'National Bird Championship Association',
      year: '2025',
      description: 'Achieved excellence in the National Loverbird Championship, showcasing outstanding breeding quality and exceptional bird care standards in competitive aviculture.',
      icon: '🏆',
      color: 'from-yellow-400 to-orange-500'
    },
    {
      id: 2,
      title: 'Best Aviary Care Excellence Award 2024',
      organization: 'International Bird Conservation Society',
      year: '2024',
      description: 'Recognized for outstanding contribution to bird care and conservation practices, setting industry standards for aviary management and bird welfare.',
      icon: '⭐',
      color: 'from-blue-500 to-purple-600'
    },
    {
      id: 3,
      title: 'Excellence in Bird Breeding Certification',
      organization: 'Global Avian Professionals Association',
      year: '2023',
      description: 'Certified for exceptional breeding programs and maintaining high standards of genetic diversity and bird health across multiple species.',
      icon: '⭐',
      color: 'from-blue-500 to-purple-600'
    },
    {
      id: 4,
      title: 'Community Education Achievement Award',
      organization: 'Wildlife Education Foundation',
      year: '2023',
      description: 'Honored for outstanding educational initiatives that promote bird conservation awareness and responsible pet bird ownership in local communities.',
      icon: '📚',
      color: 'from-green-500 to-teal-600'
    },
    {
      id: 5,
      title: 'Innovation in Aviculture Technology',
      organization: 'Modern Aviculture Association',
      year: '2022',
      description: 'Recognized for innovative approaches to aviary design, bird monitoring systems, and technology integration in bird care management.',
      icon: '💡',
      color: 'from-pink-500 to-rose-600'
    },
    {
      id: 6,
      title: 'Species Conservation Excellence',
      organization: 'Endangered Species Protection Council',
      year: '2022',
      description: 'Awarded for significant contributions to the conservation of endangered bird species through breeding programs and habitat preservation efforts.',
      icon: '🦜',
      color: 'from-orange-500 to-red-600'
    }
  ]

  const certifications = [
    {
      name: 'Certified Avian Specialist',
      issuer: 'International Association of Avian Professionals',
      year: '2024',
      credential: 'CAS-2024-001'
    },
    {
      name: 'Advanced Bird Breeding Certification',
      issuer: 'Global Aviculture Board',
      year: '2023',
      credential: 'ABBC-2023-045'
    },
    {
      name: 'Avian Veterinary Care Certificate',
      issuer: 'Avian Medicine Institute',
      year: '2023',
      credential: 'AVCC-2023-089'
    },
    {
      name: 'Wildlife Conservation Specialist',
      issuer: 'World Wildlife Conservation Council',
      year: '2022',
      credential: 'WCS-2022-156'
    }
  ]

  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setLoading(false)
    }, 1200)

    const duration = 20000
    const steps = 60
    const interval = duration / steps
    const targetYears = 15
    const targetAwards = awards.length
    const targetCertifications = certifications.length

    let currentStep = 0

    const timer = setInterval(() => {
      currentStep++
      const progress = currentStep / steps

      setYearsCount(Math.floor(targetYears * progress))
      setAwardsCount(Math.floor(targetAwards * progress))
      setCertificationsCount(Math.floor(targetCertifications * progress))

      if (currentStep >= steps) {
        setYearsCount(targetYears)
        setAwardsCount(targetAwards)
        setCertificationsCount(targetCertifications)
        clearInterval(timer)
      }
    }, interval)

    return () => {
      clearInterval(timer)
      clearTimeout(loadingTimer)
    }

    return () => clearInterval(timer)
  }, [awards.length, certifications.length])

  return (
    <>
      <Helmet>
        <title>Awards & Achievements - HK Aviary BD | Recognitions & Certifications</title>
        <meta name="description" content="Explore our awards, certifications, and achievements in bird care, conservation, and aviculture excellence. Recognized leaders in avian welfare and education." />
        <meta name="keywords" content="awards, certifications, bird care awards, aviary excellence, avian conservation, bird breeding certification" />
      </Helmet>
      {loading ? (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <SkeletonLoader type="header" count={1} />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <SkeletonLoader type="card" count={6} />
            </div>
          </div>
        </div>
      ) : (
      <div className="min-h-screen">
        <div 
          className="relative text-white overflow-visible award-hero-bg"
          style={{
            backgroundImage: 'url(https://i.ibb.co.com/NgXMJSzj/532175900-753674787251147-2563688260797249794-n.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center top',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'scroll',
            height: '80vh',
            minHeight: '500px',
            filter: 'brightness(1.05) contrast(1.1)'
          }}
        >
          <style>{`
            .award-hero-bg {
              background-size: cover;
              background-position: center top;
              background-attachment: fixed;
              image-rendering: -webkit-optimize-contrast;
              image-rendering: crisp-edges;
            }
            @media (min-width: 768px) {
              .award-hero-bg {
                background-size: 105% auto !important;
                background-position: center top !important;
              }
            }
            @media (min-width: 1024px) {
              .award-hero-bg {
                background-size: 110% auto !important;
                background-position: center top !important;
              }
            }
            @media (min-width: 1280px) {
              .award-hero-bg {
                background-size: 115% auto !important;
                background-position: center top !important;
              }
            }
          `}</style>
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/70 via-blue-600/60 to-orange-500/70"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-end z-10">
          </div>

          <div className="hidden lg:block absolute bottom-0 right-4 xl:right-8 z-30" style={{ transform: 'translateY(50%)' }}>
            <div className="bg-white/20 backdrop-blur-md rounded shadow-2xl p-5 md:p-6 lg:p-8 border-2 border-white/30 w-80 lg:w-96 xl:w-[28rem]">
              <p className="text-base md:text-lg lg:text-xl xl:text-2xl font-semibold text-black text-center whitespace-nowrap drop-shadow-lg">
                Champion of Excellence in Aviculture
              </p>
            </div>
          </div>
        </div>

        <div className="hidden lg:block h-32 xl:h-36"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 md:pt-12 lg:pt-16 pb-12 md:pb-16 lg:pb-20">
          <div className="bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50 rounded shadow-2xl p-6 md:p-8 lg:p-10 xl:p-12 mb-12 md:mb-16 border-4 border-yellow-400 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
            
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
                <div className="flex-shrink-0">
                  <div className="relative">
                    <img 
                      src="https://i.ibb.co.com/Kc43XtLf/513957320-719384884013471-1840928253361452718-n.jpg" 
                      alt="Champion - Rare Mutation Category"
                      className="w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-xl object-cover border-4 border-white shadow-2xl"
                    />
                    <div className="absolute -top-3 -right-3 md:-top-4 md:-right-4 bg-yellow-400 text-white px-3 py-1.5 md:px-4 md:py-2 rounded-full font-bold text-xs md:text-sm shadow-lg transform rotate-12">
                      🏆 Champion
                    </div>
                  </div>
                </div>
                
                <div className="flex-1 text-center md:text-left">
                  <div className="mb-3 md:mb-4">
                    <span className="inline-block bg-yellow-400 text-gray-900 px-3 md:px-4 py-1.5 md:py-2 rounded-full font-bold text-xs md:text-sm mb-3 md:mb-4">
                      2025 Champion
                    </span>
                  </div>
                  <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-black mb-4 md:mb-6 leading-tight">
                    Rare Mutation Category Winner
                  </h2>
                  <p className="text-sm md:text-base lg:text-lg xl:text-xl text-gray-700 leading-relaxed mb-4 md:mb-6 font-medium">
                    By the grace of Allah, I have become the champion in the Rare Mutation category at the Love Bird Championship Bangladesh 2025, organized by the Lovebird Supporters of Bangladesh.
                  </p>
                  <div className="mt-4 md:mt-6">
                    <span className="inline-block bg-white text-blue-600 px-5 md:px-6 py-2 md:py-3 rounded-full font-semibold text-sm md:text-base shadow-lg">
                      Lovebird Supporters of Bangladesh
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-black mb-4 md:mb-6">
              Our Awards & Achievements
            </h2>
            <div className="flex items-center justify-center gap-3 mb-4 md:mb-6">
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-orange-500"></div>
              <span className="bg-gradient-to-r from-blue-600 to-orange-500 text-white px-4 py-1.5 rounded-full font-bold text-sm md:text-base shadow-lg">
                {awards.length} Awards
              </span>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-orange-500"></div>
            </div>
            <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              Recognized excellence in bird care, conservation, and aviculture. 
              Our commitment to quality and innovation has been honored by leading organizations worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16 lg:mb-20">
            {awards.map((award) => (
              <div 
                key={award.id}
                className="group relative bg-white rounded shadow-xl p-6 md:p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100 overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${award.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded`}></div>
                
                <div className="relative mb-5 md:mb-6">
                  <div className={`w-16 h-16 md:w-20 md:h-20 mx-auto bg-gradient-to-br ${award.color} rounded-full flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg`}>
                    <div className="text-3xl md:text-4xl transform group-hover:scale-110 transition-transform duration-300">
                      {award.icon}
                    </div>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="flex items-center justify-between mb-3 md:mb-4">
                    <span className="text-xs md:text-sm font-semibold text-blue-600 bg-blue-50 px-2 md:px-3 py-1 rounded-full">
                      {award.year}
                    </span>
                    <span className="text-xs font-medium text-gray-500">
                      {award.organization.split(' ')[0]}
                    </span>
                  </div>
                  
                  <h3 className="text-base md:text-lg lg:text-xl font-bold text-black mb-3 md:mb-4 line-clamp-2">
                    {award.title}
                  </h3>
                  
                  <p className="text-gray-600 text-xs md:text-sm lg:text-base leading-relaxed mb-3 md:mb-4 line-clamp-3">
                    {award.description}
                  </p>
                  
                  <div className="text-xs md:text-sm text-gray-500 italic">
                    {award.organization}
                  </div>
                </div>

                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${award.color} rounded-full -mr-16 -mt-16 opacity-5 group-hover:opacity-10 transition-opacity duration-500`}></div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-gray-50 via-blue-50 to-orange-50 rounded p-8 md:p-10 lg:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
            
            <div className="relative z-10">
              <div className="text-center mb-10 md:mb-12">
                <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-black mb-4 md:mb-6">
                  Professional Certifications
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-orange-500 mx-auto mb-4 md:mb-6"></div>
                <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
                  Our team maintains the highest professional standards through continuous education and certification.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                {certifications.map((cert, index) => (
                  <div 
                    key={index}
                    className="group bg-white rounded p-5 md:p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-l-4 border-blue-500 relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 w-24 h-24 bg-blue-100 rounded-full -mr-12 -mt-12 opacity-50 group-hover:opacity-75 transition-opacity"></div>
                    <div className="relative">
                      <div className="mb-3 md:mb-4">
                        <div className="flex-1">
                          <h3 className="text-base md:text-lg lg:text-xl xl:text-2xl font-bold text-black mb-2">
                            {cert.name}
                          </h3>
                          <p className="text-gray-600 text-xs md:text-sm lg:text-base mb-2">{cert.issuer}</p>
                        </div>
                      </div>
                      <div className="flex items-center justify-between gap-2 text-xs md:text-sm text-gray-500">
                        <div className="flex items-center gap-2">
                          <span className="font-medium">Credential ID:</span>
                          <span className="font-mono bg-gray-100 px-2 py-1 rounded">{cert.credential}</span>
                        </div>
                        <span className="text-xs md:text-sm font-semibold text-blue-600 bg-blue-50 px-2 md:px-3 py-1 rounded-full whitespace-nowrap flex-shrink-0">
                          {cert.year}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white rounded p-6 shadow-lg text-center transform hover:scale-105 transition-transform duration-300">
              <div className="text-4xl font-extrabold bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent mb-2">
                {yearsCount}+
              </div>
              <div className="text-gray-600 font-medium">Years of Excellence</div>
            </div>
            <div className="bg-white rounded p-6 shadow-lg text-center transform hover:scale-105 transition-transform duration-300">
              <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent mb-2">
                {awardsCount}
              </div>
              <div className="text-sm sm:text-base md:text-lg text-gray-600 font-medium">Awards Received</div>
            </div>
            <div className="bg-white rounded p-6 shadow-lg text-center transform hover:scale-105 transition-transform duration-300">
              <div className="text-4xl font-extrabold bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent mb-2">
                {certificationsCount}
              </div>
              <div className="text-gray-600 font-medium">Certifications</div>
            </div>
            <div className="bg-white rounded p-6 shadow-lg text-center transform hover:scale-105 transition-transform duration-300">
              <div className="text-4xl font-extrabold bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent mb-2">
                100%
              </div>
              <div className="text-gray-600 font-medium">Compliance Rate</div>
            </div>
          </div>
        </div>
      </div>
      )}
    </>
  )
}

export default Award

