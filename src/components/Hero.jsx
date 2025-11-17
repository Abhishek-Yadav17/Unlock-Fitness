import React from 'react'
import '../styles/Hero.scss'

const Hero = () => {
  return (
    <main className='hero'>
      <div className="hero-left">
        <div className="hero-left-top">
          <h1>DROP THE <br /> QUICK FIXES. <br /> LET'S BUILD</h1>
          <h2>what lasts, with us</h2>
        </div>
        <div className="hero-left-bottom">
          <div className="subtitle1">
            <img src="/images/zoom.png" alt="zoom" />
            <h4>
              ALL OUR SESSIONS <br /> HAPPEN ON
              <img src="/images/zoom-text.png" alt="zoom" />
            </h4>
          </div>
          <div className="subtitle2">
            <p>Our programs are simple, flexible, and sustainable, designed to help you show up consistently.</p>
            <button>EXPLORE <img src="/images/arrow2.png" alt="arrow" /></button>
          </div>
        </div>
      </div>

      <img src="/images/hero.png" className='hero-img' alt="hero" />
      <img src="/images/heroshape2.png" className='arrow' alt="hero" />
    </main>
  )
}

export default Hero