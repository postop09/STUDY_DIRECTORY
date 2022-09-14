import React from 'react';
import mealsImg from "../../assets/img/meals.jpeg"
import classes from "./Header.module.css";
import CartBtn from "./CartBtn";

const Header = () => {
  return (
    <>
      <header className={classes.header}>
        <h1>FoodOrder</h1>
        <CartBtn />
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImg} alt=""/>
      </div>
    </>
  );
};

export default Header;