import React from 'react'
import Footer from '../components/footer/footer'
import Hero from '../components/hero/hero'
import Navbar from '../components/navbar/navbar'
import Offers from '../components/offers/offers'
import Portfolio from '../components/portfolio/portfolio'
import Work from '../components/work/work'
  const heroContent = {
    smallTitle:"Make your CAR",
    largeTitle:" Last Longer",
    text:`Welcome to Official Website of Muhammad Bakhsh Farid 
    Garage based in Dubai. This Text area can be updated later on.
    Lorem ipsem...`
  }
function index() {
  return (
    <React.Fragment>
        <Navbar/>
        <Hero content={heroContent}/>
        <Offers/>
        <Work/>
        <Portfolio/>
        <Footer/>

    </React.Fragment>
  )
}

export default index