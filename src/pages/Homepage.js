import React, { useContext } from "react";
import { List } from "antd";
import StateContext from "../store/state-context";
import UserProfile from "../components/reusable/UserProfile";

const Homepage = () => {
  const context = useContext(StateContext);
  return (
    <>
      {context.disabled ? (
        <div>
          <List />
        </div>
      ) : (
        <UserProfile />
      )}
    </>
  );
};

export default Homepage;
