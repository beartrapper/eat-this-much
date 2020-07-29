import React, { useEffect, useState } from "react";
import axios from "axios";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { FaRegCalendar } from "react-icons/fa";
import Calendar from "react-calendar";
import { firestore } from "../../firebase";
import moment from "moment";
import Ingredients from "./Ingredients";
import CalendarMod from "../Calendar/Calendar";

export default function Results(props) {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [signUpNotice, setSignUpNotice] = useState(false);
  const [loadingSingleMeal, setLoadingMeal] = useState(false);
  const [hideRegen, setHideRegen] = useState(false);
  const [done, setDone] = useState(true);
  const [currentItem, setCurrentItem] = useState({});
  const [open, setOpen] = useState(false);
  const [openCalendar, setOpenCalendar] = useState(false);
  const [showRecipe, setShowRecipe] = useState(false);
  const [recipeDetails, setRecipeDetails] = useState(false);
  const [date, setDate] = useState(new Date());
  const [loadingMealSave, setLoadingMealSave] = useState(false);
  const [changeTilesColor, setChangeTilesColor] = useState([]);

  //CLOSE ICON FOR MODAL
  const closeIcon = (
    <svg fill="currentColor" viewBox="0 0 20 20" width={0} height={0}>
      <path
        fillRule="evenodd"
        d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
        clipRule="evenodd"
      ></path>
    </svg>
  );

  useEffect(() => {
    console.log(props);

    setResults(props.results);
    if (props.loggedIn) {
      setSignUpNotice(false);
      setHideRegen(false);
    }
  }, [props.loggedIn]);

  const handleRecipeDetail = (item) => {
    //finding the recipe details
    let Steps = [];
    for (
      let count_1 = 0;
      count_1 < item.analyzedInstructions.length;
      count_1++
    ) {
      for (
        let count_2 = 0;
        count_2 < item.analyzedInstructions[count_1].steps.length;
        count_2++
      ) {
        Steps.push(item.analyzedInstructions[count_1].steps[count_2].step);
      }
    }
    setRecipeDetails(Steps);
    setShowRecipe(true);
  };

  const handleRegenerate = (e) => {
    e.preventDefault();
    if (!props.loggedIn) {
      setSignUpNotice(true);
      setHideRegen(true);
    } else {
      setLoading(true);
      axios
        .get(props.URL)
        .then((res) => {
          setResults(res.data.results);
          setLoading(false);
          console.log(res.data);
        })
        .catch((err) => {
          console.log("err in regen: ", err);
          setLoading(false);
        });
    }
  };

  const handleRegenerateSingleMeal = (arrayItemToBeRemoved) => {
    if (!props.loggedIn) {
      setSignUpNotice(true);
      setHideRegen(true);
    } else {
      setLoadingMeal(true);
      // setDone(false);
      //filter out the current value
      let tempArray = [];
      tempArray = results.filter(function (item) {
        return item !== arrayItemToBeRemoved;
      });
      console.log(tempArray);

      axios
        .get(
          `https://api.spoonacular.com/recipes/complexSearch?&apiKey=57649005808344c8ad07d17bf36286c4&diet=${
            props.diet
          }&addRecipeInformation=true&addRecipeNutrition=true&minCalories=${
            arrayItemToBeRemoved.nutrition[0].amount - 20
          }&maxCalories=${arrayItemToBeRemoved.nutrition[0].amount}&number=1`
        )
        .then((res) => {
          tempArray.push(res.data.results[0]);

          setResults(tempArray);
          console.log("yte,[", tempArray);
          setLoadingMeal(false);
          console.log(tempArray);
          setTimeout(() => {
            console.log("results", results);
            setDone(true);
          }, 2000);
        })
        .catch((err) => {
          console.log("err in regen: ", err);
          setLoadingMeal(false);
          setDone(true);
        });
    }
  };

  const handleChangeDate = (_date) => {
    setLoadingMealSave(true);
    console.log(_date);
    setDate(_date);

    const obj = {
      date: _date,
      item: results,
    };

    firestore
      .collection("users")
      .doc(props.UID)
      .get()
      .then(async (doc) => {
        console.log("im here");
        const savedFood = await doc.data().savedFood;
        let uniqueFood = [];
        let uniqueFoodDate = [];

        for (let count = 0; count < savedFood.length; count++) {
          if (!moment(savedFood[count].date.toDate()).isSame(_date)) {
            uniqueFoodDate.push(savedFood[count].date.toString());
            uniqueFood.push(savedFood[count]);
          }
        }
        console.log(uniqueFood);
        uniqueFood.push(obj);
        uniqueFoodDate.push(obj.date);

        console.log(uniqueFood);
        setChangeTilesColor(uniqueFoodDate);
        firestore
          .collection("users")
          .doc(props.UID)
          .update({
            savedFood: uniqueFood,
          })
          .then((res) => {
            console.log("done");
            setLoadingMealSave(false);
          })
          .catch((err) => {
            console.log(err);
            setLoadingMealSave(false);
          });
      });
  };

  //coloring the tile when selected
  // function tileClassName({ date, view }) {
  //   // Add class to tiles in month view only
  //   if (view === 'day') {
  //     // Check if a date React-Calendar wants to check is on the list of dates to add class to
  //     if (changeTilesColor.find(dDate => moment(dDate).isSame(date))) {
  //       return ' bg-primary text-white ';
  //     }
  //   }
  // }

  const [dateBigOne, setDateBigOne] = useState(new Date());

  const handleChangeDateBigOne = (_date) => {
    setDateBigOne(_date);
    firestore
      .collection("users")
      .doc(props.UID)
      .get()
      .then(async (doc) => {
        let savedFood = await doc.data().savedFood;
        for (let count = 0; count < savedFood.length; count++) {
          if (moment(savedFood[count].date.toDate()).isSame(_date)) {
            setResults(savedFood[count].item);
            break;
          }
        }
      });
  };

  return (
    <>
      <div class="container day_plan_container show_meals_as_cards">
        {/* modal for detail of ingredients */}
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          center
          closeIcon={closeIcon}
        >
          <div class="ft-recipe custom-y-align">
            <div class="ft-recipe__thumb">
              {/* <h3>Strawberry Waffle</h3> */}

              <img src={currentItem.image} alt="Strawberry Waffle" />
            </div>
            {showRecipe ? (
              <>
                {recipeDetails.map((item, key) => {
                  return (
                    <div className="container pt-3 ">
                      <p className="text-style-custom">
                        {key + 1} - {item}
                      </p>
                      <hr />
                    </div>
                  );
                })}

                {recipeDetails.length == 0 ? <h1>Just wing it! ;)</h1> : <></>}
              </>
            ) : (
              <>
                <div class="ft-recipe__content">
                  <div class="content__header">
                    <div class="row-wrapper">
                      <h2 class="recipe-title"> {currentItem.title}</h2>
                      <div class="user-rating"></div>
                    </div>

                    <ul class="recipe-details">
                      <li class="recipe-details-item time">
                        <i class="ion ion-ios-clock-outline"></i>
                        <span class="value">{currentItem.readyInMinutes}</span>
                        <span class="title">Minutes</span>
                      </li>
                      <li class="recipe-details-item ingredients">
                        <i class="ion ion-ios-book-outline"></i>
                        <span class="value">{currentItem.healthScore}</span>
                        <span class="title">H-Score</span>
                      </li>
                      <li class="recipe-details-item servings">
                        <i class="ion ion-ios-person-outline"></i>
                        <span class="value">{currentItem.servings}</span>
                        <span class="title">Serving</span>
                      </li>
                    </ul>
                  </div>
                  <p class="description">{/* {currentItem.summary} */}</p>
                  <footer class="content__footer">
                    <a onClick={() => handleRecipeDetail(currentItem)}>
                      View Recipe
                    </a>
                  </footer>
                </div>
              </>
            )}
          </div>
        </Modal>

        {/* modal for calendar */}
        <Modal
          open={openCalendar}
          onClose={() => {
            setOpenCalendar(false);
          }}
          center
          closeIcon={closeIcon}
        >
          {loadingMealSave ? (
            // {/* LOADER  */}
            <div
              className="row form-group loading-text p-5 m-5"
              // style={{ display: "none;" }}
            >
              <div className="col-12 col-md-6 offset-md-4 offset-lg-5">
                <svg className="etm-icon etm-icon-md">
                  <use href="#hungry-puck-loader"></use>
                </svg>
                <span className="insert-loading-text">Saving meal</span>
              </div>
            </div>
          ) : (
            <>
              <div className="row col-sm-12 rounded shadow ml-1 p-3 mb-1 ">
                <h5>Please Click on the date you want to save the meal to.</h5>
              </div>
              <Calendar
                onChange={handleChangeDate}
                value={date}
                className="calendar-UI rounded shadow tu-galan"
              />
            </>
          )}
        </Modal>
        <div class="row">
          <div class="col-12 col-md-8  offset-lg-1">
            <div class="row">
              <div class="day_header col-12">
                {/* Regenerate */}
                <div class="row">
                  <div class="day_title col-auto mr-auto">
                    Today's Meal Plan
                  </div>

                  {!hideRegen ? (
                    <div class="day_icons col-auto">
                      <div
                        class="day_refresh_button svg-button inline-block"
                        style={{ "vertical-align": "middle;" }}
                        data-original-title=""
                        title=""
                      >
                        {/* <span
                        onClick={handleRegenerate}
                        style={{ cursor: "pointer;" }}
                      >
                        {loading ? "Regenerating" : "Regenerate"}
                      </span>{" "} */}
                         
                        {!loading ? (
                          <svg
                            onClick={handleRegenerate}
                            class="etm-icon etm-icon-sm"
                          >
                            <use href="#icon-refresh3"></use>
                          </svg>
                        ) : (
                          <>
                            <span style={{ cursor: "pointer" }}>
                              Regenerating
                            </span>
                          </>
                        )}
                        <svg
                          onClick={() => {
                            if (!props.loggedIn) {
                              setSignUpNotice(true);
                              setHideRegen(true);
                            } else setOpenCalendar(true);
                          }}
                          class="etm-icon etm-icon-sm ml-3 pt-1"
                        >
                          <FaRegCalendar />
                        </svg>
                      </div>
                    </div>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
              <div className="col-sm-12">
                {signUpNotice ? (
                  <div className="col-auto alert alert-info text-center">
                    Please sign up first
                  </div>
                ) : (
                  <></>
                )}
              </div>

              <div class="single_day_view col-12">
                <div class="row">
                  <div class="meal_list meal_list_border col-12">
                    <div class="">
                      {results.map((item, key) => {
                        console.log(key);
                        let Title;
                        if (key == 0) Title = "Breakfast";
                        else if (key == 1) Title = "Lunch";
                        else if (key == 2) Title = "Dinner";
                        else Title = "Snack";

                        return (
                          <>
                            {done ? (
                              <div class="meal_box meal_container row">
                                <div class="meal_blocking_overlay"></div>
                                <div class="col-12 meal_header align-items-center">
                                  <div class="row">
                                    <div class="col-auto">
                                      <div class="row">
                                        <div class="col-auto text-dark-gray text-large text-strong print_meal_title wrap_or_truncate pr-0">
                                          {Title}
                                        </div>
                                      </div>
                                      <div class="row">
                                        <div class="col-auto meal_stats">
                                          <div>
                                            <span
                                              class="cal_amount text-small text-light-gray"
                                              data-original-title=""
                                              title=""
                                            >
                                              {item.nutrition[0].amount}{" "}
                                              Calories
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>

                                    <div class="ml-auto col-auto meal_bar meal_icons">
                                      <div
                                        class="meal_refresh_btn inline-block"
                                        title="Regenerate this meal"
                                      >
                                        <div class="svg-button">
                                          <svg
                                            onClick={() =>
                                              handleRegenerateSingleMeal(item)
                                            }
                                            class="etm-icon etm-icon-sm"
                                          >
                                            {loadingSingleMeal ? (
                                              "Wait"
                                            ) : (
                                              <use href="#icon-refresh3"></use>
                                            )}
                                          </svg>
                                        </div>
                                      </div>

                                      {/* DROP DOWN IN THE RESULTS       */}
                                      {/* <div class="dropdown meal_options_dropdown">
                                      <div
                                        class="clickable meal_title dropdown-toggle meal_options_dropdown_button"
                                        data-toggle="dropdown"
                                      >
                                        <div class="svg-button">
                                          <svg class="etm-icon etm-icon-sm meal-dropdown-icon">
                                            <use href="#icon-view-more"></use>
                                          </svg>
                                        </div>
                                      </div>
                                      <div class="dropdown-menu meal-actions-dropdown-menu ">
                                        <a
                                          href="javascript:void(0);"
                                          class="dropdown-item edit_meal_type"
                                        >
                                          <i
                                            class="fa fa-gear"
                                            aria-hidden="true"
                                          ></i>
                                          Edit Lunch's Meal Settings
                                        </a>
                                        <div class="dropdown-divider"></div>

                                        <a
                                          class="dropdown-item"
                                          href="/user/register-free-account/"
                                        >
                                          <i
                                            class="fa fa-user-o"
                                            aria-hidden="true"
                                          ></i>
                                          Find restaurant meals and more
                                          <br />
                                          by creating a free account
                                        </a>
                                      </div>
                                    </div>
                                   */}
                                    </div>
                                  </div>
                                </div>

                                <div class="meal_content col-12">
                                  <div class="row meal_foods_row">
                                    <ul
                                      class="meal_foods col-12 collection-list ui-sortable"
                                      tabindex="0"
                                    >
                                      <li class="not-sortable">
                                        <var class="empty-list-caption">
                                          <div class="row">
                                            <div class="col-12 text-light-gray text-small empty_meal_box">
                                              <div className="row">
                                                <div
                                                  className={
                                                    !props.loggedIn
                                                      ? "col-sm-2"
                                                      : "col-sm-2"
                                                  }
                                                >
                                                  <img
                                                    className="image-progress-woth"
                                                    src={item.image}
                                                    onClick={() => {
                                                      setOpen(true);
                                                      setCurrentItem(item);
                                                      setShowRecipe(false);
                                                    }}
                                                  />
                                                </div>
                                                <div className="col-sm-10 mt-2 pl-3 ">
                                                  {!props.loggedIn ? (
                                                    <h5 className="text-black ">
                                                      {item.title}
                                                    </h5>
                                                  ) : (
                                                    <h6 className="text-black ">
                                                      {item.title}
                                                    </h6>
                                                  )}

                                                  <p>
                                                    Please click on the image to
                                                    see the details
                                                  </p>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </var>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            ) : (
                              <></>
                            )}
                          </>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Ingredients results={results} loggedIn={props.loggedIn} />

      <div class="row mt-1 ">
        <div class="col-12 col-md-8  offset-lg-1">
          <div class="row pb-5 ">
            <div class="day_header col-12 text-center">
              <div class="row pl-3 rounded shadow bg-white pt-4 pb-3 kali-khaloti">
                <h6>
                  {!props.loggedIn ? (
                    <>Sign up to access the calendar.</>
                  ) : (
                    <> Please click on the date to retrieve your diet</>
                  )}
                </h6>{" "}
              </div>
              {props.loggedIn ? (
                <Calendar
                  onChange={handleChangeDateBigOne}
                  value={dateBigOne}
                  className="calendar-UI rounded shadow mt-2"
                />
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
