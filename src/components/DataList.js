import React from "react";
import { List, Empty } from "antd";

import classes from "./DataList.module.css";

const DataList = () => {
  return (
    <div className={classes.container}>
      <List />
    </div>
  );
};

export default DataList;
