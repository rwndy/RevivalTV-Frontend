import { ThumbnailImage } from "./ThumbnailImage"
import { DescriptionFeature } from "./DescriptionFeature"
import DescriptionText from "./DescriptionFeature/Description"

export const DetailProductComponent = () => {
  return (
    <div className="container xsm:px-15 xl:px-[165px]">
      <div className="xl:grid xl:mt-[107px] xl:mb-[37px] xl:gap-[65px] xl:grid-cols-2">
        <ThumbnailImage />
        <DescriptionFeature />
      </div>
      <DescriptionText />
    </div>
  )
}
