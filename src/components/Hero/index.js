import { NavbarComponent } from ".."

const HeroComponent = () => {
  return (
    <div className="bg-[url('/assets/images/hero-image.png')] lg:h-screen md:h-screen xl:h-screen 2xl:h-screen h-screen bg-cover bg-center">
      <NavbarComponent />
      <div className="container mx-auto">
        <div className="w-[273px] mx-auto xl:w-full lg:w-full md:w-full mb-13 xl:mb-4 lg:mb-14 md:mb-14">
          <h1 className="text-white text-center text-[36px] xl:leading-[54px] xl:pt-[60px] pt-[50px] font-medium leading-[51px]">Representing Drone Light</h1>
        </div>

        <div className="md:w-2/3 lg:w-2/3 xl:w-2/3 mx-auto w-3/4 mb-13 md:mb-7 lg:mb-7 xl:mb-7">
          <p className="text-center xl:text-light-gray-2 text-lg text-gray font-light">Look up the  sky and beautiful world with simple navigation. Just record anmd get a lot memories to share, lighlty and fast like a lightning</p>
        </div>

        <div className="container justify-center flex">
          <button className="uppercase bg-primary-blue text-white xl:py-5 xl:px-[58px] rounded-L py-5 px-8">
            Get Now
          </button>
        </div>

      </div>
    </div> 
  )
}

export default HeroComponent
