import React from "react";
import { List, Typography } from "antd";

import classes from "./FetchedDataList.module.css";

const repos = [
  { name: "Racing" },
  { name: "Racing" },
  { name: "Racing" },
  { name: "Racing" },
  { name: "Racing" },
  { name: "Racing" },
  { name: "Racing" },
  { name: "Racing" },
  { name: "Racing" },
  { name: "Racing" },
];

const FetchedDataList = (props) => {
  return (
    <List
      header={<div>{props.header}</div>}
      bordered
      dataSource={repos}
      renderItem={(item) => (
        <List.Item>
          <Typography.Text mark>[REPO]</Typography.Text> {item.name}
        </List.Item>
      )}
    />
  );
};

export default FetchedDataList;
