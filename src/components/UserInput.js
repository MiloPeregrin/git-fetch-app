import React from "react";
import { Input, Space } from "antd";

const { Search } = Input;

const onSearch = (value) => console.log(value);

const UserInput = () => {
  return (
    <Space direction="vertical">
      <Search
        placeholder="Git Users Name"
        allowClear
        enterButton="Search"
        size="large"
        onSearch={onSearch}
        style={{ width: 300 }}
      />
    </Space>
  );
};

export default UserInput;
