import { useState } from 'react'
import Image from "next/image"
import Link from "next/link"

const NavbarComponent = () => {
  const list_navbar = [
    { name: 'Home', slug: '#'},
    { name: 'Gallery', slug: '#gallery'},
    { name: 'Products', slug: '#products'},
    { name: 'Review', slug: '#review'},
    { name: 'Support', slug: '#support'},
  ]

  const [show, setShow] = useState(false)
  const toggle = () => setShow(!show)

  const onShow = 'fixed top-0 left-0 bg-black w-screen h-screen flex z-20 justify-center flex-col items-center text-center'
  const closeToggle = 'hidden'

  return (
    <nav className='bg-black pt-10 pb-10 lg:pt-[60px] xl:pt-[60px] 2xl:pt-[60px]'>
      <div className="container mx-auto xsm:px-14 flex xsm:items-center xsm:justify-between lg:gap-[100px] xl:gap-[100px] 2xl:gap-[100px] lg:items-center xl:items-center 2xl:items-center lg:justify-center xl:justify-center 2xl:justify-center">

        <div>
          <Link href={"/"}>
           <a>
              <Image 
                src={'/assets/icons/logo.svg'} 
                alt="logo icon"
                width={75}
                height={35}
              />
            </a>
          </Link>
        </div>

        {/* wrapper link */}
        <div>
          <button className=" lg:hidden xl:hidden 2xl:hidden" onClick={toggle}>
            <Image 
              src={'/assets/icons/icon-burger.svg'}
              alt='icon burger'
              width={18}
              height={15}
            />
          </button>

          <ul className={show ? onShow : 'hidden lg:flex xl:flex 2xl:flex lg:gap-[100px] xl:gap-[100px] 2xl:gap-[100px] lg:items-center xl:items-center 2xl:items-center'}>
            <span className={show ? 'z-30 fixed top-9 right-12 text-white text-[30px] font-semibold' : closeToggle} onClick={toggle}>X</span>
            {
              list_navbar.map((list, idx) => (
                <li key={idx+1} className='xsm:mb-11'>
                  <Link href={list.slug}>
                    <a className="text-white font-medium text-[18px] leading-[27px] uppercase">{list.name}</a>
                  </Link>
                </li>
              ))
            }
            <Image 
              src={'/assets/icons/icon-search.svg'}
              alt="icon search"
              width={25}
              height={25}
              className="cursor-pointer"
            />
          </ul>
        </div>

      </div>
    </nav>
    // <nav className="container mx-auto">
    //   <ul className="pt-[60px] flex gap-[100px] items-center justify-center">
    //     <Link href={"/"}>
    //       <a>
    //         <Image 
    //           src={'/assets/icons/logo.svg'} 
    //           alt="logo icon"
    //           width={75}
    //           height={35}
    //         />
    //       </a>
    //     </Link>
    //         {
    //           list_navbar.map((list, idx) => (
    //             <li key={idx + 1}>
    //               <Link href={list.slug}>
    //                 <a className="text-white font-medium text-[18px] leading-[27px] uppercase">{list.name}</a>
    //               </Link>
    //             </li>
    //           ))
    //         }
    //       <Image 
    //         src={'/assets/icons/icon-search.svg'}
    //         alt="icon search"
    //         width={25}
    //         height={25}
    //         className="cursor-pointer"
    //       />
    //   </ul>
    // </nav>
  )
}

export default NavbarComponent
