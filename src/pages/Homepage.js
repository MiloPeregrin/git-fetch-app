import React, { useContext } from "react";
import { List } from "antd";
import StateContext from "../store/state-context";

const Homepage = () => {
  const context = useContext(StateContext);
  return (
    <>
      {context.disabled ? (
        <div>
          <List />
        </div>
      ) : (
        <div className={"userInfo"}>
          <div className={"userPicture"}>Users Profile Picture</div>
          <span className={"userName"}>Users Name</span>
        </div>
      )}
    </>
  );
};

export default Homepage;
