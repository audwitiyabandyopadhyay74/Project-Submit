import React from 'react'
import NavBar from './components/Navbar'
import Banner from './components/Banner'
import About from './components/About'
import WhyME from './components/WhyME'
import FAQs from './components/faqs'
import Contact from './components/Contact'

const page = () => {
  return (
    <>
    <NavBar/>
    <Banner/>
    <About/>
    <WhyME/>
    <FAQs/>
    <Contact/>
    </>
  )
}

export default page