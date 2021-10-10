import React from "react";
import { Image, Button, Typography } from "antd";
import errorImage from "./404-error-picture.png";

import classes from "./ErrorPage.module.css";

const ErrorPage = () => {
  return (
    <div className={classes.container}>
      <div className={classes.errorImage}>
        <Image preview={false} src={errorImage}></Image>
      </div>
      <Typography.Title level={3}>
        Did you type the username correctly?
      </Typography.Title>
      <Button href="/" type="primary">
        Try Again
      </Button>
    </div>
  );
};

export default ErrorPage;
