import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay, EffectFade } from 'swiper'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import 'swiper/css/effect-fade'

export default function Hero() {
  return (
    <>
        <section className="ignore-dark-mode position-relative min-vh-100 py-5">
            {/* Background image slider*/}
            <Swiper
                // install Swiper modules
                modules={[Pagination, Autoplay, EffectFade]}
                pagination
                slidesPerView={1}
                effect
                speed={800}
                autoplay={{ delay: 7000 }}
            >
            <div className="swiper swiper-scale-effect position-absolute top-0 start-0 w-100 h-100">
                
                <div className="swiper-wrapper">
                    <SwiperSlide>
                        <div className="swiper-slide">
                            <div className="bg-position-top-center">
                                <img src='assets/img/slider/hero1.jpg' alt='' />
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="swiper-slide">
                            <div className="bg-position-top-center">
                                <img src='assets/img/slider/hero2.jpg' alt='' />
                            </div>
                        </div>
                    </SwiperSlide>

                    {/* <SwiperSlide>
                        <img src='assets/img/slider/hero2.jpg' alt='' />
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src='assets/img/slider/hero3.jpg' alt='' />
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src='assets/img/slider/hero4.jpg' alt='' />
                    </SwiperSlide> */}

                    {/* <SwiperSlide>
                        <div className="swiper-slide">
                            <div className="swiper-slide-cover bg-position-top-center" style={{backgroundImage: 'url(assets/img/hero03.jpg)'}} />
                        </div>
                    </SwiperSlide> */}
                </div>
                <div className="swiper-pagination mb-4" />
                
            </div>
            </Swiper>
            {/* Content*/}
            {/* <div className="container position-relative zindex-2 py-lg-3 py-xl-5 my-5">
                <div className="row pt-md-3 py-xxl-5 my-5">
                    <div className="col py-5 mb-md-4 mb-lg-5">
                    <h1 className="display-1 text-uppercase mb-4">Yoga Studio</h1>
                    <p className="d-block fs-xl pb-2 mb-4 mb-md-5" style={{maxWidth: '500px'}}>The best yoga and meditation practices, adapted at a high level to the needs of the modern pace of life.</p>
                    <div className="position-relative d-inline-flex align-items-center"><a className="btn btn-icon btn-lg btn-primary rounded-circle stretched-link" href="https://www.youtube.com/watch?v=SZCxKjgReQ4" data-bs-toggle="video"><i className="ai-play-filled" /></a><span className="fs-lg fw-semibold ms-3">Watch Video</span></div>
                    </div>
                </div>
            </div> */}
        </section>
    </>
  )
}
