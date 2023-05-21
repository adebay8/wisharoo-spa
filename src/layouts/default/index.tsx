import React from "react";
import { Header } from "./components";
import { DefaultLayoutProps } from "./types";
import classes from "./default.module.scss";

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main className={classes.main}>{children}</main>
    </>
  );
};

export default DefaultLayout;
