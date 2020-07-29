import React, { useState, useEffect } from "react";
import axios from "axios";
import Results from "./Results";
import Signup from "../Auth/Signup";
import Signin from "../Auth/Login";
import { auth } from "../../firebase";


export default function Calculate() {
  const [selectedDiet, setSelectedDiet] = useState("Paleo");
  const [calories, setSelectedCalories] = useState(50);
  const [numberOfMeals, setNumberOfMeals] = useState(1);
  const [loggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);
  const [resultsFetched, setResultsFetched] = useState(false);
  const [URL, setURL] = useState(false);
  const [UID, setUID] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setLoggedIn(true);
        setUID(user.uid);
        console.log("user", user);
      }
    });
  }, []);

  const handleselectedDiet = (tabType) => {
    setSelectedDiet(tabType);
    setError(false);
  };

  const handleCalories = (e) => {
    setSelectedCalories(e.target.value);
    setError(false);
    setResultsFetched(false);
  };

  const handleNumberOfMeals = (e) => {
    console.log(e.target.value);
    setNumberOfMeals(e.target.value);
    setError(false);
    setResultsFetched(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    let minNumberOfCalories;
    minNumberOfCalories = calories / numberOfMeals;

    if (minNumberOfCalories < 70) {
      setError(true);
      setLoading(false);
    } else {
      //setting the URL for props
      setURL(
        `https://api.spoonacular.com/recipes/complexSearch?&apiKey=57649005808344c8ad07d17bf36286c4&diet=${selectedDiet}&addRecipeInformation=true&addRecipeNutrition=true&minCalories=${
          minNumberOfCalories - 20
        }&maxCalories=${minNumberOfCalories}&number=${numberOfMeals}`
      );

      //state may or may not get updated this soon so not using URL variable down in axios
      axios
        .get(
          `https://api.spoonacular.com/recipes/complexSearch?&apiKey=57649005808344c8ad07d17bf36286c4&diet=${selectedDiet}&addRecipeInformation=true&addRecipeNutrition=true&minCalories=${
            minNumberOfCalories - 10
          }&maxCalories=${minNumberOfCalories}&number=${numberOfMeals}`
        )
        .then((res) => {
          console.log(res);
          setResults(res.data.results);
          setResultsFetched(true);
          setLoading(false);
        })
        .catch((err) => {
          console.log("err in fetching data" + err);
          setLoading(false);
        });
    }
  };

  return (
    <>
      {/* header text - start */}
      <div id="header_container">
        <div>
          <div className="container">
            <div className="row">
              <div className="col-12 text-center big_top_margin top_spacer">
                <h1 className="display-5">Put your diet on autopilot</h1>
              </div>
              <div className="col-md-8 offset-md-2 text-center top_margin text-medium-old">
                Eat This Much creates personalized meal plans based on your food
                preferences, budget, and schedule. Reach your diet and
                nutritional goals with our calorie calculator, weekly meal
                plans, grocery lists and more.{" "}
                <strong>Create your meal plan right here in seconds.</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* header text - end */}

      <div className="home_generator_box container pb-5 mb-5">
        <div className="row generator_header_div">
          <div
            className="col-12 text-center top_margin bottom_margin"
            style={{ "font-size": "1.25rem;" }}
          >
            Ready to give it a shot? Let us know your diet.
          </div>
          <div className="generator_header col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2">
            <div className="preset_selector_div">
              <ul className="nav nav-pills preset_selector no-gutters text-center">
                <li className="nav-item col-4 col-sm-2" data-value="anything">
                  <a
                    id="Anything"
                    onClick={() => handleselectedDiet("Anything")}
                    href="javascript:void(0);"
                    className={
                      "nav-link text-white" +
                      (selectedDiet == "Anything"
                        ? " bg-primary"
                        : " text-dark")
                    }
                  >
                    <svg className="etm-diet-icon">
                      <use href="#icon-sandwich-40"></use>
                    </svg>
                    Anything
                  </a>
                </li>
                <li className="nav-item col-4 col-sm-2" data-value="paleo">
                  <a
                    id="Paleo"
                    onClick={() => handleselectedDiet("Paleo")}
                    className={
                      "nav-link text-white" +
                      (selectedDiet == "Paleo" ? " bg-primary" : " text-dark")
                    }
                    href="javascript:void(0);"
                  >
                    <svg className="etm-diet-icon">
                      <use href="#icon-paleo-diet-40"></use>
                    </svg>
                    Paleo
                  </a>
                </li>
                <li className="nav-item col-4 col-sm-2" data-value="vegetarian">
                  <a
                    id="Veg"
                    onClick={() => handleselectedDiet("Veg")}
                    className={
                      "nav-link text-white" +
                      (selectedDiet == "Veg" ? " bg-primary" : " text-dark")
                    }
                    href="javascript:void(0);"
                  >
                    <svg className="etm-diet-icon">
                      <use href="#icon-broccoli-40"></use>
                    </svg>
                    Vegetarian
                  </a>
                </li>
                <li className="nav-item col-4 col-sm-2" data-value="vegan">
                  <a
                    id="Vegan"
                    onClick={() => handleselectedDiet("Vegan")}
                    className={
                      "nav-link text-white" +
                      (selectedDiet == "Vegan" ? " bg-primary" : " text-dark")
                    }
                    href="javascript:void(0);"
                  >
                    <svg className="etm-diet-icon">
                      <use href="#icon-vegan-symbol-40"></use>
                    </svg>
                    Vegan
                  </a>
                </li>
                <li
                  className="nav-item col-4 col-sm-2"
                  data-value="atkins / ketogenic"
                >
                  <a
                    id="Ketogenic"
                    onClick={() => handleselectedDiet("Ketogenic")}
                    className={
                      "nav-link text-white" +
                      (selectedDiet == "Ketogenic"
                        ? " bg-primary"
                        : " text-dark")
                    }
                    href="javascript:void(0);"
                  >
                    <svg className="etm-diet-icon">
                      <use href="#icon-no-gluten-40"></use>
                    </svg>
                    Ketogenic
                  </a>
                </li>
                <li
                  className="nav-item col-4 col-sm-2"
                  data-value="mediterranean"
                >
                  <a
                    id="Mediterranean"
                    onClick={() => handleselectedDiet("Mediterranean")}
                    className={
                      "nav-link text-white" +
                      (selectedDiet == "Mediterranean"
                        ? " bg-primary"
                        : " text-dark")
                    }
                    href="javascript:void(0);"
                  >
                    <svg className="etm-diet-icon">
                      <use href="#icon-olive-40"></use>
                    </svg>
                    Mediterranean
                  </a>
                </li>
              </ul>
            </div>
            <div className="row form-group small_top_spacer">
              <label
                className="col-12 col-sm-3 col-md-4 col-lg-5 text-sm-right col-form-label"
                for="cal_input"
              >
                I want to eat
              </label>
              <div className="col-12 col-sm-9 col-md-6 col-lg-6 col-xl-5">
                <input
                  type="number"
                  min="70"
                  max="20000"
                  step="10"
                  placeholder="####"
                  className="form-control calorie-input text-md-right"
                  id="cal_input"
                  onChange={handleCalories}
                />
                <label for="cal_input" id="cal-input-label">
                  Calories
                </label>
                {/* <a
                  href="javascript:void(0);"
                  className="orange_link"
                  id="not_sure_button"
                >
                  <i className="fa fa-calculator" aria-hidden="true"></i>
                  Not sure?
                </a> */}
              </div>
            </div>
            <div className="row form-group">
              <label
                for="num_meals_selector"
                className="col-12 col-sm-3 col-md-4 col-lg-5 text-sm-right col-form-label"
              >
                in
              </label>
              <div className="col-12 col-sm-9 col-md-6 col-lg-6 col-xl-5">
                <select
                  className="form-control num_meals_selector"
                  id="num_meals_selector"
                  onChange={handleNumberOfMeals}
                >
                  <option value="1">1 meal</option>
                  <option value="2">2 meals</option>
                  <option value="3">3 meals</option>
                  <option value="4">4 meals</option>
                  <option value="5">5 meals</option>
                  <option value="6">6 meals</option>
                  <option value="7">7 meals</option>
                  <option value="8">8 meals</option>
                  <option value="9">9 meals</option>
                </select>
              </div>
            </div>

            <div
              className="row alert alert-danger"
              id="update_macros_validation"
            ></div>

            <div className="row form-group small_top_spacer">
              <div className="col-12 col-md-3 offset-md-4 offset-lg-5">
                <button
                  type="button"
                  className={
                    "btn btn-lg btn-block btn-orange gen_button btn-primary " +
                    (loading ? " disabled" : "")
                  }
                  data-loading-text="Generate"
                  onClick={handleSubmit}
                >
                  {loading ? "Generating" : "Generate"}
                </button>
              </div>
            </div>
            <div className="col-sm-12">
              {error ? (
                <div className="alert alert-danger col-sm-12 mt-3 text-center">
                  Calories for {numberOfMeals} meals cannot be this low.
                </div>
              ) : (
                <></>
              )}
            </div>

            {/* LOADER  */}
            {/* <div
              className="row form-group loading-text"
              style={{ display: "none;" }}
            >
              <div className="col-12 col-md-6 offset-md-4 offset-lg-5">
                <svg className="etm-icon etm-icon-md">
                  <use href="#hungry-puck-loader"></use>
                </svg>
                <span className="insert-loading-text"></span>
              </div>
            </div> */}
          </div>
        </div>

        {loading ? (
          <div className="container mt-5">
            {/* LOADER v2 */}
            <div className="auto_generator_div">
              <div className="row form-group loading-text">
                <div className="col-12">
                  <h4>Generating your meal plan...</h4>
                </div>
                <div className="col-12">
                  <svg className="etm-icon etm-icon-md">
                    <use href="#hungry-puck-loader"></use>
                  </svg>
                  <span className="insert-loading-text"></span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>

      {resultsFetched ? (
        <div className="col-sm-12">
          <div className="row">
            <div className={!loggedIn ? "col-sm-8" : "col-sm-10"}>
              <Results
                results={results}
                URL={URL}
                diet={selectedDiet}
                loggedIn={loggedIn}
                UID={UID}
              />
              
            </div>
            {!loggedIn ? (
              <div className="col-sm-4">
                <Signup />
                {/* <Signin /> */}
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
