import React from 'react'

export default function Testimonials() {
  return (
    <>
        <section className="container py-5 mb-1 mb-sm-2 my-lg-3 my-xl-4 my-xxl-5">
            <div className="row justify-content-center pt-2 pt-sm-4 pb-4 mb-2 mb-lg-3">
            <div className="col-lg-8 col-xl-7 col-xxl-6 text-center pt-2">
                <h2 className="h1 mb-1">Testimonials from students who recommend Around</h2>
            </div>
            </div>
            <div className="swiper pb-2 pb-sm-4" data-swiper-options="{
            &quot;slidesPerView&quot;: 1,
            &quot;spaceBetween&quot;: 24,
            &quot;loop&quot;: true,
            &quot;pagination&quot;: {
            &quot;el&quot;: &quot;.swiper-pagination&quot;,
            &quot;clickable&quot;: true
            },
            &quot;breakpoints&quot;: {
            &quot;800&quot;: {
                &quot;slidesPerView&quot;: 2
            }
            }
        }">
            <div className="swiper-wrapper pt-5">
                {/* Item*/}
                <div className="swiper-slide h-auto">
                <div className="card border-0 bg-faded-info h-100 text-center">
                    <div className="polygon-avatar bg-info mx-auto translate-middle-y"><img src="assets/img/landing/mobile-app-showcase/testimonials/01.png" alt="Nick Williams" /></div>
                    <div className="card-body pt-0 mt-n4">
                    <p className="card-text fs-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis libero vitae sem ornare ornare. Aliquam ut sapien vitae quam blandit egestas. Quisque nulla elit, fermentum et tincidunt tempor, rutrum at leo. Curabitur massa quam, aliquam eu sapien sed.</p>
                    </div>
                    <div className="card-footer border-0 pt-0">
                    <div className="h4 mb-1">Nick Williams</div><span>Student</span>
                    </div>
                </div>
                </div>
                {/* Item*/}
                <div className="swiper-slide h-auto">
                <div className="card border-0 bg-faded-warning h-100 text-center">
                    <div className="polygon-avatar bg-warning mx-auto translate-middle-y"><img src="assets/img/landing/mobile-app-showcase/testimonials/02.png" alt="Lili Bocouse" /></div>
                    <div className="card-body pt-0 mt-n4">
                    <p className="card-text fs-xl">Proin interdum purus non quam convallis, quis dignissim leo cursus. Praesent finibus elit nisl, sed ultrices elit lobortis in. Donec laoreet sit amet nulla quis hendrerit. Praesent venenatis mattis ante. Praesent justo elit, suscipit a libero sit amet, luctus posuere mi.</p>
                    </div>
                    <div className="card-footer border-0 pt-0">
                    <div className="h4 mb-1">Lili Bocouse</div><span>Student</span>
                    </div>
                </div>
                </div>
                {/* Item*/}
                <div className="swiper-slide h-auto">
                <div className="card border-0 bg-faded-primary h-100 text-center">
                    <div className="polygon-avatar bg-primary mx-auto translate-middle-y"><img src="assets/img/landing/mobile-app-showcase/testimonials/04.png" alt="Esther Howard" /></div>
                    <div className="card-body pt-0 mt-n4">
                    <p className="card-text fs-xl">Viverra aliquam interdum mauris facilisi commodo euismod sit est. Et auctor diam a ac vitae vestibulum, eu. Tortor id aliquet rhoncus at orci et tempus, dictum turpis. Purus sit porta lacus, velit. Bibendum at nunc et, ac id vitae nibh semper in dignissim ac nascetur lorem et.</p>
                    </div>
                    <div className="card-footer border-0 pt-0">
                    <div className="h4 mb-1">Esther Howard</div><span>Student</span>
                    </div>
                </div>
                </div>
                {/* Item*/}
                <div className="swiper-slide h-auto">
                <div className="card border-0 bg-faded-danger h-100 text-center">
                    <div className="polygon-avatar bg-danger mx-auto translate-middle-y"><img src="assets/img/landing/mobile-app-showcase/testimonials/03.png" alt="Jane Cooper" /></div>
                    <div className="card-body pt-0 mt-n4">
                    <p className="card-text fs-xl">Nam arcu ut in bibendum tincidunt quam massa vitae viverra sem eget. Felis morbi augue cras praesent arcu purus non id consequat dignissim sollicitudin tincidunt dui, dui felis ut ultricies vestibulum ipsum ullamcorper nunc at massa a aliquam massa lacus enim.</p>
                    </div>
                    <div className="card-footer border-0 pt-0">
                    <div className="h4 mb-1">Jane Cooper</div><span>Student</span>
                    </div>
                </div>
                </div>
            </div>
            {/* Pagination (bullets)*/}
            <div className="swiper-pagination position-relative bottom-0 mt-2 mt-lg-3 pt-4" />
            </div>
        </section>
    </>
  )
}
