import React, { useState, useRef, useEffect } from "react";
import { useLocation, Redirect } from "react-router-dom";
import { firestore } from "../../firebase";
import moment from "moment";

export default function UhOh() {
  const [paidFor, setPaidFor] = useState(false);
  const [error, setError] = useState(null);
  const [done, setDone] = useState(false);
  const paypalRef = useRef();
  const location = useLocation();
  console.log("sadsa", location);

  const product = {
    price: 4.99,
    name: "Monthly Subscription",
    description: `${location.state.UID} - monthly sub`,
  };

  useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: (data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                description: product.description,
                amount: {
                  currency_code: "USD",
                  value: product.price,
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          setDone(true);

          const order = await actions.order.capture();
          let expiryDate = moment().add(30, "days")._d;
          console.log(expiryDate);
          firestore
            .collection("users")
            .doc(location.state.UID)
            .update({
              expiryDate,
            })
            .then(() => {
              setPaidFor(true);
            })
            .catch((err) => {
              console.log(err);
            });

          console.log(order);
        },
        onError: (err) => {
          setError(err);
          console.error(err);
        },
      })
      .render(paypalRef.current);
  }, [product.description, product.price]);

  return (
    <>
      {paidFor ? <Redirect to="/" /> : <></>}
      {error ? (
        <div className="col-sm-12 alert alert-danger">
          Your payment didn't go through
        </div>
      ) : (
        <></>
      )}
      <div className="body-checkout">
        <div class="gandalf">
          <div class="fireball"></div>
          <div class="skirt"></div>
          <div class="sleeves"></div>
          <div class="shoulders">
            <div class="hand left"></div>
            <div class="hand right"></div>
          </div>
          <div class="head">
            <div class="hair"></div>
            <div class="beard"></div>
          </div>
        </div>
        <div class="message">
          {done ? (
            <div class="alert alert-success col-sm-12 mb-3 mt-3">
              Thank you! You will be redirected shortly.
            </div>
          ) : (
            <></>
          )}
          <h1> Uh-oh, It seems you're out of juice! </h1>
          <p>
            Click the button below to refill.
            <br />
            <div ref={paypalRef} />
          </p>
        </div>
      </div>
    </>
  );
}
