import React, { useContext } from "react";
import FetchedDataList from "../components/reusable/FetchedDataList";
import StateContext from "../store/state-context";

import classes from "./Organisations.module.css";

const Repositories = () => {
  const context = useContext(StateContext);

  return (
    <div className={classes.container}>
      <FetchedDataList header={"Repositories"} data={context.repos} />
    </div>
  );
};

export default Repositories;
