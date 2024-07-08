import React from 'react'

const Footer = () => {
  return (
  <>
   <div className='bg-[#F09A1F] text-white flex justify-between py-16 px-10'>

  
   <div className='  flex flex-col gap-5'>
    <span>
        CONTACT US
    </span>
       <span>
        08089161036
       </span>
       <span>
        Hughes Avenue Alagomeji , Yaba, Lagos,Nigeria 101245
       </span>
       
   </div>
   <div className=' flex flex-col gap-3'>
    <span>
SIGN UP FOR DISCOUNTS & UPDATES
    </span>
    <span>
<input type="text" name="" id="" className='p-3 text-[#9E9D9C] rounded-lg w-full'/>
    </span>
    <span>
<button className='p-2 px-10 rounded-lg  bg-[#9E9D9C] text-white'>Subscribe</button> 
    </span>
     
    <div className=' flex '>
         <span className=' me-2'>Return Policy</span> <span>About Us</span>
    </div>
  
   </div>
  
  
  
  
  
  
  
   </div>
  
  </>
  )
}

export default Footer