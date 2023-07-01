import React from "react";

import classes from "./Cart.module.css";
import { usersData } from "@/data/Users-data";
import { products } from "@/data/Products";

const CartModule = function (cart) {
  const actualUser = usersData.filter((user) => user.id === cart.id);
  const { firstname, lastname } = actualUser[0].name;

  let totalPrice = 0;
  const allCosts = () => {
    const prodId = cart.products.map((item) => item.productId);
    const prodQuantity = cart.products.map((item) => item.quantity);

    products.map((item) => {
      for (let i = 0; i < prodId.length; i++) {
        if (item.id === prodId[i]) {
          return (totalPrice += item.price * prodQuantity[i]);
        }
      }
    });
  };
  allCosts(cart);

  return (
    <form className={classes.form}>
      <div>
        <p>ID: {cart.id}</p>
        <p>
          <b>
            {firstname[0].toUpperCase() + firstname.slice(1) + " "}
            {lastname[0].toUpperCase() + lastname.slice(1)}
          </b>
        </p>
        <p>{cart.date}</p>
        {cart.products.map((prod) => (
          <p key={Math.random()} className={classes.item}>
            <span>
              product id: {prod.productId}, quantity: {prod.quantity}
            </span>
          </p>
        ))}
        <br />
        <span className={classes.costs}>All costs: {totalPrice}$</span>
      </div>
    </form>
  );
};

export default CartModule;
