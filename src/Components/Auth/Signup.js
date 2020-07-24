import React, { useState } from "react";
import firebase, { firestore } from "../../firebase";
import { Link } from "react-router-dom";
import Signin from "./Login";

export default function Signup() {
  const [userEmail, setUserEmail] = useState("");
  const [userpassword, setUserPassword] = useState("");
  const [changeScreen, setChangeScreen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleEmail = (e) => {
    console.log(e.target.value);
    setUserEmail(e.target.value);
    setError(false);
  };

  const handlePassword = (e) => {
    console.log(e.target.value);
    setError(false);

    setUserPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    firebase
      .auth()
      .createUserWithEmailAndPassword(userEmail, userpassword)
      .then((res) => {
        console.log(res.user.uid);
        setLoading(false);

        // firestore.collection("users").doc(res.user.uid).set({

        // });
      })
      .catch((err) => {
        setError(true);
        setLoading(false);
      });
  };

  const handleChangeScreen = () => {
    setChangeScreen(true);
  };

  return (
    <>
      {changeScreen ? (
        <Signin />
      ) : (
        <>
          <div class=" signup_form_container align-self-center big_bottom_spacer">
            <h4
              class="small_top_spacer logged_out_create_account"
              id="we_should_stay"
            >
              Ready for more?
            </h4>

            <p class="small">
              We give out a 15-day trial without any credit card.
            </p>

            <div class="insert_signup_form_here small_top_spacer">
              <div class="floating_signup_form">
                <form
                  class="form-horizontal small_form"
                  onSubmit={handleSubmit}
                  id="registration_form"
                >
                  <input
                    type="hidden"
                    name="csrfmiddlewaretoken"
                    value="K8g1ArIAiqUQfg9EH4ONEhcW0elmEhHL1Rw0LVWx63XftswNeUUIMRYVWYapFb31"
                  />
                  <fieldset>
                    <div class="form-group row">
                      <label for="id_email" class="col-12 col-form-label">
                        Email address
                      </label>

                      <div class="col-12">
                        <input
                          id="id_email"
                          type="text"
                          class="form-control"
                          name="email"
                          maxLength="75"
                          required
                          onChange={handleEmail}
                        />
                      </div>
                    </div>

                    <div class="form-group row">
                      <label for="id_password1" class="col-12 col-form-label">
                        Password
                      </label>

                      <div class="col-12">
                        <input
                          id="id_password1"
                          type="password"
                          class="form-control"
                          name="password1"
                          required
                          onChange={handlePassword}
                        />
                      </div>
                    </div>

                    <div class="form-group row">
                      <label for="id_password2" class="col-12 col-form-label">
                        Repeat password
                      </label>

                      <div class="col-12">
                        <input
                          id="id_password2"
                          type="password"
                          class="form-control"
                          name="password2"
                          required
                        />
                      </div>
                    </div>

                    <div class="form-group row">
                      <label for="id_tos" class="col-12 col-form-label"></label>

                      <div class="col-12 form-checkbox">
                        <input
                          id="id_tos"
                          type="checkbox"
                          name="tos"
                          class="custom-checkbox"
                          required
                        />
                        <label for="id_tos">
                          I agree to the{" "}
                          <a target="_blank" href="/terms/">
                            Terms of Service
                          </a>
                        </label>
                      </div>
                    </div>

                    {error ? (
                      <div class="form-group row">
                        <div class="submit_signup_button col-12 top_margin">
                          <div className="alert alert-danger col-sm-12">
                            There seems to be an error
                          </div>
                        </div>
                      </div>
                    ) : (
                      <></>
                    )}

                    <div class="form-group row">
                      <div class="submit_signup_button col-12 top_margin">
                        <input
                          class={
                            "btn btn-block btn-orange activation bg-primary text-white " +
                            (loading ? " disabled" : "")
                          }
                          type="submit"
                          value={loading ? "Please wait" : "Let's get started!"}
                        />
                      </div>
                    </div>

                    <div class="form-group row">
                      <div class="col-12 top_margin">
                        <a href="#we_should_stay" onClick={handleChangeScreen}>
                          Already a member? Sign in.
                        </a>
                      </div>
                    </div>
                  </fieldset>
                </form>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
