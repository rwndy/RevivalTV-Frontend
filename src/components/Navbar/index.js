import Image from "next/image"
import Link from "next/link"


const NavbarComponent = () => {
  const list_navbar = [
    { name: 'Home', slug: '/'},
    { name: 'Gallery', slug: '#gallery'},
    { name: 'Products', slug: '#products'},
    { name: 'Review', slug: '#review'},
    { name: 'Support', slug: '#support'},
  ]

  return (
    <div></div>
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
