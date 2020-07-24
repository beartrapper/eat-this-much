import React from "react";

export default function Results() {
  return (
    <div
      class="container day_plan_container show_meals_as_cards"
      style={{ display: "none;" }}
    >
      <div class="row">
        <div class="col-12 col-md-8  offset-lg-1">
          <div class="row">
            <div class="day_header col-12">
              <div class="row">
                <div class="day_title col-auto mr-auto">Today's Meal Plan</div>

                <div class="day_icons col-auto">
                  <div
                    class="day_refresh_button svg-button inline-block"
                    style={{ "vertical-align": "middle;" }}
                    data-original-title=""
                    title=""
                  >
                    <span style={{ cursor: "pointer;" }}>Regenerate</span>  
                    <svg class="etm-icon etm-icon-sm">
                      <use href="#icon-refresh3"></use>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-12">
              <div
                class="progress day-generator-progress"
                style={{ height: "2px;" }}
              >
                <div
                  class="progress-bar"
                  role="progressbar"
                  style={{ width: "0%;" }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
            <div class="single_day_view col-12">
              <div style={{ display: "none;" }}>
                <div class="workspace_area">
                  {/* nimber of calories */}
                  <div class="row bg-white border-none">
                    <div
                      class="plan_stats_popover col-12"
                      data-original-title=""
                      title=""
                    >
                      <div class="plan_spark_chart"></div>

                      <div class="plan_calories text-medium">0 Calories</div>

                      <div class="view_nutrition">
                        <i class="fa fa-info-circle" aria-hidden="true"></i>
                        <i
                          class="fa fa-warning stats_warning"
                          style={{ display: "none" }}
                          aria-hidden="true"
                        ></i>
                        <span>Details</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="meal_list meal_list_border col-12">
                  <div class="">
                    <div class="meal_box meal_container row">
                      <div class="meal_blocking_overlay"></div>
                      <div class="col-12 meal_header align-items-center">
                        <div class="row">
                          <div class="col-auto">
                            <div class="row">
                              <div class="col-auto text-dark-gray text-large text-strong print_meal_title wrap_or_truncate pr-0">
                                Breakfast
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
                                    0 Calories
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
                                <svg class="etm-icon etm-icon-sm">
                                  <use href="#icon-refresh3"></use>
                                </svg>
                              </div>
                            </div>

                            <div class="dropdown meal_options_dropdown">
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
                                  <i class="fa fa-gear" aria-hidden="true"></i>
                                  Edit Breakfast's Meal Settings
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
                          </div>
                        </div>
                      </div>

                      {/* <div class="meal_content col-12">
    <div class="row meal_foods_row">
        <ul class="meal_foods col-12 collection-list ui-sortable" tabindex="0"><li class="not-sortable" style="background: transparent; border: none; box-shadow: none;"><var class="empty-list-caption"><div class="row"><div class="col-12 text-light-gray text-small empty_meal_box"><div class="text-label text-strong pb-2">Empty Meal</div>Hit <i class="fa fa-refresh"></i> to generate, or search for foods to add and drag them in. <a style="font-size: 12px;display: block;" target="_blank" href="https://eatthismuch.groovehq.com/knowledge_base/topics/why-is-the-generator-leaving-some-of-my-meals-empty">Is the generator leaving this empty?</a></div></div></var></li></ul>
    </div>
</div> */}
                    </div>
                    <div class="meal_box meal_container row">
                      <div class="meal_blocking_overlay"></div>
                      <div class="col-12 meal_header align-items-center">
                        <div class="row">
                          <div class="col-auto">
                            <div class="row">
                              <div class="col-auto text-dark-gray text-large text-strong print_meal_title wrap_or_truncate pr-0">
                                Lunch
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
                                    0 Calories
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
                                <svg class="etm-icon etm-icon-sm">
                                  <use href="#icon-refresh3"></use>
                                </svg>
                              </div>
                            </div>

                            <div class="dropdown meal_options_dropdown">
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
                                  <i class="fa fa-gear" aria-hidden="true"></i>
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
                                    <div class="text-label text-strong pb-2">
                                      Empty Meal
                                    </div>
                                    Hit <i class="fa fa-refresh"></i> to
                                    generate, or search for foods to add and
                                    drag them in.{" "}
                                    <a
                                      target="_blank"
                                      href="https://eatthismuch.groovehq.com/knowledge_base/topics/why-is-the-generator-leaving-some-of-my-meals-empty"
                                    >
                                      Is the generator leaving this empty?
                                    </a>
                                  </div>
                                </div>
                              </var>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div class="meal_box meal_container row">
                      <div class="meal_blocking_overlay"></div>
                      <div class="col-12 meal_header align-items-center">
                        <div class="row">
                          <div class="col-auto">
                            <div class="row">
                              <div class="col-auto text-dark-gray text-large text-strong print_meal_title wrap_or_truncate pr-0">
                                Dinner
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
                                    0 Calories
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
                                <svg class="etm-icon etm-icon-sm">
                                  <use href="#icon-refresh3"></use>
                                </svg>
                              </div>
                            </div>

                            <div class="dropdown meal_options_dropdown">
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
                                  <i class="fa fa-gear" aria-hidden="true"></i>
                                  Edit Dinner's Meal Settings
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
                                    <div class="text-label text-strong pb-2">
                                      Empty Meal
                                    </div>
                                    Hit <i class="fa fa-refresh"></i> to
                                    generate, or search for foods to add and
                                    drag them in.{" "}
                                    <a
                                      target="_blank"
                                      href="https://eatthismuch.groovehq.com/knowledge_base/topics/why-is-the-generator-leaving-some-of-my-meals-empty"
                                    >
                                      Is the generator leaving this empty?
                                    </a>
                                  </div>
                                </div>
                              </var>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div class="meal_box meal_container row">
                      <div class="meal_blocking_overlay"></div>
                      <div class="col-12 meal_header align-items-center">
                        <div class="row">
                          <div class="col-auto">
                            <div class="row">
                              <div class="col-auto text-dark-gray text-large text-strong print_meal_title wrap_or_truncate pr-0">
                                Snack
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
                                    0 Calories
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
                                <svg class="etm-icon etm-icon-sm">
                                  <use href="#icon-refresh3"></use>
                                </svg>
                              </div>
                            </div>

                            <div class="dropdown meal_options_dropdown">
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
                                  <i class="fa fa-gear" aria-hidden="true"></i>
                                  Edit Snack's Meal Settings
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
                                    <div class="text-label text-strong pb-2">
                                      Empty Meal
                                    </div>
                                    Hit <i class="fa fa-refresh"></i> to
                                    generate, or search for foods to add and
                                    drag them in.{" "}
                                    <a
                                      target="_blank"
                                      href="https://eatthismuch.groovehq.com/knowledge_base/topics/why-is-the-generator-leaving-some-of-my-meals-empty"
                                    >
                                      Is the generator leaving this empty?
                                    </a>
                                  </div>
                                </div>
                              </var>
                            </li>
                          </ul>
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
    </div>
  );
}
