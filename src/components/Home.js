import React from 'react'
import Navbar from './Nav'
import Products from './Products'
import Nav2 from './Nav2'
import Cards from './Cards'
import Cards1 from './Cards1'
import Footer from './Footer'
const Home = () => {
  return (
    <div>
      <Navbar/>
        <Nav2/>
        <Cards/>
        <Cards1/>  
        <Products/>
        <Footer/>


    </div>
  )
}

export default Home