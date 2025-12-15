import { Helmet } from 'react-helmet-async'

function Blogs() {
  const blogPosts = [
    {
      title: 'Understanding Bird Migration Patterns',
      date: 'March 15, 2024',
      excerpt: 'Discover how birds navigate thousands of miles during migration seasons and the fascinating science behind their journeys.',
      category: 'Migration'
    },
    {
      title: 'Best Practices for Pet Bird Care',
      date: 'March 10, 2024',
      excerpt: 'Essential tips for keeping your pet birds healthy, happy, and well-cared for in your home environment.',
      category: 'Care'
    },
    {
      title: 'Rare Bird Species Around the World',
      date: 'March 5, 2024',
      excerpt: 'Explore some of the most rare and endangered bird species and learn about conservation efforts to protect them.',
      category: 'Conservation'
    },
    {
      title: 'Bird Watching Guide for Beginners',
      date: 'February 28, 2024',
      excerpt: 'A comprehensive guide to get started with bird watching, including equipment recommendations and best practices.',
      category: 'Bird Watching'
    },
    {
      title: 'Creating a Bird-Friendly Garden',
      date: 'February 20, 2024',
      excerpt: 'Learn how to transform your garden into a haven for local bird species with the right plants and feeders.',
      category: 'Gardening'
    },
    {
      title: 'The Intelligence of Corvids',
      date: 'February 15, 2024',
      excerpt: 'Discover the remarkable intelligence of crows, ravens, and other corvid species and their problem-solving abilities.',
      category: 'Science'
    }
  ]

  return (
    <>
      <Helmet>
        <title>Blogs - Bird Aviary | Bird Articles & Insights</title>
        <meta name="description" content="Read latest articles, insights, and stories about birds, bird migration, care tips, and conservation efforts." />
        <meta name="keywords" content="bird blog, bird articles, bird migration, bird care tips, bird conservation" />
      </Helmet>
      <div className="bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-800 mb-4">Bird Blog</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Latest articles, insights, and stories about the fascinating world of birds
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article 
              key={index} 
              className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              <div className="h-48 bg-gradient-to-br from-blue-500 to-orange-500 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all duration-300"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-blue-600 text-xs font-bold px-3 py-1.5 rounded-full">
                    {post.category}
                  </span>
                </div>
                <div className="absolute bottom-4 right-4 text-white/80 text-sm font-medium">
                  {post.date}
                </div>
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
                <button className="inline-flex items-center text-blue-600 hover:text-orange-500 font-semibold group-hover:gap-2 transition-all duration-300">
                  Read More
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
      </div>
    </>
  )
}

export default Blogs

