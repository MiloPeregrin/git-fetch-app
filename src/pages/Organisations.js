import React, { useContext } from "react";
import FetchedDataList from "../components/reusable/FetchedDataList";
import StateContext from "../store/state-context";

const Organisations = () => {
  const context = useContext(StateContext);

  return (
    <div>
      <FetchedDataList
        header={`${context.user.name} has ${context.orgs.length} Organisations`}
        dataSource={context.orgs}
        mark={"[ORG]"}
      />
    </div>
  );
};

export default Organisations;
