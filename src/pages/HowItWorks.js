import React, { useEffect } from 'react'
import Footer from '../components/Footer'
import Navbarlight from '../components/Navbarlight'
import Cta from '../components/Cta'
import AOS from 'aos'

export default function HowDoesItWork() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
  return (
    <>
        <Navbarlight />
        <div className='container-fluid p-0 pt-3 mt-5'>
            <div className="ignore-dark-mode overflow-hidden" style={{backgroundColor: '#e1cbfa'}}>
                <div className="row align-items-center g-0">
                    <div className="col-md-6 offset-xl-1 text-center text-md-start">
                        <div className="pt-4 px-4 px-sm-5 pe-md-0 ps-xl-4">
                            <h1 className="display-3 mb-0 pt-3 pt-md-0" style={{fontFamily: 'pt-serif, serif', fontWeight: '700', fontStyle: 'normal'}}>How it works</h1>
                        </div>
                    </div>
                    <div className="col-md-6 col-xl-5 d-flex justify-content-end"><img src="assets/img/howitworks.png" width={491} alt="Banner" /></div>
                </div>
            </div>
        </div>

        <section className="overflow-hidden py-5 my-md-2 my-xl-4 my-xxl-5">
            <div className="container py-2 py-sm-4 py-lg-5">
            <h2 className="h1 text-center pb-3 mb-3 mb-lg-4 mt-xxl-2">How does it work?</h2>
            {/* Step*/}
            <div className="row align-items-center position-relative pb-5 pb-lg-0 mb-1 mb-sm-2 mb-md-4 mb-lg-0">
                <div className="col-md-6 col-xl-5 offset-lg-1 order-md-2 pb-2 pb-md-0 mb-4 mb-md-0" data-aos="fade-left" data-aos-duration={500} data-aos-offset={250} data-disable-parallax-down="md"><img className="d-dark-mode-none" src="assets/img/landing/saas-2/steps/01-light.png" width={525} alt="steps" /><img className="d-none d-dark-mode-block" src="assets/img/landing/saas-2/steps/01-dark.png" width={525} alt="steps" /></div>
                <div className="col-md-6 col-lg-5 col-xl-4 offset-xl-1 order-md-1" data-aos="fade-right" data-aos-duration={500} data-aos-offset={250} data-disable-parallax-down="md">
                <div className="pe-md-4 pe-lg-0"><span className="badge fs-sm bg-faded-primary text-primary mb-3 mb-lg-4">Step 01</span>
                    <h3 className="h2 mb-3 mb-lg-4">Connect your site to the platform using a code</h3>
                    <p className="pb-1 pb-lg-0 mb-4 mb-lg-5">Nec id eget malesuada urna at sed est adipiscing auctor at massa id duis fames ut condimentum velit est, donec mauris tortor massa et viverra.</p><a className="btn btn-outline-primary rounded-pill" href="/">Get connected</a>
                </div>
                </div>
            </div>
            {/* Arrow*/}
            <div className="d-none d-lg-flex justify-content-center" data-aos="fade-in" data-aos-duration={500} data-aos-offset={250}>
                <svg className="d-block text-primary" width={339} height={365} viewBox="0 0 339 365" fill="none" xmlns="http://www.w3.org/2000/svg" style={{marginLeft: '-150px', marginTop: '-140px', marginBottom: '-108px'}}>
                <path d="M324 291.371C120.111 291.37 240.756 58.7225 1.00032 73.2606" stroke="url(#arrow1)" strokeWidth={2} strokeLinecap="round" strokeDasharray="6 6" />
                <path d="M337.375 290.62C338.074 290.998 338.074 292.001 337.375 292.379L328.476 297.196C327.81 297.557 327 297.074 327 296.317L327 286.683C327 285.925 327.81 285.443 328.476 285.803L337.375 290.62Z" fill="currentColor" />
                <defs>
                    <linearGradient id="arrow1" x1={324} y1="291.5" x2="-2.99974" y2="72.4997" gradientUnits="userSpaceOnUse">
                    <stop offset={0} stopColor="currentColor" />
                    <stop offset={1} stopColor="currentColor" stopOpacity={0} />
                    </linearGradient>
                </defs>
                </svg>
            </div>
            {/* Step*/}
            <div className="row align-items-center position-relative pb-5 pb-lg-0 mb-1 mb-sm-2 mb-md-4 mb-lg-0">
                <div className="col-md-6 col-xl-5 offset-xl-1 pb-2 pb-md-0 mb-4 mb-md-0" data-aos="fade-right" data-aos-duration={500} data-aos-offset={250} data-disable-parallax-down="md"><img className="d-dark-mode-none" src="assets/img/landing/saas-2/steps/02-light.png" width={473} alt="steps" /><img className="d-none d-dark-mode-block" src="assets/img/landing/saas-2/steps/02-dark.png" width={473} alt="steps" /></div>
                <div className="col-md-6 col-lg-5 col-xl-4 offset-lg-1" data-aos="fade-left" data-aos-duration={500} data-aos-offset={250} data-disable-parallax-down="md">
                <div className="ps-md-4 ps-lg-0"><span className="badge fs-sm bg-faded-primary text-primary mb-3 mb-lg-4">Step 02</span>
                    <h3 className="h2 mb-3 mb-lg-4">Set up important dashboard metrics</h3>
                    <ul className="list-unstyled mb-0">
                    <li className="d-flex pt-1 mt-2"><i className="ai-check-alt text-primary fs-4 mt-n1 me-2" />Forecasting and recommendations</li>
                    <li className="d-flex pt-1 mt-2"><i className="ai-check-alt text-primary fs-4 mt-n1 me-2" />Identification of patterns, analysis</li>
                    <li className="d-flex pt-1 mt-2"><i className="ai-check-alt text-primary fs-4 mt-n1 me-2" />Segmentation by various methods</li>
                    </ul>
                </div>
                </div>
            </div>
            {/* Arrow*/}
            <div className="d-none d-lg-flex justify-content-center" data-aos="fade-in" data-aos-duration={500} data-aos-offset={250}>
                <svg className="d-block text-primary" width={263} height={275} viewBox="0 0 263 275" fill="none" xmlns="http://www.w3.org/2000/svg" style={{marginTop: '-60px', marginLeft: '-120px', marginBottom: '-80px'}}>
                <path d="M8.13678 249.647C7.47108 250.081 6.59001 249.602 6.59106 248.808L6.60444 238.689C6.60544 237.931 7.4158 237.45 8.08162 237.811L16.5478 242.408C17.2136 242.77 17.2512 243.712 16.6163 244.125L8.13678 249.647Z" fill="currentColor" />
                <path d="M261.961 37.8891C216.908 65.6243 128.226 135.486 133.916 193.05C141.029 265.005 265.134 173.468 173.666 148.634C89.2542 125.715 30.9125 210.547 13.9796 236.702" stroke="url(#arrow2)" strokeWidth={2} strokeLinecap="round" strokeDasharray="6 6" />
                <defs>
                    <linearGradient id="arrow2" x1="13.9797" y1="234.5" x2="276.704" y2="60.1939" gradientUnits="userSpaceOnUse">
                    <stop offset={0} stopColor="currentColor" />
                    <stop offset={1} stopColor="currentColor" stopOpacity={0} />
                    </linearGradient>
                </defs>
                </svg>
            </div>
            {/* Step*/}
            <div className="row align-items-center position-relative">
                <div className="col-md-6 col-xl-5 offset-lg-1 order-md-2 d-md-flex justify-content-end pb-2 pb-md-0 mb-4 mb-md-0" data-aos="fade-left" data-aos-duration={500} data-aos-offset={250} data-disable-parallax-down="md"><img className="d-dark-mode-none" src="assets/img/landing/saas-2/steps/03-light.png" width={473} alt="how it works" /><img className="d-none d-dark-mode-block" src="assets/img/landing/saas-2/steps/03-dark.png" width={473} alt="steps" /></div>
                <div className="col-md-6 col-lg-5 col-xl-4 offset-xl-1 order-md-1" data-aos="fade-right" data-aos-duration={500} data-aos-offset={250} data-disable-parallax-down="md">
                <div className="pe-md-4 pe-lg-0"><span className="badge fs-sm bg-faded-primary text-primary mb-3 mb-lg-4">Step 03</span>
                    <h3 className="h2 mb-3 mb-lg-4">Download the data in a convenient format</h3>
                    <p className="pb-1 pb-lg-0 mb-4 mb-lg-5">Bibendum velit mi, ac sed ac malesuada ultrices non lectus mi pellentesque vel at tempus cras sed a eleifend augue amet mauris, leo ac amet erat.</p><a className="btn btn-outline-primary rounded-pill" href="/">Get connected</a>
                </div>
                </div>
            </div>
            </div>
        </section>
        <Cta />
        <Footer />
    </>
  )
}
