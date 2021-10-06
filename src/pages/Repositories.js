import React from "react";
import { List } from "antd";
import classes from "./Organisations.module.css";

const Repositories = () => {
  return (
    <div className={classes.container}>
      <List />
      <h1>Repositories</h1>
    </div>
  );
};

export default Repositories;
