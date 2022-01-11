import Image from "next/image"

const SectionProducts = () => {
  const products_data = [
    {
      name: 'Mini Drone',
      information: 'Powerful camera drone at an affordable price range. Camera up to 4K resolution, optimize shots automatically.',
      img_src: 'mini_drone.png'
    },
    {
      name: 'Drone Light',
      information: 'Drone light is every creators dream. Setting apperture manually and high battery  performance. Drone light is everything you need.',
      img_src: 'drone_light.png',
    },
    {
      name: 'Phantom Drone',
      information: 'Inspired by phantom, drone can move faster and quickly like a ghost.Focus on speed so you can investigate environtment quickly.',
      img_src: 'phantom_drone.png',
    },
  ]


  return (
    <div className="pt-[102px] xsm:px-15 xl:container xl:mx-auto">
      <h4 className="text-[36px] text-dark-gray leading-[54px] text-center mb-7">New Products</h4>
      <p className="text-dark-gray-2 text-[18px] xl:text-[16px] leading-[32px] text-center mb-17 font-light">
      New innovation, best quality than before. Make every moment flying operation become unforgettable.
      </p>

      <div className="xsm:grid xsm:grid-cols-1 xl:flex xl:gap-[30px] xl:overflow-x-auto">
        {
          products_data.map((product, idx) => (
          <div className="mb-[50px] xl:border border-gray xl:p-[45px] xl:rounded-sm" key={idx + 1}>
            <div className="xsm:px-5 xl:relative xl:w-[410px] xl:h-[240px] xsm:relative xsm:w-[330px] xsm:h-[194px]">
              <Image
                src={`/assets/images/${product.img_src}`}
                alt={`${product.name} image`}
                layout="fill"
                objectFit="cover"
                className="xl:rounded-sm"
              />
            </div>

            <h4 className="text-dark-gray text-center text-[36px] leading-[54px] font-semibold xl:mt-14">{product.name}</h4>

            <div className="xsm:px-3 xsm:mb-14 xl:px-[37px]">
              <p className="text-center text-[20px] leading-[36px] font-light">
                {
                  product.information
                }
              </p>
            </div>

              <div className="flex justify-center xl:mt-14">
                <button className="bg-primary-blue text-white w-[200px] h-[50px] rounded-L text-center uppercase font-semibold text-[18px]">Get Now</button>
              </div>
            </div>
          ))
        }
      </div>
      
    </div>
  )
}

export default SectionProducts
