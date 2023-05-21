import React from "react";
import classes from "./header.module.scss";
import HeaderLeft from "./header-left";
import HeaderSearch from "./header-search";

const Header = () => {
  return (
    <>
      <nav className={classes.primaryNavRoot}>
        <div className={classes.primaryNavFixed}>
          <div className={classes.primaryNavStrip} tabIndex={-1}>
            <div className="PrimaryNav-transparentStripBackground-U3f" />
            <HeaderLeft />
            <HeaderSearch />
          </div>
        </div>
        {/**/}
      </nav>
    </>
  );
};

export default Header;
