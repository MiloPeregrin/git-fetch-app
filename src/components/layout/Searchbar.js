import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Input, Avatar } from "antd";
import StateContext from "../../store/state-context";

import classes from "./Searchbar.module.css";
import icon from "./github.png";

const { Search } = Input;

const Searchbar = () => {
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
        value={context.username}
        onChange={context.handleChange}
        onSearch={context.handleSearch}
        style={{ width: 300 }}
      />
    </div>
  );
};

export default Searchbar;
