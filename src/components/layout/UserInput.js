import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Input, Avatar } from "antd";
import StateContext from "../../store/state-context";

import classes from "./UserInput.module.css";
import icon from "./github.png";

const { Search } = Input;

const UserInput = () => {
  const context = useContext(StateContext);

  return (
    <div className={classes.container}>
      <Link to="/">
        <Avatar className={classes.icon} src={icon} size="default" />
      </Link>
      <Search
        placeholder="Search GitHub User"
        allowClear
        enterButton="Search"
        size="default"
        onSearch={context.searchHandler}
        style={{ width: 300 }}
      />
    </div>
  );
};

export default UserInput;
