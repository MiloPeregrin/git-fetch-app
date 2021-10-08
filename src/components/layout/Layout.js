import React from "react";
import Searchbar from "./Searchbar";
import Navbar from "./Navbar";

import classes from "./Layout.module.css";

const Layout = (props) => {
  return (
    <div className={classes.container}>
      <header>
        <div className={classes.blackBackground}>
          <Searchbar />
        </div>
        <div className={classes.navbar}>
          <Navbar />
        </div>
      </header>
      <main className={classes.main}>{props.children}</main>
    </div>
  );
};

export default Layout;
