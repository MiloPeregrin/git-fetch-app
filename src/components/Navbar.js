import React from "react";
import "antd/dist/antd.css";
import { Link } from "react-router-dom";

import classes from "./Navbar.module.css";
import { CopyOutlined, TeamOutlined } from "@ant-design/icons";

const Navbar = () => {
  return (
    <div className={classes.container}>
      <Link className={classes.link} to="/">
        <CopyOutlined size="medium" className={classes.icon} />
        Repositories
      </Link>
      <Link className={classes.link} to="/">
        <TeamOutlined className={classes.icon} />
        Organisations
      </Link>
    </div>
  );
};

export default Navbar;
