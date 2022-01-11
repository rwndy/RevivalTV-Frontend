import { useState } from "react";
import Image from "next/image";

export const ThumbnailImage = () => {
  const [srcImage, setSrcImage] = useState('')
  const list_drones = [ 
    {
      id: 1,
      name: 'highlight-1',
      srcImage: '/assets/images/highlight1.png'
    },
    {
      id: 2,
      name: 'highlight-2',
      srcImage: '/assets/images/highlight2.png'
    },
    {
      id: 3,
      name: 'highlight-3',
      srcImage: '/assets/images/highlight3.png'
    },
    {
      id: 4,
      name: 'highlight-4',
      srcImage: '/assets/images/highlight4.png'
    },
  ]

  const handleImage = drone => {
    setSrcImage(drone.srcImage)
  }

  return (
    <div>
      <div className="relative xsm:w-[346px] xsm:h-[263px] xl:w-[400px] xl:h-[200px] xsm:mt-17 xsm:mb-[17px] xl:mb-[37px] ">
        <Image 
          src={!srcImage ? '/assets/images/highlight1.png' : srcImage}
          alt="thumbnail image"
          layout="fill"
          objectFit="cover"
          className="rounded-sm"
          quality={100}
        />
      </div>

      <div className="flex xsm:justify-between mb-[50px]">
        {
          list_drones.map(drone => (
            <div key={drone.id} className="cursor-pointer" onClick={() => handleImage(drone)}>
              <Image 
                src={drone.srcImage}
                alt={`${drone.name} image`}
                width={77}
                height={59}
              />
            </div>
          ))
        }
      </div>
    </div>
  )
}
