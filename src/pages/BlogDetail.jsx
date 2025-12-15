import { Helmet } from 'react-helmet-async'
import { useParams, Link } from 'react-router'

function BlogDetail() {
  const { id } = useParams()
  
  const blogPosts = {
    1: {
      id: 1,
      title: 'Quality green Fisher',
      date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
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
    2: {
      id: 2,
      title: 'Split split and split',
      date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
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
    3: {
      id: 3,
      title: 'Blue euwing Opaline',
      date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
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
  }

  const post = blogPosts[id] || blogPosts[1]

  // Parse markdown-style content
  const parseContent = (content) => {
    const sections = content.split('\n\n## ').map((section, index) => {
      if (index === 0) {
        return { type: 'paragraph', content: section.trim() }
      }
      const [heading, ...rest] = section.split('\n')
      return {
        type: 'section',
        heading: heading.trim(),
        content: rest.join('\n').trim()
      }
    })

    return sections
  }

  const contentSections = parseContent(post.fullContent)

  return (
    <>
      <Helmet>
        <title>{post.title} - HK Aviary BD | Blog Details</title>
        <meta name="description" content={post.fullContent.substring(0, 160)} />
      </Helmet>
      <div className="bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <Link 
            to="/blogs"
            className="inline-flex items-center text-blue-600 hover:text-orange-500 mb-8 font-semibold transition-colors"
          >
            <span className="mr-2">←</span>
            Back to Blogs
          </Link>

          {/* Main Image */}
          <div className="mb-8 rounded-xl overflow-hidden shadow-2xl">
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-96 object-cover"
            />
          </div>

          {/* Header */}
          <div className="bg-white rounded-xl shadow-xl p-8 mb-8">
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="bg-blue-100 text-blue-600 text-sm font-bold px-4 py-2 rounded-full">
                {post.category}
              </span>
              {post.nfs && (
                <span className="bg-red-500 text-white text-sm font-bold px-4 py-2 rounded-full">
                  NFS
                </span>
              )}
              <span className="text-gray-500 text-sm font-medium">
                {post.date}
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800 mb-6">
              {post.title}
            </h1>
          </div>

          {/* Content */}
          <div className="bg-white rounded-xl shadow-xl p-8 mb-8">
            <div className="prose prose-lg max-w-none">
              {contentSections.map((section, index) => (
                <div key={index} className="mb-8">
                  {section.type === 'paragraph' && (
                    <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed mb-6 whitespace-pre-line">
                      {section.content}
                    </p>
                  )}
                  {section.type === 'section' && (
                    <>
                      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 mt-8 first:mt-0">
                        {section.heading}
                      </h2>
                      <div className="text-base sm:text-lg text-gray-700 leading-relaxed whitespace-pre-line">
                        {section.content.split('\n').map((line, lineIndex) => {
                          // Handle bullet points
                          if (line.startsWith('- ') || line.startsWith('* ')) {
                            return (
                              <div key={lineIndex} className="flex items-start mb-2 ml-4">
                                <span className="text-blue-600 mr-2">•</span>
                                <span>{line.substring(2)}</span>
                              </div>
                            )
                          }
                          // Handle bold text
                          if (line.includes('**')) {
                            const parts = line.split('**')
                            return (
                              <p key={lineIndex} className="mb-4">
                                {parts.map((part, partIndex) => 
                                  partIndex % 2 === 1 ? (
                                    <strong key={partIndex} className="text-gray-900 font-semibold">{part}</strong>
                                  ) : (
                                    <span key={partIndex}>{part}</span>
                                  )
                                )}
                              </p>
                            )
                          }
                          return line.trim() ? (
                            <p key={lineIndex} className="mb-4">{line}</p>
                          ) : null
                        })}
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BlogDetail

