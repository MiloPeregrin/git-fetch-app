import React, { useContext } from "react";
import { List } from "antd";
import FetchedDataList from "../components/reusable/FetchedDataList";
import StateContext from "../store/state-context";

import classes from "./Organisations.module.css";

const Repositories = () => {
  const context = useContext(StateContext);

  return (
    <div className={classes.container}>
      <List />
      <h1>Repositories</h1>
      <FetchedDataList data={context.repos} />
    </div>
  );
};

export default Repositories;
