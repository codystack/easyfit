import React from 'react'
// import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Testimonials from '../components/Testimonials'
import Hero from '../components/Hero'

export default function Home() {
  return (
    <div>
      <main className="page-wrapper">
        <Navbar />
        <Hero />
        {/* <section className="ignore-dark-mode position-relative min-vh-100 py-5">
          <div className="swiper swiper-scale-effect position-absolute top-0 start-0 w-100 h-100">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="swiper-slide-cover bg-position-top-center" style={{backgroundImage: 'url(assets/img/hero02.jpg)'}} />
              </div>
              <div className="swiper-slide">
                <div className="swiper-slide-cover bg-position-top-center" style={{backgroundImage: 'url(assets/img/landing/yoga-studio/hero/02.jpg)'}} />
              </div>
              <div className="swiper-slide">
                <div className="swiper-slide-cover bg-position-top-center" style={{backgroundImage: 'url(assets/img/landing/yoga-studio/hero/03.jpg)'}} />
              </div>
            </div>
            <div className="swiper-pagination mb-4" />
          </div>
        </section> */}

        
        <Testimonials />
        <Footer />
      </main>
    </div>
  )
}
