import React, { useContext } from "react";
import classes from "./UserProfile.module.css";
import StateContext from "../../store/state-context";
import { Typography, Image } from "antd";
import {
  GithubOutlined,
  MailOutlined,
  FormOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";

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
        <Typography.Title level={3}>
          {context.user.name || context.user.login}
        </Typography.Title>
      </span>
      <div className={classes.userInfo}>
        <span>
          <GithubOutlined />
          <strong> Github : </strong>{" "}
          <a href={context.user.html_url} target="_blank" rel="noreferrer">
            {context.user.html_url}
          </a>
        </span>
        <span>
          <MailOutlined />
          <strong> Email : </strong>{" "}
          <a href={context.user.email} target="_blank" rel="noreferrer">
            {context.user.email}
          </a>
        </span>
        <span>
          <FormOutlined />
          <strong> Blog : </strong>{" "}
          <a href={context.user.blog} target="_blank" rel="noreferrer">
            {context.user.blog}
          </a>
        </span>
        <span>
          <EnvironmentOutlined />
          <strong> Location : </strong> {context.user.location}
        </span>
      </div>
    </div>
  );
};

export default UserProfile;
