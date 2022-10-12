import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <>
        <footer className="footer dark-mode bg-dark py-5">
            <div className="container pt-md-2 pt-lg-3 pt-xl-4">
                <div className="row pb-5 pt-sm-2 mb-lg-2">
                    <div className="col-md-4 col-lg-3 pb-2 pb-md-0 mb-4 mb-md-0">
                        <Link className="navbar-brand order-sm-1 text-center py-0 mb-3 mb-md-4" to="/">
                            <img src="assets/img/logo.svg" alt='logo' width={'200px'} />
                        </Link>
                        <p className="fs-sm pb-2 pb-md-3 mb-3 order-sm-1 text-center text-sm-start">We’re on a mission to make it easy to live a healthy life. We are been focused on helping to make healthy easy for everyone.</p>
                        <div className="d-flex">
                            <a className="btn btn-icon btn-sm btn-secondary btn-facebook rounded-circle me-3" href="https://instagram.com/easyfitng"><i className="ai-facebook" /></a>
                            <a className="btn btn-icon btn-sm btn-secondary btn-instagram rounded-circle me-3" href="https://instagram.com/easyfitng"><i className="ai-instagram" /></a>
                            <a className="btn btn-icon btn-sm btn-secondary btn-linkedin rounded-circle" href="https://instagram.com/easyfitng"><i className="ai-linkedin" /></a>
                        </div>
                    </div>
                    <div className="col-md-8 col-lg-7 col-xl-6 offset-lg-2 offset-xl-3">
                        <div className="row row-cols-1 row-cols-sm-3">
                            <div className="col-6 mb-4 mb-md-0">
                                <h4 className="h6 fw-bold pb-lg-1">Company</h4>
                                <ul className="nav flex-column">
                                    <li><Link className="nav-link fw-normal py-1 px-0" to="/">Home</Link></li>
                                    <li><Link className="nav-link fw-normal py-1 px-0" to="/about">Reviews</Link></li>
                                    <li><Link className="nav-link fw-normal py-1 px-0" to="/faq">FAQ's</Link></li>
                                    <li><a className="nav-link fw-normal py-1 px-0" href="/">Blog</a></li>
                                </ul>
                            </div>
                            <div className="col-6 mb-4 mb-md-0">
                                <h4 className="h6 fw-bold pb-lg-1">Support</h4>
                                <ul className="nav flex-column">
                                    <li><Link className="nav-link fw-normal py-1 px-0" to="/contact">Help center</Link></li>
                                    <li><Link className="nav-link fw-normal py-1 px-0" to="/terms">Terms of service</Link></li>
                                    <li><Link className="nav-link fw-normal py-1 px-0" to="/return">Return policy</Link></li>
                                    <li><Link className="nav-link fw-normal py-1 px-0" to="/privacy">Privacy policy</Link></li>
                                </ul>
                            </div>
                            <div className="col order-sm-1 text-center text-sm-start">
                                <a className="btn btn-secondary px-3 py-2 mt-3 me-3 me-md-0" href="/">
                                    <img className="mx-1 d-none d-dark-mode-block" src="assets/img/market/appstore-light.svg" width={120} alt="App Store" />
                                </a>
                                <a className="btn btn-secondary px-3 py-2 mt-3 me-3 me-md-0" href="/">
                                    <img className="mx-1 d-none d-dark-mode-block" src="assets/img/market/googleplay-light.svg" width={119} alt="Google Play" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <p className="fs-sm mb-0 order-sm-1 text-center text-sm-start">© {(new Date().getFullYear())} EasyFit All rights reserved.</p>
            </div>
        </footer>
    </>
  )
}
