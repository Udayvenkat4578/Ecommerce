import React from 'react'
import Nav from './Nav'
import Nav3 from './Nav3'
import { Link } from 'react-router-dom'


const Cartstyle = () => {


  return (
    <div>
<Nav/>
<Nav3/>
<div>
    <div className='flex flex-row  gap-8text-end justify-between'>
        <div><h1 className='px-5 pt-3 ml-11 text-xl font-bold '>Your Cart</h1></div>
        <div className='pr-5 pt-3'><Link to='/'>     <button className=' px-4 py-1 bg-[#232F3E] text-white rounded-md'>Go Home</button></Link>
</div> 

    </div>
</div>

    </div>
  )
}

export default Cartstyle