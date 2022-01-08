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
    <div className="pt-[102px] px-15">
      <h4 className="text-[36px] text-dark-gray leading-[54px] text-center mb-7">New Products</h4>
      <p className="text-dark-gray-2 text-[18px] leading-15 text-center mb-17 font-light">
      New innovation, best quality than before. Make every moment flying operation become unforgettable.
      </p>

      <div className="grid grid-cols-1">
        {
          products_data.map((product, idx) => (
          <div className="mb-[50px]" key={idx + 1}>
            <div className="px-5">
              <Image 
                width={330}
                height={194}
                src={`/assets/images/${product.img_src}`}
                alt={`${product.name} image`}
              />
            </div>

            <h4 className="text-dark-gray text-center text-[36px] leading-[54px] font-semibold">{product.name}</h4>

            <div className="px-3 mb-14">
              <p className="text-center text-[20px] leading-[36px] font-light">
                {
                  product.information
                }
              </p>
            </div>

              <div className="flex justify-center">
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
