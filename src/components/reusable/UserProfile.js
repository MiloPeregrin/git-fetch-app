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
      <span className={"userName"}>
        Blog: <a href={context.user.blog}>{context.user.blog}</a>
      </span>
      <span className={"userName"}>{context.user.name}</span>
      <span className={"userName"}>{context.user.name}</span>
      <span className={"userName"}>{context.user.avatar_url}</span>
    </div>
  );
};

export default UserProfile;
