import React from 'react'
import Footer from '../components/Footer'
import Faq from '../components/Faq'
import Navbarlight from '../components/Navbarlight'

export default function Faqs() {
  return (
    <>
    <Navbarlight />
      <div className='container-fluid p-0 pt-3 mt-5'>
        <div className="ignore-dark-mode overflow-hidden" style={{backgroundColor: '#e6e7fb'}}>
          <div className="row align-items-center g-0">
            <div className="col-md-6 offset-xl-1 text-center text-md-start">
              <div className="pt-4 px-4 px-sm-5 pe-md-0 ps-xl-4">
                <p className="fs-xs text-uppercase pt-3 pt-md-0 mb-0">Frequently Asked Questions</p>
                <h1 className="display-7 mb-0" style={{fontFamily: 'pt-serif, serif', fontWeight: '700', fontStyle: 'normal'}}>FAQ</h1>
              </div>
            </div>
            <div className="col-md-6 col-xl-5 d-flex justify-content-end"><img src="assets/img/faq.png" width={491} alt="Banner" /></div>
          </div>
        </div>
      </div>
      <Faq />
      <Footer />
    </>
  )
}
