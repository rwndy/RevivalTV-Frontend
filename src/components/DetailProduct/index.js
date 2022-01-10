import { ThumbnailImage } from "./ThumbnailImage"
import { DescriptionFeature } from "./DescriptionFeature"

export const DetailProductComponent = () => {
  return (
    <div className="container px-15">
      <ThumbnailImage />
      <DescriptionFeature />
    </div>
  )
}
