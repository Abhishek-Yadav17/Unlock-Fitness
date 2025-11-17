import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Process from '../components/Process'
import Features from '../components/Features'
import Founders from '../components/Founders'
import Schedules from '../components/Schedules'
import Updates from '../components/Updates'
import Faq from '../components/Faq'
import Testimonials from '../components/Testimonials'
import GetStarted from '../components/GetStarted'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
        <Navbar />
        <Hero />
        <About />
        <Process />
        <Features />
        <Founders />
        <Schedules />
        <Updates />
        <Faq />
        <Testimonials />
        <GetStarted />
        <Footer />
    </>
  )
}

export default Home