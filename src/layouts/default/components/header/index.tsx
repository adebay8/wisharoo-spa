import React from "react";
import classes from "./header.module.scss";
import HeaderLeft from "./header-left";
import HeaderSearch from "./header-search";
import Hamburger from "./hamburger";
import HeaderRight from "./header-right";

const Header = () => {
  return (
    <>
      <nav className={classes.primaryNavRoot}>
        <div className={classes.primaryNavFixed}>
          <div className={classes.primaryNavStrip} tabIndex={-1}>
            <div className="PrimaryNav-transparentStripBackground-U3f" />
            <Hamburger />
            <HeaderLeft />
            <HeaderSearch />
            <HeaderRight />
          </div>
        </div>
        {/**/}
      </nav>
    </>
  );
};

export default Header;
