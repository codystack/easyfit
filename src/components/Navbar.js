import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className="dark-mode">
        <header className="navbar navbar-expand-lg fixed-top bg-dark dark-mode">
          <div className="container">
            <a className="navbar-brand pe-sm-3" href="./">
                <img src="assets/img/logo.svg" alt="logo" width={'150px'} />
            </a>
            <a className="btn btn-light btn-sm fs-sm order-lg-3 d-none d-sm-inline-flex" href="#faq" target="_blank" rel="noopener">Get Started</a>
            <button className="navbar-toggler ms-sm-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"><span className="navbar-toggler-icon" /></button>
            <nav className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav navbar-nav-scroll" style={{Height: '520px'}}>
                <li className="nav-item">
                    <Link className="nav-link" to="/">Home</Link>
                </li>

                <li className="nav-item">
                    <Link className="nav-link" to="/about">About</Link>
                </li>

                <li className="nav-item">
                    <Link className="nav-link" to="/how-it-works">How it works</Link>
                </li>

                <li className="nav-item">
                    <Link className="nav-link" to="/faq">FAQ</Link>
                </li>

                <li className="nav-item">
                    <Link className="nav-link" to="/contact">Contact</Link>
                </li>
              </ul>
                <div className="d-sm-none p-3 mt-n3">
                    <a className="btn btn-primary w-100  mb-1" href="/" target="_blank" rel="noopener">Get Started</a>
                </div>
            </nav>
          </div>
        </header>
    </div>
  )
}
