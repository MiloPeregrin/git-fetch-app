import React from "react";
import { List, Typography } from "antd";

import classes from "./FetchedDataList.module.css";

const FetchedDataList = (props) => {
  const { header, dataSource, mark } = props;
  console.log("dataSource.length is:");
  return (
    <List
      header={<div>{header}</div>}
      bordered
      dataSource={dataSource}
      renderItem={(item) => (
        <List.Item>
          <Typography.Text mark>{mark}</Typography.Text>{" "}
          <a target="_blank" href={item.html_url}>
            {item.name}
          </a>
        </List.Item>
      )}
    />
  );
};

export default FetchedDataList;
