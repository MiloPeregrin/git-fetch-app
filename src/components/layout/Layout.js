import React from "react";
import UserInput from "./UserInput";
import Navbar from "./Navbar";

import classes from "./Layout.module.css";

const Layout = (props) => {
  return (
    <>
      <header>
        <UserInput />
      </header>

      <Navbar />

      <main className={classes.main}>{props.children}</main>
    </>
  );
};

export default Layout;
