import React, { useEffect, useState } from "react";
import { FaBeer, FaShoppingCart } from "react-icons/fa";

export default function Ingredients(props) {
  console.log(props);
  const [ingredientsToBeUsed, setIngredientsToBeUsed] = useState([]);
  const [addToCart, setAddToCart] = useState(false);
  const [addToCartSignUpBanner, setAddToCartSignUpBanner] = useState(false);

  useEffect(() => {
    let Ingredients = [];

    for (
      let count_first = 0;
      count_first < props.results.length;
      count_first++
    ) {
      for (
        let count_second = 0;
        count_second < props.results[count_first].analyzedInstructions.length;
        count_second++
      ) {
        for (
          let count_third = 0;
          count_third <
          props.results[count_first].analyzedInstructions[count_second].steps
            .length;
          count_third++
        ) {
          for (
            let count_fourth = 0;
            count_fourth <
            props.results[count_first].analyzedInstructions[count_second].steps[
              count_third
            ].ingredients.length;
            count_fourth++
          ) {
            Ingredients.push(
              props.results[count_first].analyzedInstructions[count_second]
                .steps[count_third].ingredients[count_fourth]
            );
          }
        }
      }
    }

    const uniqueIngredients = Array.from(
      new Set(Ingredients.map((a) => a.id))
    ).map((id) => {
      return Ingredients.find((a) => a.id === id);
    });
    setIngredientsToBeUsed(uniqueIngredients);
  }, [props]);

  const addToCartButton = () => {
    if (!props.loggedIn) {
      setAddToCartSignUpBanner(true);
    } else setAddToCart(true);
  };

  return (
    <div class="row mt-5 ">
      <div class="col-12 col-md-8  offset-lg-1">
        <hr className="hr" />
        <div class="row pb-5 ">
          <div class="day_header col-12 text-center">
            {/* Regenerate */}
            <div class="row pl-3 rounded shadow bg-white pt-3 pb-2 kali-khaloti">
              <h6>
                <b>INGREDIENTS</b>
              </h6>{" "}
            </div>
            <div className="col-sm-12 ">
              <div className="row">
                {ingredientsToBeUsed.map((item, key) => {
                  let image = `https://spoonacular.com/cdn/ingredients_100x100/${item.image}`;
                  return (
                    <>
                      <div className="col-sm-2  pt-4">
                        <div class="row myDIV">
                          <img
                            class="image-progress-woth p-2 img-round shadow bg-white image-hover-bigger "
                            src={image}
                          />
                        </div>
                        <div class="bg-white shadow rounded hide row mt-1 text-sm-custom centering-mice">
                          <div className="text-sm-custom text-center">
                            {item.name}
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
            <button
              onClick={addToCartButton}
              className={
                "col-sm-12 btn mt-5 p-3" +
                (addToCartSignUpBanner ? " btn-danger" : " btn-primary")
              }
            >
              {!addToCartSignUpBanner ? <></> : <>Please sign up first</>}

              {!addToCart && !addToCartSignUpBanner ? (
                <>
                  Add To Cart <FaShoppingCart />
                </>
              ) : (
                <>{!addToCartSignUpBanner ? <>Added</> : <></>}</>
              )}
            </button>
          </div>
        </div>
        <hr className=" hr" />
      </div>
    </div>
  );
}
