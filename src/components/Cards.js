import React from 'react'
import img1 from '../Assets/img1.jpg'
import img2 from '../Assets/img2.jpg'
import img3 from '../Assets/img3.jpg'
import img4 from '../Assets/img4.jpg'
import img5 from '../Assets/img5.jpg'
import img6 from '../Assets/img6.jpg'
import img7 from '../Assets/img7.jpg'
import img8 from '../Assets/img8.jpg'
import img9 from '../Assets/img9.jpg'
import img10 from '../Assets/img10.jpg'
import img11 from '../Assets/img11.jpg'
import img12 from '../Assets/img12.jpg'
import img13 from '../Assets/img13.jpg'
import img14 from '../Assets/img14.jpg'
import img15 from '../Assets/img15.jpg'
import img16 from '../Assets/img16.jpg'

const Cards = () => {
  return (
    <div>
        <div className="bg-gradient-to-b from-[#dae654cd] to-gray-200 ">
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 pX-3 sm:p-10 place-items-center '>
          <div className=' max-w-sm border-1 border-gray-400 bg-white h-full'>
            <div><h1 className='font-bold text-lg px-5 pt-3 '>Upto 70% Off | Styles for Men</h1></div>
            <div className='grid grid-rows-2 gap-3 p-3 place-items-center'>
                <div className='grid grid-cols-2 gap-3'>
                    <div>
            <img  className='h-24 w-36' src={img1} alt=''/>
            <h1 className='font-medium text-xs '>Clothing</h1>
            </div>
            <div>
            <img   className='h-24 w-36'src={img3} alt=''/>
            <h1 className='font-medium text-xs '>Watches</h1>

            </div>

            </div>
            <div className='grid grid-cols-2 gap-3 '>
                <div>
                <img  className='h-24 w-36' src={img2} alt=''/>
                <h1 className='font-medium text-xs '>Footwear</h1>
                </div>
                <div>   
                   <img   className='h-24 w-36'src={img4} alt=''/>
                   <h1 className='font-medium text-xs '>Bags & Wallets</h1>
                </div>


                </div>
            </div>
            <div><h1 className='text-xs text-start text-cyan-700 font-medium ml-3 pb-2'>Mega Fashion Days</h1></div>

            </div>  
            <div className=' border-1 border-gray-400 bg-white h-full '>
            <div><h1 className='font-bold text-lg px-5 pt-3 '>Revamp your home in style u want </h1></div>
            <div className='grid grid-rows-2 gap-3 p-3 place-items-center'>
                <div className='grid grid-cols-2 gap-3'>
                    <div>
            <img  className='h-24 w-36' src={img5} alt=''/>
            <h1 className='font-medium text-xs '>Home decor</h1>
            </div>
            <div>
            <img   className='h-24 w-36'src={img6} alt=''/>
            <h1 className='font-medium text-xs '>Home furnishings</h1>

            </div>

            </div>
            <div className='grid grid-cols-2 gap-3 '>
                <div>
                <img  className='h-24 w-36' src={img7} alt=''/>
                <h1 className='font-medium text-xs '>home storage</h1>
                </div>
                <div>   
                   <img   className='h-24 w-36'src={img8} alt=''/>
                   <h1 className='font-medium text-xs '>Lighting solutions</h1>
                </div>


                </div>
            </div>
            <div><h1 className='text-xs text-start text-cyan-700 font-medium ml-3 pb-2'>Explore All</h1></div>

            </div>  
            <div className=' border-1 border-gray-400 bg-white '>
            <div><h1 className='font-bold text-lg px-5 pt-3 '>Upto 70% Off | Styles for Men</h1></div>
            <div className='grid grid-rows-2 gap-3 p-3 place-items-center'>
                <div className='grid grid-cols-2 gap-3'>
                    <div>
            <img  className='h-24 w-36' src={img9} alt=''/>
            <h1 className='font-medium text-xs '> Women's Clothing</h1>
            </div>
            <div>
            <img   className='h-24 w-36'src={img10} alt=''/>
            <h1 className='font-medium text-xs '>Footwear </h1>

            </div>

            </div>
            <div className='grid grid-cols-2 gap-3 '>
                <div>
                <img  className='h-24 w-36' src={img11} alt=''/>
                <h1 className='font-medium text-xs '>Watches</h1>
                </div>
                <div>   
                   <img   className='h-24 w-36'src={img12} alt=''/>
                   <h1 className='font-medium text-xs '>Fashion jewellery</h1>
                </div>


                </div>
            </div>
            <div><h1 className='text-xs text-start text-cyan-700 font-medium ml-3 pb-2'>Mega Fashion Days</h1></div>

            </div>  
            <div className='max-w-xs border-1 border-gray-400 bg-white '>
            <div><h1 className='font-bold text-lg px-5 pt-3 '>Appliances for your hone | Up to 55% off</h1></div>
            <div className='grid grid-rows-2 gap-3 p-3 place-items-center'>
                <div className='grid grid-cols-2 gap-3'>
                    <div>
            <img  className='h-24 w-36' src={img13} alt=''/>
            <h1 className='font-medium text-xs '>Air conditioners</h1>
            </div>
            <div>
            <img   className='h-24 w-36'src={img14} alt=''/>
            <h1 className='font-medium text-xs '>Refrigerators</h1>

            </div>

            </div>
            <div className='grid grid-cols-2 gap-3 '>
                <div>
                <img  className='h-24 w-36' src={img15} alt=''/>
                <h1 className='font-medium text-xs '>Microwaves</h1>
                </div>
                <div>   
                   <img   className='h-24 w-36'src={img16} alt=''/>
                   <h1 className='font-medium text-xs '>Washing machines</h1>
                </div>


                </div>
            </div>
            <div><h1 className='text-xs text-start text-cyan-700 font-medium ml-3 pb-2'>See More</h1></div>

            </div>  

        </div>
        </div>
    </div>
  )
}

export default Cards