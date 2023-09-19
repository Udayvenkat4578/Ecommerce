import React from 'react'
import banner from '../Assets/banner.jpg'
import banner1 from '../Assets/banner1.jpg'

const Nav2 = () => {
  return (
    <div>
    <div className='bg-[#232F3E]  justify-between flex flex-row'>
            <div className='hidden md:flex'>
        <ul className="flex flex-row gap-1 ">
        
        <li className='ml-20 mt-2 tansition-all ease-in-out hover:scale-110 text-white cursor-pointer text-[15px] font-sans'>Firestick</li>
        <li className='ml-5 mt-2 tansition-all ease-in-out hover:scale-110   text-white text-[15px]'>Amazon miniTV</li>
        <li className='ml-5 mt-2 tansition-all ease-in-out hover:scale-110   text-white text-[15px]'>Sell</li>
        <li className='ml-5 mt-2 tansition-all ease-in-out hover:scale-110   text-white  text-[15px]' >Best Sellers</li>
        <li className='ml-5  mt-2 mr-5 tansition-all ease-in-out hover:scale-110   text-white text-[15px]'>Top Deals</li>
        <li className='ml-5  mt-2 mr-5 tansition-all ease-in-out hover:scale-110   text-white cursor-pointer text-[15px]'>Mobiles</li>
        <li className='ml-5  mt-2 mr-5 tansition-all ease-in-out hover:scale-110   text-white cursor-pointer text-[15px]'>Customer Service</li>
        <li className='ml-5  mt-2 mr-5 tansition-all ease-in-out hover:scale-110   text-white cursor-pointer text-[15px]'>Prime</li>

        </ul>
        
        </div>
        <div>
            <img className='h-10 w-96 pr-7' src={banner} alt='banner'/>
        </div>
        <div>

        </div>
        
 
    </div>
    </div>
  )
}

export default Nav2