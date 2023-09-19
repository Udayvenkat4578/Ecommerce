import React from 'react'
import { useState } from 'react'
import logo from '../Assets/Amazonlogo.webp'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


const Navbar = () => {
  const[bar,setBar]=useState(false);

  const items=useSelector(state=>state);
console.log("items",items);

  return (
    <div className='bg-black pb-1'>
      <div className='grid grid-cols-3'>
        <div className=' flex flex-row'>      <div>   <img className='sm:h-12 sm:w-35 h-8 w-20 sm:pt-2 pt-1 ml-1 sm:ml-3' src={logo} alt=""/></div>
        <div className='flex flex-row sm:ml-7 ml-3  px-3 py-1 mt-1 rounded-sm'>
            <div className='mt-2'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#ffffff" className="w-5 h-5">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
</svg>
</div>
           <div> <h1 className='text-white ml-1 sm:ml-2  sm:mt-2 none md:flex sm:text-md'>Select Your Address</h1></div>
        </div>

</div>
<div className='flex flex-row mt-2 sm:mt-4'>           <div className=''> <input type="text" placeholder='search Amazon.in'className=' pt-2 pb-2 pl-4 ml-11 pr-11 sm:rounded-l-md rounded-l-sm'/></div>
<div><button className='text-gray-800 bg-[#FEBD69] pl-3 pr-3 sm:rounded-r-md rounded-r-sm py-2'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
</svg></button></div></div>

        <div className='sm:mt-3 mt-2'> 
        
        <div className='text-white ml-5 mt-1 '>
        <h1 className='text-md  '><h1 className='text-sm font-medium'>Hello,</h1> SignIn</h1>
        <div/>
        <div className='sm:ml-5 ml-2'>
        <h1 className='font-bold sm:text-sm ml-11 sm:flex sm:flex-col hidden '>Accounts & <h1 className='font-medium'>Lists</h1></h1>
        </div>
        <Link to='/cartdata'>
      <div className=' mr-3 font-bold  sm:ml-11 ml-4  grid-cols-1 place-items-center'><div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
</svg></div><div className='text-[#FEBD69]'>{items.cart.length} items</div></div></Link>
        </div>

         </div>
         <div className='md:hidden lg:hidden'>
</div>



        
      </div>

    </div>
  )
}

export default Navbar