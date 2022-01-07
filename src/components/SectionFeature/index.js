import Image from "next/image"

const SectionFeature = () => {
  return (
    <div className="mt-14 xl:mx-auto xl:container 2xl:container 2xl:px-[30px] 2xl:mx-auto mb-14">
      <div className="grid gap-9 grid-cols-2">

        <div className="relative">
          <Image 
            src={'/assets/images/ultra_light.png'}
            alt="ultra_light drone"
            width={680}
            height={660}
            layout="responsive"
          />
          <h1 className="absolute top-[25%] left-1/2 translate-x-[-50%] translate-y-[-50%] font-semibold text-[48px] leading-[72px] text-black w-full text-center">Ultra Light</h1>
          <p className="absolute top-[39%] left-1/2 translate-x-[-50%] translate-y-[-50%] text-13 text-light-gray xl:text-center mx-auto leading-[50px] 2xl:w-[42%] 2xl:text-center">Drone move faster with weighing component <span className="text-black">under 200 g </span></p>
        </div>


        <div className="relative">
          <Image 
           src={'/assets/images/best_resolution.png'}
           alt="best_resolution"
           width={680}
           height={660}
           layout="responsive"
          />
          <h1 className="absolute top-[25%] left-1/2 translate-x-[-50%] translate-y-[-50%] font-semibold text-[48px] leading-[72px] text-white w-full text-center">Best Resolution</h1>
          <p className="absolute top-[39%] left-1/2 translate-x-[-50%] translate-y-[-50%] text-13 text-dark-white xl:text-center mx-auto leading-[50px] 2xl:w-[42%] 2xl:text-center">Take a beautiful view with best camera up to <span className="text-white">4K Camera Resolution</span></p>
        </div>
      </div>
    </div>
  )
}

export default SectionFeature
