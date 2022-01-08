import Image from "next/image"

const SectionAboutProduct = () => {
  return (
    <div className="bg-cream h-auto">
      <div className="grid grid-cols-1">
        <div className="px-[92px] pt-13">
          <Image
            src={'/assets/images/benefit_feature_image.png'}
            alt="benefit_feature_image pict"
            width={342}
            height={358}
            layout="responsive"
            quality={100}
          />
        </div>
        <div className="container px-[35px]">
         <h3 className="text-center text-dark-gray font-semibold text-[36px] leading-[54px] mt-8 mb-10">Why Drone Light?</h3>
         <p className="text-center text-[24px] leading-[44px] font-light">We provide a best self drone easy to use and operate. With auto pilot, the device will take a beautiful view for the best of flying operation.</p>

         <div className="mt-[37px] grid grid-cols-2 gap-[88px]">

           <div>
             <h4 className="text-center text-[36px] leading-[54px] font-semibold">4K</h4>
             <p className="text-center text-[20px] font-light">Camera Resolution</p>
           </div>

           <div>
             <h4 className="text-center text-[36px] leading-[54px] font-semibold">2 TB</h4>
             <p className="text-center text-[20px] font-light">Storage Capacity</p>
           </div>

         </div>

         <div className="grid grid-cols-2 mt-[69px] mb-[48px] gap-[57px]">
          <div>
             <h4 className="text-center text-[36px] leading-[54px] font-semibold">60 m/s</h4>
             <p className="text-center text-[20px] font-light">Super Max Speed</p>
           </div>

           <div>
             <h4 className="text-center text-[36px] leading-[54px] font-semibold w-[145px]">30 mins</h4>
             <p className="text-center text-[20px] font-light">Long Flight Time</p>
           </div>
         </div>

        </div>
      </div>
    </div>
  )
}

export default SectionAboutProduct
