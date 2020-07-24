import React from "react";
import Calculate from "./Search/Calculate";
import Signup from "./Auth/Signup";

export default function Home() {
  return (
    <>
      {/* <div id="sidebar_container"></div> */}

      {/* <div id="sidebar_nav"></div> */}

      <div class="body-container">
        <div
          id="fill_container"
          class="tomato_background tomato_background_left"
        >
          <div>
            <div id="main_container" class="main_view_container">
              <div>
                {/* calculator */}
                <Calculate />
              </div>
            </div>

            <div class="container">
              <div class="enter_some_calories"></div>
            </div>

            <div class="oatmeal_background">
              <div class="testimonial_container container-fluid top_margin">
                <div class="container">
                  <div class="row">
                    <div class="col-12 offset-0 col-sm-10 offset-sm-1 big_top_spacer">
                      <div class="row homepage_testimonials bottom_spacer">
                        <div class="col-12 col-lg-6 col-xl-7 text-left big_top_spacer">
                          <p>
                            "Eat This Much not only helps me hit my macros, but
                            also makes sure I'm not eating the same bland thing
                            every day. I've lost 35 lbs over the past year, and
                            with ETM, I'm eating and performing better than
                            ever."
                            <span>*</span>
                            <br />
                          </p>
                          <p class="font-weight-bold testimonial_author mb-1">
                            Sam Konowich
                            <a
                              href="https://www.instagram.com/samkonthemankon/"
                              target="_blank"
                            >
                              @samkonthemankon
                            </a>
                          </p>
                          <p class="small">
                            (Sam is now our first ETM sponsored athlete!)
                          </p>
                        </div>
                      </div>

                      <div class="row homepage_testimonials bottom_spacer">
                        <div class="col-12 col-lg-7 col-xl-8 text-left big_top_spacer">
                          <p>
                            "I found out about Eat This Much in July 2017 and
                            lost 32 lbs in 6 months! Now I'm a fit over 50
                            female in amazing condition, and this site is what I
                            refer to several times a day to ensure I eat
                            properly and manage my macros."
                            <span>*</span>
                            <br />
                          </p>
                          <p class="font-weight-bold testimonial_author mb-1">
                            Meg M., awesome ETM user
                          </p>
                        </div>
                      </div>

                      <div class="row text-center bottom_margin">
                        <div class="col-12 text-white">
                          Looking for
                          <a href="/professionals/">
                            Meal planning software for dietitians, trainers, and
                            coaches
                          </a>
                          ? Check it out <a href="/professionals/">here</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="print-body"></div>

      <span id="amount_measuring_div"></span>
    </>
  );
}
