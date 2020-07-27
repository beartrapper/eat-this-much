import React, { useState } from "react";
import firebase from "../../firebase";
import Signup from "./Signup";

export default function Signin() {
  const [userEmail, setUserEmail] = useState("");
  const [userpassword, setUserPassword] = useState("");
  const [changeScreen, setChangeScreen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleEmail = (e) => {
    setUserEmail(e.target.value);
    setError(false);
  };

  const handlePassword = (e) => {
    setUserPassword(e.target.value);
    setError(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    firebase
      .auth()
      .signInWithEmailAndPassword(userEmail, userpassword)
      .then((res) => {
        setLoading(false);
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
        <Signup />
      ) : (
        <>
          <div class=" signup_form_container align-self-center big_bottom_spacer">
            <h4
              id="we_should_stay"
              class="small_top_spacer logged_out_create_account"
            >
              Please input the info below
            </h4>

            <p class="small">
              We hope you have a wonderful experience *fingers crossed*
            </p>

            <div class="insert_signup_form_here small_top_spacer">
              <div class="floating_signup_form">
                <form
                  class="form-horizontal small_form"
                  onSubmit={handleSubmit}
                  id="registration_form"
                >
                 
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
                          maxlength="75"
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
                          value={loading ? "Please wait" : "Login!"}
                        />
                      </div>
                    </div>

                    <div class="form-group row">
                      <div class="col-12 top_margin">
                        <a href="#we_should_stay" onClick={handleChangeScreen}>
                          Need to sign up?
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
