import React from 'react'
import images from '../Assets/images.jpeg'
import img from '../Assets/mzain1.webp'
import laptop from '../Assets/laptop.jpg'
const Cards1 = () => {
  return (
    <div className='h-full grid grid-rows-1  place-items-center px-3 md:px-10 bg-gray-200 sm:pt-5 pt-4'>
        <div className='h-full grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div className='grid grid-cols-2 gap-4'>
            <div className=' border-2 border-gray-200 bg-white'>
                <h1 className='font-bold text-md mt-3 px-1 sm:px-4 mb-4 ml-3'>Explore Our Premium Products! COCAK PRACI</h1>
            <img className='px-3 pb-4 pl-7' src={images} alt=''/>
            <h1 className='text-xs text-start text-cyan-700 font-medium ml-5 pb-2'>Shop Now</h1>
            </div>
            <div className='border-2 border-gray-200 bg-white'>
            <h1 className='font-bold text-md mt-3 sm:px-4 px-1'>60% Off on Top BrandsUS,HP,Lenovo,ROG</h1>

                <img className='p-4 w-full h-60' src={laptop} alt=''/>
                <h1 className='text-xs text-start text-cyan-700 font-medium  pb-2 pl-5'>Mega Fashion Days</h1>
            </div>
            </div>
            <div className='border-2 border-gray-200 bg-white'>
            <h1 className='font-bold text-md mt-3 sm:px-4 px-1'>Being Sick Sucks, Boost Up!</h1>

            <img className='px-4 pt-4 pb-2' src={img} alt=''/>
            <h1 className='text-xs text-start text-cyan-700 font-medium ml-5 pb-2'>Shop Now</h1>

            </div>
            

            
        </div>
    </div>
  )
}

export default Cards1