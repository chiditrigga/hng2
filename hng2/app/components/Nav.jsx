import React from 'react'
import Link from "next/link"
import Image from "next/image"
import logo from '../../public/logo.svg'
import search from '../../public/search.svg'
import cart from '../../public/cart.svg'

const Nav = () => {
  return (
    <nav className="bg-white  shadow">
    <div className="container mx-[10px] flex items-center justify-between">
      <div>
        <Image src={logo} alt="Logo" width={100} height={100} />
      </div>
      <div className="flex-grow mx-4 flex justify-center">
        <div className="relative w-[500px]">
          <input
            type="text"
            placeholder="Search..."
            className="w-full bg-[#FBF9F9] p-2 pl-10 rounded-2xl focus:outline-none "
          />
          <div className="absolute  pe-2  right-1 top-1/2 transform -translate-y-1/2">
            <Image src={search} alt="Logo" width={20} height={20}/>
          </div>
        </div>
      </div>
      <div className="text-gray-800">
       <Image src={cart} alt="Logo" width={30} height={30} />
      </div>
    </div>
  </nav>
)
  
}

export default Nav