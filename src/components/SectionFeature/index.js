import Image from "next/image"

const SectionFeature = () => {
  return (
    <div className="lg:mt-14 xl:mt-14 2xl:mt-14 mt-10 xl:mx-auto container px-9 xl:container 2xl:container 2xl:px-[30px] 2xl:mx-auto lg:mb-14 xl:mb-14 mb-[70px]">
      <div className="grid lg:gap-9 xl:gap-9 2xl:gap-9 gap-10 xl:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-2">

        <div className="relative">
          <Image 
            src={'/assets/images/ultra_light.png'}
            alt="ultra_light drone"
            width={680}
            height={660}
            layout="responsive"
          />
          <h1 className="absolute lg:top-[25%] xl:top-[25%] top-[15%] left-1/2 translate-x-[-50%] translate-y-[-50%] font-semibold xl:text-[48px] lg:text-[48px] text-[36px] lg:leading-[72px] xl:leading-[72px] leading[54px]  text-black text-center">Ultra Light</h1>

          <div>
          <p className="absolute px-5 lg:top-[39%] xl:top[39%] top-[40%] lg:left-1/2 xl:left-1/2 lg:translate-x-[-50%] xl:translate-x-[-50%] translate-y-[-50%]  lg:text-[28px] xl:text-[28px] text-[24px] text-light-gray xl:text-center mx-auto lg:leading-[50px] xl:leading-[50px] leading-[44.5px] font-light text-center 2xl:w-[42%] 2xl:text-center">Drone move faster with weighing component <span className="text-black">under 200 g </span></p>
          </div>
        </div>


        <div className="relative">
          <Image 
           src={'/assets/images/best_resolution.png'}
           alt="best_resolution"
           width={680}
           height={660}
           layout="responsive"
          />
          <h1 className="absolute lg:top-[25%] xl:top-[25%] top-[10%] left-1/2 translate-x-[-50%] translate-y-[-50%] font-semibold lg:text-[48px] xl:text-[48px] text-[36px] lg:leading-[72px] xl:leading-[72px] leading[54px] text-white w-full text-center">Best Resolution</h1>
          
          <div>
            <p className="absolute px-5 lg:top-[39%] xl:top-[39%] 2xl:top-[39%] top-[35%] lg:left-1/2 xl:left-1/2 lg:translate-x-[-50%] xl:translate-x-[-50%] translate-y-[-50%] lg:text-[28px] xl:text-[28px] text-[24px] text-dark-white xl:text-center lg:leading-[50px] xl:leading-[50px] 2xl:leading-[50px] leading-[44px] 2xl:w-[42%] 2xl:text-center text-center font-light">Take a beautiful view with best camera up to <span className="text-white">4K Camera Resolution</span></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SectionFeature
