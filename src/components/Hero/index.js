import { NavbarComponent } from ".."

const HeroComponent = () => {
  return (
    <div className="bg-[url('/assets/images/hero-image.png')] h-screen bg-cover">
      <NavbarComponent />
      <div className="container mx-auto">
        <h1 className="text-white text-center text-[36px] leading-[54px] mt-[60px] font-medium">Representing Drone Light</h1>

        <div className="w-2/3 mx-auto">
          <p className="text-white text-center text-light-gray-2 text-lg">Look up the  sky and beautiful world with simple navigation. Just record anmd get a lot memories to share, lighlty and fast like a lightning</p>
        </div>

        <div className="container justify-center flex mt-7">
          <button className="uppercase bg-primary-blue text-white py-5 px-[58px] rounded-L">
            Get Now
          </button>
        </div>

      </div>
    </div> 
  )
}

export default HeroComponent
