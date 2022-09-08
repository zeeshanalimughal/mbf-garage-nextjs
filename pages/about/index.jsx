import React from 'react'
import Hero from '../../components/hero/hero'
import Navbar from '../../components/navbar/navbar'

function index() {
    const heroContent = {
        smallTitle:"Make your CAR",
        largeTitle:" Last Longer",
        text:`Welcome to Official Website of Muhammad Bakhsh Farid 
        Garage based in Dubai. This Text area can be updated later on.
        Lorem ipsem...`
      }
  return (
   
    <div>
         <Navbar/>
         <Hero content={heroContent}/>
         <h1>About Us</h1>
    </div>
  )
}

export default index