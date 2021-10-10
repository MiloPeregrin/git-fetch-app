import React, { useContext } from "react";
import FetchedDataList from "../components/reusable/FetchedDataList";
import StateContext from "../store/state-context";

const Organizations = () => {
  const context = useContext(StateContext);

  return (
    <div>
      <FetchedDataList
        header={`${context.user.name || context.user.login} has ${
          context.orgs.length
        } Organizations`}
        dataSource={context.orgsUrl}
        mark={"[ORG]"}
      />
    </div>
  );
};

export default Organizations;
