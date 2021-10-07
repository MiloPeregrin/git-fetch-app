import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Input, Space, Avatar } from "antd";
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

      <Space direction="vertical">
        <Search
          placeholder="Search GitHub User"
          allowClear
          enterButton="Search"
          size="large"
          onSearch={"context.searchHandler"}
          style={{ width: 300 }}
        />
      </Space>
    </div>
  );
};

export default UserInput;
