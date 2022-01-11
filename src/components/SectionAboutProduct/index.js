import Image from "next/image"

const SectionAboutProduct = () => {
  return (
    <div className="bg-cream h-auto">
      <div className="xl:container xl:mx-auto xl:pb-[80px]">
      <div className="grid xsm:grid-cols-1 xl:grid-cols-2">
        <div className="xsm:px-[92px] pt-13">
          <Image
            src={'/assets/images/benefit_feature_image.png'}
            alt="benefit_feature_image pict"
            width={342}
            height={358}
            quality={100}
          />
        </div>
        <div className="xsm:container xsm:px-[35px]">
         <h3 className="xsm:text-center text-dark-gray font-semibold text-[36px] leading-[54px] mt-8 mb-10 xl:text-[48px] xl:leading xl:mb-7">Why Drone Light?</h3>
         <p className="xsm:text-center text-[24px] leading-[44px] font-light ">We provide a best self drone easy to use and operate. With auto pilot, the device will take a beautiful view for the best of flying operation.</p>
      
      <div className="xl:flex items-center">
         <div className="mt-[37px] xsm:grid xsm:grid-cols-2 xsm:gap-[88px] xl:mt-14 xl:flex ">

           <div>
             <h4 className="xsm:text-center text-[36px] leading-[54px] font-semibold">4K</h4>
             <p className="xsm:text-center text-[20px] font-light">Camera Resolution</p>
           </div>

           <div>
             <h4 className="xsm:text-center text-[36px] leading-[54px] font-semibold">2 TB</h4>
             <p className="xsm:text-center text-[20px] font-light">Storage Capacity</p>
           </div>

         </div>

         <div className="xsm:grid xsm:grid-cols-2 xsm:mt-[69px] xsm:mb-[48px] xsm:gap-[57px] xl:flex xl:mt-17">
          <div>
             <h4 className="xsm:text-center text-[36px] leading-[54px] font-semibold">60 m/s</h4>
             <p className="xsm:text-center text-[20px] font-light">Super Max Speed</p>
           </div>

           <div>
             <h4 className="xsm:text-center text-[36px] leading-[54px] font-semibold xsm:w-[145px]">30 mins</h4>
             <p className="xsm:text-center text-[20px] font-light">Long Flight Time</p>
           </div>
         </div>

        </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default SectionAboutProduct
