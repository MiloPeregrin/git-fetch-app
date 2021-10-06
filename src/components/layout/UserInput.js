import React from "react";
import { Link } from "react-router-dom";
import { Input, Space, Avatar } from "antd";

import classes from "./UserInput.module.css";
import icon from "./github.png";
const { Search } = Input;

// const refreshPage = () => {
//   window.location.reload();
// };

const UserInput = () => {
  return (
    <div className={classes.container}>
      <Link to="/">
        <Avatar
          className={classes.icon}
          src={icon}
          size="large"
          // onClick={refreshPage}
        />
      </Link>

      <Space direction="vertical">
        <Search
          placeholder="Search GitHub User"
          allowClear
          enterButton="Search"
          size="large"
          // onSearch={onSearch}
          style={{ width: 300 }}
        />
      </Space>
    </div>
  );
};

export default UserInput;
