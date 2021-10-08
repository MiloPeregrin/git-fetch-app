import React, { useContext } from "react";
import FetchedDataList from "../components/reusable/FetchedDataList";
import StateContext from "../store/state-context";

import classes from "./Organisations.module.css";

const Repositories = () => {
  const context = useContext(StateContext);

  // console.log("repositories:", context.repos);
  return (
    <div className={classes.container}>
      <FetchedDataList
        header={"Repositories"}
        dataSource={context.repos}
        mark={"[REPO]"}
      />
    </div>
  );
};

export default Repositories;
