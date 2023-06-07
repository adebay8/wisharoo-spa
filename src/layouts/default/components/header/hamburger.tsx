import React from "react";
import classes from "./header.module.scss";

const Hamburger = () => {
  return (
    <div className={classes.hamburgerMenuButtonWrapper}>
      <button
        aria-label="Mobile Primary Navigation Menu"
        aria-expanded="false"
        aria-controls="f62e1ba2-8c12-4abc-9e0d-251fb7014f78"
        className={classes.hamburgerButton}
      >
        <div className={classes.hamburger}>
          <div className={classes.hamburgerLine} />
          <div className={classes.hamburgerLine} />
          <div className={classes.hamburgerLine} />
        </div>
      </button>
    </div>
  );
};

export default Hamburger;
