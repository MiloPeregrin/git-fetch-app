import React from "react";
import { List, Typography } from "antd";

import classes from "./FetchedDataList.module.css";

const FetchedDataList = (props) => {
  const { header, dataSource, mark } = props;

  return (
    <div className={classes.container}>
      <List
        header={
          <div>
            <Typography.Title level={5}>{header}</Typography.Title>
          </div>
        }
        bordered
        dataSource={dataSource}
        renderItem={(item) => (
          <List.Item>
            <Typography.Text mark>{mark}</Typography.Text>{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href={item.html_url || item.url}
            >
              {item.name || item.login}
            </a>
          </List.Item>
        )}
      />
    </div>
  );
};

export default FetchedDataList;
