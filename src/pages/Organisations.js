import React, { useContext } from "react";
import FetchedDataList from "../components/reusable/FetchedDataList";
import StateContext from "../store/state-context";

import classes from "./Organisations.module.css";

const Organisations = () => {
  const context = useContext(StateContext);

  return (
    <div className={classes.container}>
      <FetchedDataList
        header={"Organisations"}
        dataSource={context.orgs}
        mark={"[ORG]"}
      />
    </div>
  );
};

export default Organisations;
