import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import StateContext from "../../store/state-context";

import classes from "./Navbar.module.css";
import { CopyOutlined, TeamOutlined } from "@ant-design/icons";

const Navbar = (props) => {
  const context = useContext(StateContext);

  return (
    <div className={classes.container}>
      {context.disabled ? (
        <NavLink
          disabled
          className={`${classes.link} ${classes.disabled}`}
          to="#"
        >
          <CopyOutlined size="medium" className={classes.icon} />
          Repositories
        </NavLink>
      ) : (
        <NavLink
          activeClassName={classes.active}
          className={classes.link}
          to="/repositories"
        >
          <CopyOutlined size="medium" className={classes.icon} />
          Repositories
        </NavLink>
      )}
      {context.disabled ? (
        <NavLink
          disabled
          className={`${classes.link} ${classes.disabled}`}
          to="#"
        >
          <TeamOutlined className={classes.icon} />
          Organisations
        </NavLink>
      ) : (
        <NavLink
          activeClassName={classes.active}
          className={classes.link}
          to="/organizations"
        >
          <TeamOutlined className={classes.icon} />
          Organizations
        </NavLink>
      )}
    </div>
  );
};

export default Navbar;
