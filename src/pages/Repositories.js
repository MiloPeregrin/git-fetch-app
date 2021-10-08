import React, { useContext } from "react";
import FetchedDataList from "../components/reusable/FetchedDataList";
import StateContext from "../store/state-context";

const Repositories = () => {
  const context = useContext(StateContext);

  return (
    <div>
      <FetchedDataList
        header={`Found ${context.repos.length} Repositories`}
        dataSource={context.repos}
        mark={"[REPO]"}
      />
    </div>
  );
};

export default Repositories;
