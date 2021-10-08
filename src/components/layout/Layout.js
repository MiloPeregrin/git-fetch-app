import React from "react";
import Searchbar from "./Searchbar";
import Navbar from "./Navbar";

import classes from "./Layout.module.css";

const Layout = (props) => {
  return (
    <>
      <header>
        <Searchbar />
      </header>
      <Navbar />
      <main className={classes.main}>{props.children}</main>
    </>
  );
};

export default Layout;
