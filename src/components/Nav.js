import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from '../Assets/Amazonlogo.webp';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const items = useSelector((state) => state);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black pb-1 ">
      <div className="container mx-auto py-2">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img className="h-8 w-20" src={logo} alt="Amazon" />
            <div className="hidden md:flex md:items-center ml-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#ffffff"
                className="w-5 h-5 mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg>
              <h1 className="text-white text-md">
                <span className="text-sm font-medium">Add</span> Location
              </h1>
            </div>
          </div>

          <div className=' flex-row mt-2 sm:mt-4 hidden sm:flex'>           <div className=''> <input type="text" placeholder='search Amazon.in'className=' pt-2 pb-2 pl-4 ml-11 pr-11 sm:rounded-l-md rounded-l-sm'/></div><div><button className='text-gray-800 bg-[#FEBD69] pl-3 pr-3 sm:rounded-r-md rounded-r-sm py-2'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
</svg></button></div></div>

          <div className=" md:hidden ">
            
            <button onClick={toggleMenu} className="text-white">
            <div className='grid grid-cols-2'>
              <div>
                <h1 className='font-bold'>Search </h1>
 </div> </div>
            </button>
          
          </div>

          <div className={`md:flex ${isOpen ? 'block' : 'hidden'} md:mt-0 mt-4`}>
            <div className="hidden md:flex md:items-center ml-4">
              <Link to='/signin'>
              <h1 className="text-white text-md ">
                <span className="text-sm font-medium">Hello,</span> SignIn
              </h1></Link>
            </div>
            <div className="md:ml-5 ml-2">
              <div className="hidden md:flex md:flex-col md:mt-0 mt-2">
                <h1 className="text-white text-md font-bold">Accounts & Lists</h1>
              </div>
            </div>
            <Link to="/cartdata" className="ml-3">
              <div className="flex items-center text-white md:ml-5 ml-2">
                <div className="mr-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                    />
                  </svg>
                </div>
                <div className="text-[#FEBD69] pr-5">{items.cart.length} items</div>
              </div>
            </Link>
          </div>
        </div>

        <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
          <div className="mt-3">
            <input
              type="text"
              placeholder="Search Amazon.in"
              className="w-full px-3 py-2 rounded-l-md rounded-r-md"
            />
          </div>
          <div className="mt-2">
            <button className="w-full bg-[#FEBD69] text-gray-800 px-3 py-2 rounded-b-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
