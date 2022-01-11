import Image from "next/image"


export const DescriptionFeature = () => {
  const drone_features = [
    {
      icon: '/assets/icons/camera.svg',
      description: '4K Camera Resolution',
      name: 'icon camera'
    },
    {
      icon: '/assets/icons/memory.svg',
      description: '2 TB Storage',
      name: 'icon memory'
    },
    {
      icon: '/assets/icons/speed.svg',
      description: '60 m/s Speed',
      name: 'icon speed'
    },
    {
      icon: '/assets/icons/battery.svg',
      description: '5000 mAh Battery',
      name: 'icon battery'
    },
  ]

  return (
    <div>
      <h1 className="text-dark-gray font-semibold text-[28px] leading-[42px] mb-1">Drone Light</h1>
      <p className="text-dark-gray font-light text-[20px] leading-[30px]">Super fast, easy control drone</p>
      <p className="text-dark-gray font-semibold text-[36px] leading-[54px] mt-10 mb-7">$ 4.500,00</p>
      <h4 className="text-dark-gray font-medium text-[22px] leading-[33px] mb-[25px]">Drone features:</h4>

      <div>

          {
            drone_features.map((drone, idx) => (
            <div className="flex gap-[23px] mb-9" key={idx + 1} >
              <Image
                src={drone.icon}
                alt={drone.name}
                width={29}
                height={23}
              />
                <p className="text-black font-light text-[20px] leading-[30px]">{drone.description}</p>
            </div>
            ))
          }

          <div className="flex xsm:justify-center">
            <button className="bg-primary-blue text-[18px] leading-[27px] font-semibold text-white text-center pt-[11px] pb-5 pr-[100px] pl-[95px] rounded-L mb-[50px]">Order it now</button>
          </div>

          
      </div>
    </div>
  )
}
