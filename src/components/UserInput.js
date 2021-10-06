import React from "react";
import { Input, Space, Avatar } from "antd";

import classes from "./UserInput.module.css";
import icon from "../images/github.png";
const { Search } = Input;

const onSearch = (value) => console.log(value);

const UserInput = () => {
  return (
    <div className={classes.container}>
      <Avatar className={classes.icon} src={icon} size="large" />
      <Space direction="vertical">
        <Search
          placeholder="Search GitHub User"
          allowClear
          enterButton="Search"
          size="large"
          onSearch={onSearch}
          style={{ width: 300 }}
        />
      </Space>
    </div>
  );
};

export default UserInput;
