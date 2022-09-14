import React from 'react';
import CartIcon from "./CartIcon";
import classes from "./CartBtn.module.css";

const CartBtn = () => {
  return (
    <button type="button" className={classes.button}>
      <span className={classes.icon}><CartIcon /></span>
      <span>장바구니</span>
      <span className={classes.badge}>3</span>
    </button>
  );
};

export default CartBtn;