import React, { useState } from "react";
import classes from "./User.module.css";

const User = (props) => {
  const userClickHandler = () => {
    const userId = props.id;
    props.onId(userId);
  };
  return (
    <form onClick={userClickHandler} className={classes.form}>
      <div className={classes.user}>
        <p className={classes.name}>{props.firstName}</p>
        <p>{props.lastName}</p>
      </div>
    </form>
  );
};

export default User;
