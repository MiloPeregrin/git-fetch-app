import React from "react";
import { List } from "antd";
import classes from "./Homepage.module.css";

const Homepage = () => {
  return (
    <>
      <div className={classes.container}>
        <List />
        <h1>HomePage</h1>
      </div>
    </>
  );
};

export default Homepage;
