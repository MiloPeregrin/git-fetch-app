import React, { useContext } from "react";
import { List } from "antd";
import FetchedDataList from "../components/reusable/FetchedDataList";
import StateContext from "../store/state-context";

import classes from "./Organisations.module.css";

const Organisations = () => {
  const context = useContext(StateContext);

  return (
    <div className={classes.container}>
      <List />
      <h1>Organisations</h1>
      <FetchedDataList data={context.orgs} />
    </div>
  );
};

export default Organisations;
