import React from 'react'

export default function Faq() {
  return (
    <>
        <section className="bg-secondary py-5" id="faq">
          <div className="container py-md-2 py-lg-3 py-xl-5">
            <div className="row">
              <div className="col-md-4 text-center text-md-start">
                <h2 className="h1">We're here to help.</h2>
                <p className="pb-3 pb-sm-4">If you have any questions about EasyFit, or if you need help placing an order for your EasyFit product, please checkout our frequently asked questions.</p>
                <div className="d-none d-md-flex justify-content-center">
                  <svg className="text-warning ms-n4" width={200} height={211} viewBox="0 0 200 211" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M198.804 194.488C189.279 189.596 179.529 185.52 169.407 182.07L169.384 182.049C169.227 181.994 169.07 181.939 168.912 181.884C166.669 181.139 165.906 184.546 167.669 185.615C174.053 189.473 182.761 191.837 189.146 195.695C156.603 195.912 119.781 196.591 91.266 179.049C62.5221 161.368 48.1094 130.695 56.934 98.891C84.5539 98.7247 112.556 84.0176 129.508 62.667C136.396 53.9724 146.193 35.1448 129.773 30.2717C114.292 25.6624 93.7109 41.8875 83.1971 51.3147C70.1109 63.039 59.63 78.433 54.2039 95.0087C52.1221 94.9842 50.0776 94.8683 48.0703 94.6608C30.1803 92.8027 11.2197 83.6338 5.44902 65.1074C-1.88449 41.5699 14.4994 19.0183 27.9202 1.56641C28.6411 0.625793 27.2862 -0.561638 26.5419 0.358501C13.4588 16.4098 -0.221091 34.5242 0.896608 56.5659C1.8218 74.6941 14.221 87.9401 30.4121 94.2058C37.7076 97.0203 45.3454 98.5003 53.0334 98.8449C47.8679 117.532 49.2961 137.487 60.7729 155.283C87.7615 197.081 139.616 201.147 184.786 201.155L174.332 206.827C172.119 208.033 174.345 211.287 176.537 210.105C182.06 207.125 187.582 204.122 193.084 201.144C193.346 201.147 195.161 199.887 195.423 199.868C197.08 198.548 193.084 201.144 195.528 199.81C196.688 199.192 197.846 198.552 199.006 197.935C200.397 197.167 200.007 195.087 198.804 194.488ZM60.8213 88.0427C67.6894 72.648 78.8538 59.1566 92.1207 49.0388C98.8475 43.9065 106.334 39.2953 114.188 36.1439C117.295 34.8947 120.798 33.6609 124.168 33.635C134.365 33.5511 136.354 42.9911 132.638 51.031C120.47 77.4222 86.8639 93.9837 58.0983 94.9666C58.8971 92.6666 59.783 90.3603 60.8213 88.0427Z" fill="currentColor" />
                  </svg>
                </div>
              </div>
              <div className="col-md-8 col-lg-7 offset-lg-1">
                <div className="accordion" id="faq">
                  
                  <div className="accordion-item bg-light">
                    <h3 className="accordion-header" id="headingOne">
                      <button className="accordion-button text-dark" type="button" data-bs-toggle="collapse" data-bs-target="#questionOne" aria-expanded="true" aria-controls="questionOne">How does the pricing work?</button>
                    </h3>
                    <div className="accordion-collapse collapse show" id="questionOne" aria-labelledby="headingOne" data-bs-parent="#faq">
                      <div className="accordion-body fs-sm">Our meals range from N3,000 to N7,000 based on your preference and how much you???re ordering at once. You get a 5% discount if you order 10 or more meals a week and 10% discount for 21 or more meals a week.</div>
                    </div>
                  </div>

                  <div className="accordion-item bg-light">
                    <h3 className="accordion-header" id="headingTwo">
                      <button className="accordion-button collapsed text-dark" type="button" data-bs-toggle="collapse" data-bs-target="#questionTwo" aria-expanded="false" aria-controls="questionTwo">When are meals delivered?</button>
                    </h3>
                    <div className="accordion-collapse collapse" id="questionTwo" aria-labelledby="headingTwo" data-bs-parent="#faq">
                      <div className="accordion-body fs-sm">We deliver daily, twice a week or once weekly based on your delivery preference.</div>
                    </div>
                  </div>

                  <div className="accordion-item bg-light">
                    <h3 className="accordion-header" id="headingThree">
                      <button className="accordion-button collapsed text-dark" type="button" data-bs-toggle="collapse" data-bs-target="#questionThree" aria-expanded="false" aria-controls="questionThree">How do i cancel or pause my account?</button>
                    </h3>
                    <div className="accordion-collapse collapse" id="questionThree" aria-labelledby="headingThree" data-bs-parent="#faq">
                      <div className="accordion-body fs-sm">Coming Soon</div>
                    </div>
                  </div>

                  <div className="accordion-item bg-light">
                    <h3 className="accordion-header" id="headingFour">
                      <button className="accordion-button collapsed text-dark" type="button" data-bs-toggle="collapse" data-bs-target="#questionFour" aria-expanded="false" aria-controls="questionFour">What do you do with the food containers?</button>
                    </h3>
                    <div className="accordion-collapse collapse" id="questionFour" aria-labelledby="headingFour" data-bs-parent="#faq">
                      <div className="accordion-body fs-sm">Whatever you want! they are recyclable and reusable. You can either clean and keep them or donate them locally.</div>
                    </div>
                  </div>

                  <div className="accordion-item bg-light">
                    <h3 className="accordion-header" id="headingFive">
                      <button className="accordion-button collapsed text-dark" type="button" data-bs-toggle="collapse" data-bs-target="#questionFive" aria-expanded="false" aria-controls="questionFive">Can i freeze my meals?</button>
                    </h3>
                    <div className="accordion-collapse collapse" id="questionFive" aria-labelledby="headingFive" data-bs-parent="#faq">
                      <div className="accordion-body fs-sm">Yes, the containers are freezer friendly but we recommend you freeze only meals that are labelled as freezer friendly.</div>
                    </div>
                  </div>

                  <div className="accordion-item bg-light">
                    <h3 className="accordion-header" id="headingSix">
                      <button className="accordion-button collapsed text-dark" type="button" data-bs-toggle="collapse" data-bs-target="#questionSix" aria-expanded="false" aria-controls="questionSix">I bought a meal plan already, please can you help me prepare the meals?</button>
                    </h3>
                    <div className="accordion-collapse collapse" id="questionSix" aria-labelledby="headingSix" data-bs-parent="#faq">
                      <div className="accordion-body fs-sm">No, we don???t offer this service.</div>
                    </div>
                  </div>

                  <div className="accordion-item bg-light">
                    <h3 className="accordion-header" id="headingSeven">
                      <button className="accordion-button collapsed text-dark" type="button" data-bs-toggle="collapse" data-bs-target="#questionSeven" aria-expanded="false" aria-controls="questionSeven">Do you have vigan options?</button>
                    </h3>
                    <div className="accordion-collapse collapse" id="questionSeven" aria-labelledby="headingSeven" data-bs-parent="#faq">
                      <div className="accordion-body fs-sm">Not at the moment.</div>
                    </div>
                  </div>

                  <div className="accordion-item bg-light">
                    <h3 className="accordion-header" id="heading8">
                      <button className="accordion-button collapsed text-dark" type="button" data-bs-toggle="collapse" data-bs-target="#question8" aria-expanded="false" aria-controls="question8">How do I book a consultation?</button>
                    </h3>
                    <div className="accordion-collapse collapse" id="question8" aria-labelledby="heading8" data-bs-parent="#faq">
                      <div className="accordion-body fs-sm">Please send an email to <a href='mailto:easyfitng@gmail.com'>easyfitng@gmail.com</a> or call us on.</div>
                    </div>
                  </div>

                  <div className="accordion-item bg-light">
                    <h3 className="accordion-header" id="heading9">
                      <button className="accordion-button collapsed text-dark" type="button" data-bs-toggle="collapse" data-bs-target="#question9" aria-expanded="false" aria-controls="question9">I???m trying to lose weight but also build muscle, can your meals help with that?</button>
                    </h3>
                    <div className="accordion-collapse collapse" id="question9" aria-labelledby="heading9" data-bs-parent="#faq">
                      <div className="accordion-body fs-sm">Yes they can, make sure to pick the meals with higher protein content from our menu.</div>
                    </div>
                  </div>

                  <div className="accordion-item bg-light">
                    <h3 className="accordion-header" id="heading10">
                      <button className="accordion-button collapsed text-dark" type="button" data-bs-toggle="collapse" data-bs-target="#question10" aria-expanded="false" aria-controls="question10">How much weight am I guaranteed to lose?</button>
                    </h3>
                    <div className="accordion-collapse collapse" id="question10" aria-labelledby="heading10" data-bs-parent="#faq">
                      <div className="accordion-body fs-sm">We can???t guarantee specific figures because the amount you lose is dependent on a couple of factors. Our customers lose an average of 3kg  per month.</div>
                    </div>
                  </div>

                  <div className="accordion-item bg-light">
                    <h3 className="accordion-header" id="heading11">
                      <button className="accordion-button collapsed text-dark" type="button" data-bs-toggle="collapse" data-bs-target="#question11" aria-expanded="false" aria-controls="question11">Do you offer juice cleanse/detox?</button>
                    </h3>
                    <div className="accordion-collapse collapse" id="question11" aria-labelledby="heading11" data-bs-parent="#faq">
                      <div className="accordion-body fs-sm">No, we do not.</div>
                    </div>
                  </div>

                  <div className="accordion-item bg-light">
                    <h3 className="accordion-header" id="heading12">
                      <button className="accordion-button collapsed text-dark" type="button" data-bs-toggle="collapse" data-bs-target="#question12" aria-expanded="false" aria-controls="question12">Do you have low carbohydrate meal options?</button>
                    </h3>
                    <div className="accordion-collapse collapse" id="question12" aria-labelledby="heading12" data-bs-parent="#faq">
                      <div className="accordion-body fs-sm">Yes, we do. The macros are labeled on each meal to help with selection.</div>
                    </div>
                  </div>

                  <div className="accordion-item bg-light">
                    <h3 className="accordion-header" id="heading13">
                      <button className="accordion-button collapsed text-dark" type="button" data-bs-toggle="collapse" data-bs-target="#question13" aria-expanded="false" aria-controls="question13">How do I order?</button>
                    </h3>
                    <div className="accordion-collapse collapse" id="question13" aria-labelledby="heading13" data-bs-parent="#faq">
                      <div className="accordion-body fs-sm">All orders are completed on our app through our easy checkout process.</div>
                    </div>
                  </div>

                  <div className="accordion-item bg-light">
                    <h3 className="accordion-header" id="heading14">
                      <button className="accordion-button collapsed text-dark" type="button" data-bs-toggle="collapse" data-bs-target="#question14" aria-expanded="false" aria-controls="question14">Is there a discount for referring a friend?</button>
                    </h3>
                    <div className="accordion-collapse collapse" id="question14" aria-labelledby="heading14" data-bs-parent="#faq">
                      <div className="accordion-body fs-sm">Yes! we apply 10% off your next order after you refer someone. Have them put in your user name in the referral section at checkout.</div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </section>
    </>
  )
}
