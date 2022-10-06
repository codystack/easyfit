import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Faq from '../components/Faq'
import Testimonials from '../components/Testimonials'

export default function Home() {
  return (
    <div>
      <main className="page-wrapper">
        <Navbar />

        <section className="bg-light light-mode d-flex vh-100 position-relative overflow-hidden pt-5">
          <div className="container d-flex flex-column justify-content-center position-relative zindex-2 pt-sm-3 pt-md-4 pt-xl-5 pb-1 pb-sm-3 pb-lg-4 pb-xl-5">
            <div className="row flex-lg-nowrap align-items-center pb-5 pt-2 pt-lg-4 pt-xl-0 mt-lg-4 mt-xl-0">
              <div className="col-lg-6 order-lg-2 ms-lg-4 mb-2 mb-lg-0">
                <div className="parallax order-lg-2 mx-auto" style={{maxWidth: '740px'}}>
                  <div className="parallax-layer" data-depth="0.05">
                    <img src="assets/img/hero.png" alt="Layer" />
                  </div>
                  <div className="parallax-layer" data-depth="-0.05">
                    <img src="assets/img/landing/saas-2/hero/02.png" style={{animation: 'rotate-cw 100s linear infinite'}} alt="Layer" />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 order-lg-1 text-center text-lg-start me-xl-5">
                <span className="badge text-dark fs-sm" style={{backgroundColor: '#88cdce'}}>Maintain a healthy lifestyle&nbsp; 🚀</span>
                <h1 className="display-4 pt-2 my-2 mb-xl-3">Always delicious.<br />Everyday nutritious.</h1>
                <p className="text-dark">The groundwork for all happiness is good health.</p>
                <div className="d-flex d-xl-block d-xxl-flex justify-content-center justify-content-lg-start pt-1 pt-xl-1">
                  <a className="btn btn-dark px-3 py-2 mt-3 me-3" href="/">
                    <img className="mx-1" src="assets/img/market/appstore-light.svg" width={120} alt="App Store" />
                  </a>
                  <a className="btn btn-dark px-3 py-2 mt-3" href="/">
                    <img className="mx-1" src="assets/img/market/googleplay-light.svg" width={119} alt="Google Play" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <Testimonials />
        <Faq />
        <Footer />
      </main>
    </div>
  )
}
