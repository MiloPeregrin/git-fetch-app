import React from "react";
import { List } from "antd";

import classes from "./DataList.module.css";

const data = [
  "Racing car sprays burning fuel into crowd.",
  "Japanese princess to wed commoner.",
  "Australian walks 100km after outback crash.",
  "Man charged over missing wedding girl.",
  "Los Angeles battles huge wildfires.",
];

const DataList = () => {
  return (
    <div className={classes.container}>
      <List
        className="list"
        size="large"
        header={<div>Header</div>}
        // footer={<div>Footer</div>}
        bordered
        dataSource={data}
        renderItem={(item) => <List.Item>{item}</List.Item>}
      />
    </div>
  );
};

export default DataList;
