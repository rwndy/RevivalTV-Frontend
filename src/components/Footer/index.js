import Image from "next/image"

const Footer = () => {
 
  const lists_explore = [
    {name: 'Our Services'},
    {name: 'Specification'},
    {name: 'Refund'},
    {name: 'Playlist'}
  ]

  const lists_account = [
    {name: 'My Account'},
    {name: 'Top Benefit'},
    {name: 'How-to Tutorials'},
    {name: 'Moment'}
  ]

  const lists_office = [
    {name: '+021 2208 1996'},
    {name: 'SCBD, Jakarta'},
    {name: 'No.2 (Autodrone)'},
    {name: 'support@autodrone.id'}
  ]

  return (
    <footer className="bg-black">
      <div className="container xsm:px-15 xl:px-[150px] xsm:pt-[55px] xl:pt-[100px] xl:mx-auto">
        <div className="xsm:rid xsm:grid-cols-1 xl:flex xl:justify-between">
          <div className="xl:flex xl:flex-col">
            <div className="xsm:items-center xsm:flex xl:flex xl:items-center">
              <Image 
                src={'/assets/icons/logo.svg'}
                alt="icon logo"
                width={68}
                height={32}
              />
              <h4 className="font-semibold text-white text-[26px] leading-[39px] ml-9">autodrone</h4>
            </div>
            <p className="text-white font-light text-[18px] leading-[27px] ">Look up the sky and beautiful world easily.</p>
            </div>
          <div className="pr-19 mt-[11px] mb-15 xl:hidden lg:hidden">
            <p className="text-white font-light text-[18px] leading-[27px] ">Look up the sky and beautiful world easily.</p>
          </div>

          <div className="mb-15">
            <h5 className="text-white text-[18px] leading-[27px] pb-14 font-semibold">Explore</h5>
            {
              lists_explore.map((explore, idx) => (
                <p key={idx+1} className="text-white font-light text-[18px] leading-[27px] pb-[15px]">
                  {explore.name}
                </p>
              ))
            }
          </div>

          <div className="mb-15">
            <h5 className="text-white text-[18px] leading-[27px] pb-14 font-semibold">Account</h5>
            {
              lists_account.map((account, idx) => (
                <p key={idx+1} className="text-white font-light text-[18px] leading-[27px] pb-[15px]">
                  {account.name}
                </p>
              ))
            }
          </div>

          <div className="mb-17">
            <h5 className="text-white text-[18px] leading-[27px] pb-14 font-semibold">Office</h5>
            {
              lists_office.map((office, idx) => (
                <p key={idx+1} className="text-white font-light text-[18px] leading-[27px] pb-[15px]">
                  {office.name}
                </p>
              ))
            }
          </div>

        </div>
      </div>
    </footer>
  )
}

export default Footer
