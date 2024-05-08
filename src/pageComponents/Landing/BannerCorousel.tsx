import Button from '../../components/Button'
import Carousel from '../../components/Carousel'
import slides from '../../constants/carouselSlides'
import ImagesPath from '../../constants/ImagesPaths'

const BannerCarousel = () => {
  return (
    <div className="w-full h-fit p-10 my-10 flex flex-col lg:flex-row justify-between items-center">
        {/* Hero featured section */}
        <div className="w-full lg:w-[50%] h-fit relative md:mb-24">
            <div className="relative lg:left-[180px] lg:top-[10px] w-fit rounded-3xl overflow-hidden mb-5 mx-auto lg:mx-0">
                <img
                    alt={ImagesPath.featuredHeroImage.alt}
                    src={ImagesPath.featuredHeroImage.source}
                    className='w-[340px] h-[360px]'
                />
            </div>
            {/* Stat 1 - ( 40% reduction ) */}
            <div className="md:absolute top-[60px] left-[60px] w-[170px] h-[150px] bg-white rounded-2xl shadow-xl">
                <div className="relative w-full h-full">
                    <div className="absolute -top-3 -left-1 ">
                        <img
                            alt={ImagesPath.vectors.sparkle.alt}
                            src={ImagesPath.vectors.sparkle.source}
                            className="h-16 w-16"
                        />
                    </div>
                    <div className="pt-6 px-6">
                        <span className='font-bold text-4xl'>40%</span>
                    </div>
                    <div className="px-6 py-2 text-xs text-gray-600">
                        Achieved reduction in projectexecution time by optimizing team availability
                    </div>
                </div>
            </div>

            {/* Stat 2 - ( 10 days deployment ) */}
            <div className="absolute top-[475px] md:top-[250px] left-[180px] md:left-[110px] h-14 w-36 rounded-full bg-white shadow-xl">
                <div className="h-full flex flex-row justify-around items-center">
                    <img
                        src={ImagesPath.vectors.rocket.source} 
                        alt={ImagesPath.vectors.rocket.alt}
                        className='h-6'
                    />
                    <div className="h-full flex flex-col justify-center items-start">
                        <span className="text-lg">10 Days</span>
                        <span className="text-xs text-gray-600 tracking-tighter font-light">Staff Deployment</span>
                    </div>
                </div>
            </div>

            {/* Stat 3 - ( 0.5 Million clients ) */}
            <div className="md:absolute top-[300px] left-[290px] md:w-[170px] h-fit py-4 bg-[#002E18] rounded-2xl shadow-xl flex md:flex-col md:justify-center items-center  enter md:items-start my-5">
                <div className="flex pt-2 px-3 gap-x-1 items-baseline">
                    <span className='font-bold text-4xl text-white'>$0.5</span>
                    <span className="text-xl text-gray-500">Million</span>
                </div>
                <div className="px-3 py-2 text-xs text-gray-300">
                    Reduced client expenses by saving on hiring and employee cost.
                </div>
            </div>
        </div>

        {/* Carousel */}
        <div className="w-full lg:w-[50%] h-fit border-black flex flex-col justify-around items-center lg:items-start px-20">
            <Carousel data={slides} autoplay={true}/>
            <Button
                title="Explore More -->"
            />
        </div>
    </div>
  )
}

export default BannerCarousel