import React from 'react'
import Link from "next/link"
import Image from "next/image"
import logo from '../../public/logo.svg'
import search from '../../public/search.svg'
import cart from '../../public/cart.svg'


const Nav = () => {
  return (
    <nav className="bg-white shadow">
      <div className="container mx-auto flex items-center justify-between px-4 py-2 md:px-10">
        <Link href="/">
        <div className="flex items-center">
          <Image src={logo} alt="Logo" width={50} height={50} className="md:w-20 md:h-20"/>
        </div>
        </Link>
        <div className="flex-grow mx-4 flex justify-center">
          <div className="relative flex w-full max-w-xs md:max-w-md lg:max-w-lg">
            <input
              type="text"
              placeholder="Search..."
              className="w-full bg-[#FBF9F9] p-2 pl-10 rounded-2xl focus:outline-none"
            />
            <div className="absolute right-1 top-1/2 transform -translate-y-1/2">
              <Image src={search} alt="Search" width={20} height={20}/>
            </div>
          </div>
        </div>
        <div className="text-gray-800 flex items-center">
          <Image src={cart} alt="Cart" width={30} height={30} className="md:w-10 md:h-10"/>
        </div>
      </div>
    </nav>
  )
}

export default Nav
