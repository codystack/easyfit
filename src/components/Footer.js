import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <>
        <footer className="footer bg-secondary pt-4 pb-2 pb-md-5 pt-sm-5">
            <div className="container-fluid pb-1 pb-md-0 px-md-5">
            <div className="dark-mode bg-dark rounded-5 position-relative overflow-hidden w-100 py-5 px-3 px-sm-4 px-xl-5 mx-auto" style={{maxWidth: '1660px'}}>
                <div className="position-absolute top-50 start-50 translate-middle" style={{width: '1664px'}}><img src="assets/img/landing/web-studio/footer-wave.png" alt="Wave" /></div>
                <div className="container position-relative zindex-2 pt-md-3 pt-lg-4 pt-xl-5 pb-2">
                <div className="row pb-2">
                    <div className="col-lg-4 col-xxl-3 pb-2 pb-lg-0 mb-4 mb-lg-0">
                        <div className="navbar-brand text-light py-0 me-0 pb-1 mb-3">
                            <img src="assets/img/logo.svg" alt='logo' width={'200px'} />
                        </div>
                        <p className="fs-sm mb-4">We’re on a mission to make it easy to live a healthy life. We are been focused on helping to make healthy easy for everyone.</p>
                    </div>
                    <div className="col-sm-4 col-lg-2 col offset-lg-1 offset-xl-2 offset-xxl-3 mb-4 mb-sm-0">
                        <ul className="nav flex-column fs-sm">
                            <li className="nav-item"><Link className="nav-link fw-normal px-0 py-1" to="/">Home</Link></li>
                            <li className="nav-item"><Link className="nav-link fw-normal px-0 py-1" to="/about">About</Link></li>
                            <li className="nav-item"><Link className="nav-link fw-normal px-0 py-1" to="/faq">FAQ</Link></li>
                            <li className="nav-item"><a className="nav-link fw-normal px-0 py-1" href="/">Blog</a></li>
                        </ul>
                    </div>
                    <div className="col-sm-4 col-lg-2 col mb-4 mb-sm-0">
                        <ul className="nav flex-column fs-sm">
                            <li className="nav-item"><Link className="nav-link fw-normal px-0 py-1" href="/contact">Help center</Link></li>
                            <li className="nav-item"><Link className="nav-link fw-normal px-0 py-1" to="/terms">Terms of service</Link></li>
                            <li className="nav-item"><Link className="nav-link fw-normal px-0 py-1" href="/return">Return policy</Link></li>
                            <li className="nav-item"><Link className="nav-link fw-normal px-0 py-1" to="/privacy">Privacy policy</Link></li>
                        </ul>
                    </div>
                    <div className="col-sm-4 col-lg-3 col-xl-2">
                        <a className="btn btn-secondary px-3 py-2 mb-3 me-3 me-md-0" href="/">
                            <img className="mx-1 d-dark-mode-none" src="assets/img/market/appstore-dark.svg" width={120} alt="App Store" />
                            <img className="mx-1 d-none d-dark-mode-block" src="assets/img/market/appstore-light.svg" width={120} alt="App Store" />
                        </a>
                        <a className="btn btn-secondary px-3 py-2 mb-3 me-3 me-md-0" href="/">
                            <img className="mx-1 d-dark-mode-none" src="assets/img/market/googleplay-dark.svg" width={119} alt="Google Play" />
                            <img className="mx-1 d-none d-dark-mode-block" src="assets/img/market/googleplay-light.svg" width={119} alt="Google Play" />
                        </a>
                    </div>
                </div>
                <div className="d-sm-flex align-items-center justify-content-between pt-4 pt-md-5 mt-2 mt-md-0 mt-lg-2 mt-xl-4">
                    <div className="d-flex justify-content-center order-sm-2 me-md-n2">
                        <a className="btn btn-icon btn-sm btn-secondary btn-instagram rounded-circle mx-2" href="https://instagram.com/easyfitng"><i className="ai-instagram" /></a>
                        <a className="btn btn-icon btn-sm btn-secondary btn-facebook rounded-circle mx-2" href="https://instagram.com/easyfitng"><i className="ai-facebook" /></a>
                        <a className="btn btn-icon btn-sm btn-secondary btn-linkedin rounded-circle mx-2" href="https://instagram.com/easyfitng"><i className="ai-linkedin" /></a>
                    </div>
                    <p className="fs-sm order-sm-1 text-center text-sm-start pt-4 pt-sm-0 mb-0 me-4"><span>© {(new Date().getFullYear())} EasyFit All rights reserved.</span></p>
                </div>
                </div>
            </div>
            </div>
        </footer>
    </>
  )
}
