import React from "react";
import { List } from "antd";
import classes from "./Organisations.module.css";

const Organisations = () => {
  return (
    <div className={classes.container}>
      <List />
      <h1>Organisations</h1>
    </div>
  );
};

export default Organisations;
