import React from 'react'
import Faq from '../components/Faq'
import Footer from '../components/Footer'
import Navbarlight from '../components/Navbarlight'

export default function Contact() {
  return (
    <>
        <main className="page-wrapper">
            <Navbarlight />
                <section className="pt-5">
                    <div className="container pt-5 pb-lg-5 pb-xl-5 pb-5 py-xxl-5">
                    
                        <h1 className="display-2 pt-5 mb-0">Talk to us</h1>
                        <p className="fs-lg pb-4 mb-2 mb-sm-3">We’re here to support you Monday-Friday, 9am-6pm</p>
                    
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-xl-4 g-4 pb-5 pb-sm-4 pb-lg-5">
                            {/* Address*/}
                            <div className="col">
                                <div className="card border-0 h-100" style={{backgroundColor: '#ebfff5'}}>
                                    <div className="card-body">
                                        <h4 className="card-title mb-4">Address</h4>
                                        <p className="fs-lg fw-medium pb-3 mb-3">Lekki Phase 1 1061046, Lagos, Nigeria.</p>
                                    </div>
                                </div>
                            </div>
                            {/* Phone*/}
                            <div className="col">
                                <div className="card border-0 h-100" style={{backgroundColor: '#e5e9fc'}}>
                                    <div className="card-body">
                                    <h4 className="card-title mb-4">Phone</h4>
                                    <ul className="list-unstyled mb-0">
                                        <li className="pb-1 mb-2"><span className="d-block fs-sm text-muted mb-1">Official No.</span><a className="nav-link fs-lg p-0" href="tel:+2349121879734">+234 912 187 9734</a></li>
                                        <li><span className="d-block fs-sm text-muted mb-1">Alt No.</span><a className="nav-link fs-lg p-0" href="tel:+2349157441825">+234 915 744 1825</a></li>
                                    </ul>
                                    </div>
                                </div>
                            </div>
                            {/* Schedule*/}
                            <div className="col">
                                <div className="card border-0 h-100" style={{backgroundColor: '#fff3eb'}}>
                                    <div className="card-body">
                                    <h4 className="card-title mb-4">Schedule</h4>
                                    <ul className="list-unstyled mb-0">
                                        <li className="pb-1 mb-2"><span className="d-block fs-sm text-muted mb-1">Mon - Fri</span>
                                            <div className="d-flex align-items-center"><span className="text-nav fs-lg fw-medium">9:00am</span><span className="border-top mx-4" style={{width: '36px', height: '1px', color: '#000'}} /><span className="text-nav fs-lg fw-medium">6:00pm</span></div>
                                        </li>

                                        <li><span className="d-block fs-sm text-muted mb-1">Saturday</span>
                                            <div className="d-flex align-items-center"><span className="text-nav fs-lg fw-medium">10:00am</span><span className="border-top mx-4" style={{width: '36px', height: '1px'}} /><span className="text-nav fs-lg fw-medium">2:00pm</span></div>
                                        </li>
                                    </ul>
                                    </div>
                                </div>
                            </div>
                            {/* Email*/}
                            <div className="col">
                                <div className="card border-0 h-100 bg-secondary">
                                    <div className="card-body">
                                    <h4 className="card-title mb-4">Email</h4>
                                    <ul className="list-unstyled mb-0">
                                        <li className="pb-1 mb-2"><span className="d-block fs-sm text-muted mb-1">Official Email</span><a className="nav-link fs-lg p-0" href="mailto:hello@easyfitmeals.com">hello@easyfitmeals.com</a></li>
                                        <li><span className="d-block fs-sm text-muted mb-1">Alt Email</span><a className="nav-link fs-lg p-0" href="mailto:easyfitng@gmail.com">easyfitng@gmail.com </a></li>
                                    </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            
            <Faq />
            <Footer />
        </main>
    </>
  )
}
