import React, { useContext } from "react";
import classes from "./UserProfile.module.css";
import StateContext from "../../store/state-context";
import { Typography, Image, Card } from "antd";
import {
  GithubOutlined,
  MailOutlined,
  FormOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";

const UserProfile = () => {
  const context = useContext(StateContext);
  return (
    <div className={classes.cardContainer}>
      <Card
        bodyStyle={{ padding: 15 }}
        hoverable
        style={{ width: 300 }}
        cover={<img src={context.user.avatar_url} />}
      >
        <span className={classes.cardTitle}>
          <Typography.Title level={4}>
            {context.user.name || context.user.login}
          </Typography.Title>
        </span>

        <div className={classes.userInfo}>
          <span>
            <GithubOutlined />
            <strong> Git: </strong>
            <a href={context.user.html_url} target="_blank" rel="noreferrer">
              {context.user.html_url}
            </a>
          </span>
          <span>
            <MailOutlined />
            <strong> Email: </strong>
            <a href={context.user.email} target="_blank" rel="noreferrer">
              {context.user.email}
            </a>
          </span>
          <span>
            <FormOutlined />
            <strong> Blog: </strong>
            <a href={context.user.blog} target="_blank" rel="noreferrer">
              {context.user.blog}
            </a>
          </span>
          <span>
            <EnvironmentOutlined />
            <strong> Location: </strong> {context.user.location}
          </span>
        </div>
      </Card>
    </div>
  );
};

export default UserProfile;
