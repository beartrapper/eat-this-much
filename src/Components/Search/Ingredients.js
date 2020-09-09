import React, { useEffect, useState } from "react";
import { FaBeer, FaShoppingCart } from "react-icons/fa";

export default function Ingredients(props) {
  const [ingredientsToBeUsed, setIngredientsToBeUsed] = useState([]);
  const [addToCart, setAddToCart] = useState(false);
  const [addToCartSignUpBanner, setAddToCartSignUpBanner] = useState(false);
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    console.log('porps', props)

    if(props.ingredrients.length != 0)
    setIngredientsToBeUsed(props.ingredrients)
  }, [props]);

  const addToCartButton = () => {
    if (!props.loggedIn) {
      setAddToCartSignUpBanner(true);
    } else setAddToCart(true);
  };

  return (
    <div class="row mt-5 ">
      <div class="col-12 col-md-8  offset-lg-1 ">
        <hr className="hr" />
        <div class="row pb-5 ">
          <div class="day_header col-12 text-center">
            {/* Regenerate */}
            <div class="row pl-3 rounded shadow bg-white pt-3 pb-2 kali-khaloti">
              <h6>
                <b>{props.title}</b> - <span className="text-grey custom-fon-tos">Please click on the meal to show ingredients</span>
              </h6>{" "}
            </div>
            <div className="col-12 ">
              <div className="row">
                {ingredientsToBeUsed.map((item, key) => {
                  let image = `https://spoonacular.com/cdn/ingredients_100x100/${item.image}`;
                  return (
                    <>
                      <div className={"  pt-4" + (width > 700 ? " col-3": " col-3 img-curtsom")}>
                      <div class="bg-white  shadow rounded row mt-1 text-sm-custom centering-mice mb-1 ">
                          <div className="text-sm-custom text-center">
                            {item.amount.metric.value}&nbsp;
                            {item.amount.metric.unit}
                          </div>
                        </div>
                        <div class="row myDIV">
                          <img
                            class="image-progress-woth p-2 img-round shadow bg-white image-hover-bigger "
                            src={image}
                          />
                        </div>
                        <div class="bg-white shadow rounded row mt-1 text-sm-custom centering-mice">
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
  
                {/* THIS WILL SERVE AS THE SAVE BUTTON IN FUTURE */}
            {/* <button
              onClick={addToCartButton}
              className={
                "col-12 btn mt-5 p-3" +
                (addToCartSignUpBanner && !props.loggedIn ? " btn-danger" : " btn-primary")
              }
            >
              {!addToCartSignUpBanner ? <></> : <>{!props.loggedIn ? <>
                Please sign up first
              </>:<>
              Add to Cart
              </>}</>}

              {!addToCart && !addToCartSignUpBanner ? (
                <>
                  Add To Cart <FaShoppingCart />
                </>
              ) : (
                <>{!addToCartSignUpBanner ? <>Added</> : <></>}</>
              )}
            </button> */}
          </div>
        </div>
        <hr className=" hr" />
      </div>
    </div>
  );
}
