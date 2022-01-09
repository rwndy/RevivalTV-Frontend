import Image from "next/image"

const CardReview = ({avatar, job, name, reviews}) => {
  return (
    <div className="border border-gray rounded-sm p-14 mb-7">
      <p className="font-light text-[16px] leading-[30px] text-dark-gray"> {reviews}</p>

    <div className="grid grid-cols-cardReview gap-14 mt-14">
      <div className="relative w-[70px] h-[70px]">
        <Image
          src={avatar}
          alt={`profile image`}
          layout="fill"
          objectFit="cover" 
          className="rounded-full"            
        />
      </div>

      <div>
        <p className="font-semibold text-[20px] text-dark-gray leading-[30px]">{name}</p>
        <p className="text-dark-gray-2 text-[18px] leading-[27px] font-light">{job}</p>
      </div>

    </div>
  </div>
  )
}

export default CardReview
