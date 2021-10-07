import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import StateContext from "../../store/state-context";

import classes from "./Navbar.module.css";
import { CopyOutlined, TeamOutlined } from "@ant-design/icons";

const Navbar = () => {
  const context = useContext(StateContext);
  const test = false;

  return (
    <div className={classes.container}>
      {test ? (
        <NavLink
          disabled
          activeClassName={classes.active}
          className={classes.link}
          to="/repositories"
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
      {test ? (
        <NavLink
          disabled
          className={!context.disabled ? "disabled" : null}
          activeClassName={classes.active}
          className={classes.link}
          to="/organisations"
        >
          <TeamOutlined className={classes.icon} />
          Organisations
        </NavLink>
      ) : (
        <NavLink
          className={!context.disabled ? "disabled" : null}
          activeClassName={classes.active}
          className={classes.link}
          to="/organisations"
        >
          <TeamOutlined className={classes.icon} />
          Organisations
        </NavLink>
      )}
    </div>
  );
};

export default Navbar;
