import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./Navbar.module.css";
import { CopyOutlined, TeamOutlined } from "@ant-design/icons";

const Navbar = () => {
  return (
    <div className={classes.container}>
      <NavLink
        disabled
        activeClassName={classes.active}
        className={classes.link}
        to="/repositories"
      >
        <CopyOutlined size="medium" className={classes.icon} />
        Repositories
      </NavLink>
      <NavLink
        disabled
        activeClassName={classes.active}
        className={classes.link}
        to="/organisations"
      >
        <TeamOutlined className={classes.icon} />
        Organisations
      </NavLink>
    </div>
  );
};

export default Navbar;
