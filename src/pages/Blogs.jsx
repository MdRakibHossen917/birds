import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router'

function Blogs() {
  const blogPosts = [
    {
      id: 1,
      title: 'Quality green Fisher',
      date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
      excerpt: 'Discover the exceptional quality and beauty of the green Fisher lovebird, a premium breed known for its vibrant coloration and outstanding genetic traits.',
      category: 'Lovebirds',
      image: 'https://i.ibb.co.com/ycgrQf3s/600338437-852980050653953-3439632037202857044-n-1.jpg',
      nfs: true,
      fullContent: `The Quality Green Fisher lovebird is one of the most sought-after color mutations in the lovebird breeding community. This exceptional bird showcases a brilliant green coloration that is both vibrant and consistent throughout its plumage.

## Characteristics

The Green Fisher mutation is characterized by its stunning emerald-green body coloration, which is more intense and saturated than standard green lovebirds. The bird features a beautiful contrast between its green body and the characteristic Fischer's lovebird facial pattern, creating a visually striking appearance.

## Genetic Traits

This particular mutation requires specific genetic combinations to achieve the quality green coloration. Breeders must carefully select parent birds with the correct genetic makeup to produce this exceptional color variety. The quality of the green pigmentation can vary, and the bird shown here represents the premium quality standard.

## Care and Maintenance

Quality Green Fisher lovebirds require the same care as other lovebird species, but special attention should be paid to maintaining their vibrant coloration through proper nutrition. A diet rich in beta-carotene and other color-enhancing nutrients helps maintain the intensity of the green pigmentation.

## Breeding Considerations

Breeding Quality Green Fisher lovebirds requires expertise in color genetics. Successful breeders understand the inheritance patterns and can predict the outcomes of specific pairings. This particular bird represents the pinnacle of quality in the Green Fisher mutation.

## Availability

This bird is currently marked as NFS (Not For Sale) and is part of our breeding program. It represents the high standards we maintain at HK Aviary BD for producing exceptional quality lovebirds.`
    },
    {
      id: 2,
      title: 'Split split and split',
      date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
      excerpt: 'Explore the fascinating world of split pattern lovebirds, where multiple genetic mutations combine to create unique and stunning visual patterns.',
      category: 'Lovebirds',
      image: 'https://i.ibb.co.com/3yDyg6Hy/596822923-848867471065211-2203380465008517511-n.jpg',
      nfs: true,
      fullContent: `The "Split split and split" refers to a lovebird that carries multiple recessive mutations in a split (heterozygous) state. This genetic combination is highly valued by breeders because it allows for the production of various color mutations in future generations.

## Understanding Split Genetics

A "split" bird carries a recessive gene mutation without visually expressing it. When a bird is described as "split split and split," it means it carries three different recessive mutations simultaneously. These mutations can be passed on to offspring, potentially creating new and exciting color combinations.

## Common Split Combinations

This particular bird may carry splits for mutations such as:
- Blue mutation
- Lutino mutation
- Opaline mutation
- Or other popular color mutations

The specific combinations depend on the genetic testing and breeding history of the parent birds.

## Breeding Potential

Birds with multiple splits are extremely valuable in breeding programs because they can produce various color mutations when paired with appropriate mates. Breeders carefully track these genetic combinations to predict breeding outcomes and create desired color varieties.

## Visual Appearance

While the bird may appear normal in color, the genetic potential hidden within makes it a breeding gem. Experienced breeders can identify split birds through genetic testing or careful observation of breeding results.

## Importance in Breeding Programs

At HK Aviary BD, we maintain detailed genetic records of all our breeding birds. Split birds are essential for expanding our color mutation program and producing the diverse range of lovebird varieties that enthusiasts seek.

## Care Requirements

Split birds require the same excellent care as any other lovebird. Proper nutrition, housing, and veterinary care ensure they remain healthy and productive members of our breeding program.`
    },
    {
      id: 3,
      title: 'Blue euwing Opaline',
      date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
      excerpt: 'Marvel at the stunning Blue Euwing Opaline lovebird, a rare combination that showcases the beauty of genetic mutations in avian breeding.',
      category: 'Lovebirds',
      image: 'https://i.ibb.co.com/VpLv0DsF/558169051-793255899959702-6165382997387845026-n.jpg',
      nfs: true,
      fullContent: `The Blue Euwing Opaline lovebird represents one of the most beautiful and complex color mutations in the lovebird world. This bird combines three distinct mutations: Blue, Euwing (European Clearwing), and Opaline, creating a truly exceptional appearance.

## Mutation Breakdown

**Blue Mutation**: Removes the yellow pigment (psittacin), resulting in a blue base color.

**Euwing (European Clearwing)**: Creates a lighter, more diluted body color while maintaining deeper colors on the flight feathers and tail.

**Opaline**: Alters the feather pattern, creating a V-shaped pattern on the back and changing the head coloration.

## Visual Characteristics

This combination produces a lovebird with:
- A light blue to powder blue body color
- Deeper blue flight feathers and tail (characteristic of Euwing)
- Modified feather patterns typical of Opaline mutation
- A unique and elegant overall appearance

## Genetic Complexity

Producing a Blue Euwing Opaline requires careful genetic planning. All three mutations must be present and properly combined:
- The bird must be homozygous or heterozygous for blue
- Must carry the Euwing mutation
- Must carry the Opaline mutation

This genetic combination is relatively rare and requires experienced breeders to achieve consistently.

## Breeding Challenges

Breeding Blue Euwing Opaline lovebirds presents several challenges:
- All three mutations must be present in the breeding pair
- Understanding inheritance patterns is crucial
- Some combinations may produce unexpected results
- Requires multiple generations of careful breeding

## Rarity and Value

Due to the genetic complexity and visual appeal, Blue Euwing Opaline lovebirds are highly valued among collectors and breeders. They represent the pinnacle of color mutation breeding in lovebirds.

## Care and Health

Like all lovebirds, these birds require:
- Proper nutrition with color-enhancing supplements
- Adequate space for exercise
- Mental stimulation through toys and interaction
- Regular health check-ups
- Clean living environment

## Our Breeding Program

At HK Aviary BD, we specialize in producing high-quality color mutations like the Blue Euwing Opaline. This bird represents our commitment to excellence in lovebird breeding and genetic diversity.`
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-black mb-4 md:mb-6">Bird Blog</h1>
          <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Latest articles, insights, and stories about the fascinating world of birds
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {blogPosts.map((post, index) => (
            <article 
              key={index} 
              className="group bg-white rounded shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              <div className="h-48 relative overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all duration-300"></div>
                <div className="absolute bottom-4 right-4 text-white text-sm font-medium bg-black/50 backdrop-blur-sm px-3 py-1.5 rounded-full">
                  {post.date}
                </div>
              </div>
              <div className="p-5 md:p-6">
                <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-black mb-3 md:mb-4 line-clamp-2">
                  {post.title}
                </h2>
                <p className="text-sm md:text-base lg:text-lg text-gray-600 mb-5 md:mb-6 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
                <Link 
                  to={`/blog/${post.id}`}
                  className="inline-flex items-center text-sm md:text-base text-blue-600 hover:text-orange-500 font-semibold group-hover:gap-2 transition-all duration-300"
                >
                  Read More
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </Link>
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

