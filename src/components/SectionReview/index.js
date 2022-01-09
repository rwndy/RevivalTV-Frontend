import CardReview from "./CardReview"

const SectionReview = () => {

  const data_reviewers = [
    {
      name: 'Hugo Adams',
      avatar: '/assets/images/profile1.png',
      review: 'With high resolution camera, picture become clear and beautiful. Its so easy to operate drone.',
      job: 'Content Creator'
    },
    {
      name: 'Jennie Obrien',
      avatar: '/assets/images/profile2.png',
      review: 'Taking high view video become easy and faster. Battery performance really helping for making film.',
      job: 'Director Film'
    },
    {
      name: 'Lisa Millz',
      avatar: '/assets/images/profile3.png',
      review: 'Making video content for my trip vlog so powerful and wonderful. Love the video quality.',
      job: 'Content WQCreator'
    }
  ]



  return (
    <div className="container px-15">
      <div className="mb-[37px]">
        <h1 className=" font-semibold text-[36px] leading-[63px]">What Our “Pilots Are Saying</h1>
      </div>

      {
      data_reviewers.map((review, idx) => (
        <CardReview key={idx + 1} job={review.job} name={review.name} avatar={review.avatar} reviews={review.review} />
      ))
      }
      
    </div>
  )
}

export default SectionReview
