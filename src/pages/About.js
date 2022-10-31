import React, { useEffect } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import AOS from 'aos'

export default function About() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
  return (
    <>
        <Navbar />

        <section className="bg-light position-relative py-5">
            <div className="d-none d-dark-mode-block position-absolute top-0 start-0 w-100 h-100" />
            <div className="container dark-mode position-relative zindex-2 py-5 mb-4 mb-sm-5">
                <div className="row pb-5 mb-2 mb-sm-0 mb-lg-3">
                    <div className="col-lg-8 col-xl-8 text-center pt-5 mx-auto">
                        <h1 className="display-2 pb-2 pb-sm-3 text-black" style={{fontFamily: 'pt-serif, serif', fontWeight: '700', fontStyle: 'normal'}}>We’re on a mission to make it easy to live a healthy life.</h1>
                    </div>
                </div>
            </div>
        </section>

        <section className="container position-relative zindex-3" style={{marginTop: '-135px'}}>
            <div className="rounded-5 overflow-hidden"> 
                <div className="jarallax ratio ratio-21x9" data-jarallax data-speed="0.6">
                    <div className="jarallax-img" style={{backgroundImage: 'url(assets/img/aboutimg.jpeg)'}} />
                </div>
            </div>
            <div className="row pt-5 mt-n2 mt-sm-0 mt-md-2 mt-lg-4 mt-xl-5 mb-xl-5">
                <div className="col-md-4 col-lg-5">
                    <div className="fs-sm text-uppercase mb-3">Who we are</div>
                    <h2 className="display-6">Healthy food for busy people.</h2>
                </div>
                <div className="col-md-7 col-xl-7 pt-1 pt-sm-2 pt-md-5">
                    <p className="fs-lg">EasyFit was established on the principle that real food should be convenient and delicious, and we live for making healthy meals that people are excited to eat. Our food contains zero preservatives, gluten, antibiotics, artificial sweeteners, hormones, or other junk.</p>
                    <p className="fs-lg">We take gluten-free food (and cooking) seriously—and your trust is our #1. Because gluten-free meals are only as good as the kitchens they’re prepared in, we make sure our space is guaranteed safe.</p>
                    <p className="fs-lg mb-0">We deliver fresh, never frozen meals directly to our customers doorstep. The fully-prepared-meals arrive ready to heat and eat in minutes. We want to change the way our customers think about pre-prepared meals, from how it’s cooked (by real chefs!) to how it gets delivered.</p>
                </div>
            </div>
        </section>

        <section className="container py-5 my-1 my-sm-2 my-xl-4 my-xxl-5" data-aos="fade-up" data-aos-duration={500} data-aos-offset={250} data-disable-parallax-down="md">
            <div className="row align-items-center pt-2 pt-sm-3 pt-md-4 pt-lg-5 mt-xl-2 mt-xxl-3">
            <div className="col-md-6 col-xl-5 pb-3 pb-md-0 mb-4 mb-md-0">
                <div className="ratio ratio-1x1 d-flex align-items-center position-relative rounded-circle overflow-hidden bg-size-cover mx-auto" style={{maxWidth: '530px', backgroundImage: 'url(assets/img/Arinola.jpeg)'}}>
                    <div className="position-absolute top-0 start-0 w-100 h-100 opacity-50" />
                    <div className="position-relative zindex-2 p-4">
                        <div className="text-center mx-auto" style={{maxWidth: '275px'}}></div>
                    </div>
                </div>
            </div>
            <div className="col-md-6 col-xl-5 offset-xl-1">
                <div className="ps-md-4 ps-xl-0">
                    <div className="fs-sm text-uppercase mb-3">About our ceo</div>
                    <h2 className="display-6">Arinola Odunuga</h2>
                    <p className="fs-lg">A certified fitness trainer and nutrition coach first started Easyfit in 2021 to fill a missing element in the health and fitness industry in Nigeria - taking the hassle of planning and preparing healthy meals away.  </p>
                    <p className="fs-lg">We  don’t just save you the trip to the market/grocery store, we make your health and fitness journey a convenient,delicious and positive experience. No shopping. No cooking. No cleaning. No calculating calories and macros.</p>
                </div>
            </div>
            </div>
        </section>

        {/* <section className="bg-dark position-relative overflow-hidden py-5">
            <div className="d-none d-dark-mode-block position-absolute top-0 start-0 w-100 h-100" style={{backgroundColor: 'rgba(255,255,255, .02)'}} />
            <div className="container dark-mode position-relative zindex-2 pt-3 pb-sm-3 pt-sm-4 py-md-5 my-lg-2 my-xl-3 my-xxl-4">
            <div className="row align-items-center py-xxl-2" data-aos={"fade-up"} data-aos-duration={600} data-aos-offset={300} data-disable-parallax-down="md">
                <div className="col-md-6 pb-3 pb-md-0 mb-3 mb-md-0"><img src="assets/img/Arinola.jpeg" width={620} alt="Image" /></div>
                <div className="col-md-6 col-lg-5 col-xxl-4 offset-lg-1" data-aos={"fade-up"} data-aos-duration={850} data-aos-offset={200} data-disable-parallax-down="md">
                <div className="ps-md-4 ps-lg-0">
                    <h2 className="mb-lg-4">Segment your audience using a variety of methods</h2>
                    <p className="pb-lg-2 mb-xl-4">Segmentation allows you to divide users according to a given criterion, and then for each of the groups to develop an ads and product. Bibendum velit mi, ac sed ac malesuada ultrices non lectus mi pellentesque vel at tempus cras sed a eleifend augue amet mauris, leo ac amet erat malesuada ultrices.</p><a className="btn btn-lg btn-link px-0" href="#">Learn more<i className="ai-arrow-right ms-2" /></a>
                </div>
                </div>
            </div>
            </div>
        </section> */}
        <Footer />
    </>
  )
}
