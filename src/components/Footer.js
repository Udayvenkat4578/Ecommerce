import React from "react";
import amazon1 from '../Assets/amazon1.png'
import { Link } from "react-router-dom";


function Footer() {
  return (
    <div >
      <div >
        <h4  className="bg-slate-700 text-center py-2 text-lg font-bold text-white "><a href='c1'><Link to='/signin'>Sign In Today</Link></a></h4>
      
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4  bg-[#232F3E] px-8 gap-6 ">
            <div className="mb-5 pt-5">
            <h3 className="font-bold text-md text-white">Get to Know Us</h3>
          <h5 className="text-white mt-2 font-medium text-sm">About Us</h5>
          <h5 className="text-white font-medium text-sm">Careers</h5>
          <h5 className="text-white font-medium text-sm">Press Release</h5>
          <h5 className="text-white font-medium text-sm">Amazon Cities</h5>
          <h5 className="text-white font-medium text-sm">Gift a Smile</h5>
            </div>
<div className="pt-5">
<h3 className="font-bold text-md text-white">Connect with Us</h3>
          <h5 className="text-white mt-2 font-medium text-sm">Facebook</h5>
          <h5 className="text-white font-medium text-sm">Twitter</h5>
          <h5 className="text-white font-medium text-sm">Instagram</h5>
</div>
<div className="pt-5">  <h3 className="font-bold text-md text-white mr-5">Make Money with Us</h3>
          <h5 className="text-white mt-2 font-medium text-sm">Sell on Amazon</h5>
          <h5 className="text-white font-medium text-sm">Sell under Amazon Accelerator</h5>
          <h5 className="text-white font-medium text-sm">Become an Affiliate</h5>
          <h5 className="text-white font-medium text-sm">Advertise Your Products</h5>
          <h5 className="text-white font-medium text-sm">Amazon Pau on Merchants</h5></div>
<div className="pt-5">
<h6 className="font-bold text-md text-white mb-3">Let Us help You</h6>
          <h6 className="text-white mt-2 font-medium text-sm">COVID-19 and Amazon</h6>
          <h6 className="text-white font-medium text-sm">Your Account</h6>
          <h6 className="text-white font-medium text-sm">Returns Centre</h6>
          <h6 className="text-white font-medium text-sm">100% App Download</h6>
          <h6 className="text-white font-medium text-sm">Amazon App Download</h6>
</div>
        </div >
        <hr></hr>
        <div className="grid grid-cols-1 place-items-center bg-[#232F3E]">
            <div>
<img className="scale-50" src={amazon1} alt=''/>
</div>
<div>
<div className="flex flex-row gap-3 text-white mb-5 sm:text-md text-xs">
          <h6>Australia</h6>
          <h6>Brazil</h6>
          <h6>Canada</h6>
          <h6>China</h6>
          <h6>France</h6>
          <h6>Germany</h6>
          <h6>Italy</h6>
          <h6>Japan</h6>
          <h6>Mexico</h6>
          <h6>Netherlands</h6>
          <h6>Singapore</h6>
          <h6>Spain</h6>
        </div>
</div>
<hr></hr>
<div className="grid-cols-1 place-items-center text-white sm:text-md text-xs">
    <div>Conditions of Use & Sale
Privacy Notice
Interest-Based Ads</div>
<div >
    <h1 className="text-end mr-6 py-1 text-white mb-3 sm:text-md text-xs">© 1996-2023, Amazon.com, Inc. or its affiliates</h1></div>
</div>
        </div>
    </div>
  );
}

export default Footer;