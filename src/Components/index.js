import React, { useEffect, useState } from "react";
import Calculate from "./Search/Calculate";
import moment from "moment";
import { auth, firestore } from "../firebase";
import { Redirect } from "react-router-dom";

export default function Home() {
  const [redirectToPaymentPage, setRedirectToPaymentPage] = useState(false);
  const [UID, setUID] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUID(user.uid);
        firestore
          .collection("users")
          .doc(user.uid)
          .get()
          .then((doc) => {
            console.log("docment data: ", doc.data().expiryDate.seconds);
            let currentDate = moment()._d;
            console.log(currentDate);
            let check = moment(currentDate).isAfter(
              doc.data().expiryDate.toDate()
            );
            console.log(check);
            if (check) setRedirectToPaymentPage(true);
          });
      }
    });
  }, []);

  return (
    <>
      {redirectToPaymentPage ? (
        <Redirect
          to={{
            pathname: "/uh-oh",
            state: {
              UID,
            },
          }}
        />
      ) : (
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
                          <div class="row text-center bottom_margin">
                            <div class="col-12 text-white">
                              Looking for &nbsp;
                              <a href="https://unwantedfats.com">
                                a way back to main site?
                              </a>
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
      )}
    </>
  );
}
