import React from "react";
import { List, Typography } from "antd";

import classes from "./FetchedDataList.module.css";

const FetchedDataList = (props) => {
  return (
    <List
      header={<div>{props.header}</div>}
      footer={<div>Footer</div>}
      bordered
      dataSource={props.data}
      renderItem={(item) => (
        <List.Item>
          <Typography.Text mark>[REPO]</Typography.Text> {item}
        </List.Item>
      )}
    />
  );
};

export default FetchedDataList;
