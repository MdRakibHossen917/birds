const SkeletonLoader = ({ type = 'card', count = 1, className = '' }) => {
  const skeletons = Array.from({ length: count }, (_, i) => i)

  const CardSkeleton = () => (
    <div className={`bg-white rounded shadow-lg p-5 md:p-6 border border-gray-100 ${className}`}>
      <div className="animate-pulse">
        {/* Image skeleton */}
        <div className="w-full h-48 md:h-56 lg:h-64 bg-gray-300 rounded mb-4"></div>
        
        {/* Title skeleton */}
        <div className="h-6 bg-gray-300 rounded w-3/4 mb-3"></div>
        
        {/* Description skeleton */}
        <div className="space-y-2 mb-4">
          <div className="h-4 bg-gray-300 rounded w-full"></div>
          <div className="h-4 bg-gray-300 rounded w-5/6"></div>
          <div className="h-4 bg-gray-300 rounded w-4/6"></div>
        </div>
        
        {/* Button skeleton */}
        <div className="h-10 bg-gray-300 rounded w-full"></div>
      </div>
    </div>
  )

  const TextSkeleton = () => (
    <div className={`animate-pulse space-y-3 ${className}`}>
      <div className="h-4 bg-gray-300 rounded w-full"></div>
      <div className="h-4 bg-gray-300 rounded w-11/12"></div>
      <div className="h-4 bg-gray-300 rounded w-10/12"></div>
      <div className="h-4 bg-gray-300 rounded w-9/12"></div>
    </div>
  )

  const HeaderSkeleton = () => (
    <div className={`animate-pulse text-center ${className}`}>
      <div className="h-10 md:h-12 lg:h-14 bg-gray-300 rounded w-3/4 mx-auto mb-4"></div>
      <div className="w-24 h-1 bg-gray-300 mx-auto mb-4"></div>
      <div className="h-5 bg-gray-300 rounded w-2/3 mx-auto"></div>
    </div>
  )

  const BlogCardSkeleton = () => (
    <div className={`bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 ${className}`}>
      <div className="animate-pulse">
        {/* Image skeleton */}
        <div className="w-full h-56 md:h-64 bg-gray-300"></div>
        
        <div className="p-5 md:p-6">
          {/* Category & Date skeleton */}
          <div className="flex items-center gap-3 mb-3">
            <div className="h-6 bg-gray-300 rounded w-20"></div>
            <div className="h-4 bg-gray-300 rounded w-24"></div>
          </div>
          
          {/* Title skeleton */}
          <div className="h-6 bg-gray-300 rounded w-full mb-3"></div>
          
          {/* Description skeleton */}
          <div className="space-y-2 mb-4">
            <div className="h-4 bg-gray-300 rounded w-full"></div>
            <div className="h-4 bg-gray-300 rounded w-5/6"></div>
          </div>
          
          {/* Button skeleton */}
          <div className="h-10 bg-gray-300 rounded w-28"></div>
        </div>
      </div>
    </div>
  )

  const SimpleSkeleton = () => (
    <div className={`animate-pulse ${className}`}>
      <div className="h-4 bg-gray-300 rounded w-full"></div>
    </div>
  )

  const GallerySkeleton = () => (
    <div className={`animate-pulse ${className}`}>
      <div className="w-full h-64 md:h-80 lg:h-96 bg-gray-300 rounded-lg"></div>
    </div>
  )

  const renderSkeleton = () => {
    switch (type) {
      case 'card':
        return <CardSkeleton />
      case 'text':
        return <TextSkeleton />
      case 'header':
        return <HeaderSkeleton />
      case 'blog':
        return <BlogCardSkeleton />
      case 'simple':
        return <SimpleSkeleton />
      case 'gallery':
        return <GallerySkeleton />
      default:
        return <CardSkeleton />
    }
  }

  return (
    <>
      {skeletons.map((_, index) => (
        <div key={index}>
          {renderSkeleton()}
        </div>
      ))}
    </>
  )
}

export default SkeletonLoader
