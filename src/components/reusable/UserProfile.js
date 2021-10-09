import React, { useContext } from "react";
import classes from "./UserProfile.module.css";
import StateContext from "../../store/state-context";
import { Typography, Image } from "antd";

const UserProfile = () => {
  const context = useContext(StateContext);
  return (
    <div className={classes.container}>
      <Image
        className={classes.profilePicture}
        preview={false}
        src={context.user.avatar_url}
      ></Image>
      <span className={"userName"}>
        <Typography.Title level={3}>{context.user.name}</Typography.Title>
      </span>
      <div className={classes.userInfo}>
        <span>
          Github :{" "}
          <a href={context.user.html_url} target="_blank" rel="noreferrer">
            {context.user.html_url}
          </a>
        </span>
        <span>
          Email :{" "}
          <a href={context.user.email} target="_blank" rel="noreferrer">
            {context.user.email}
          </a>
        </span>
        <span>
          Blog :{" "}
          <a href={context.user.blog} target="_blank" rel="noreferrer">
            {context.user.blog}
          </a>
        </span>
        <span>Location : {context.user.location}</span>
      </div>
    </div>
  );
};

export default UserProfile;
