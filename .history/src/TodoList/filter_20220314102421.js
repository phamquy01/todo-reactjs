import React, { Component } from "react";
import { BsFilterLeft } from "react-icons/bs";
import { useState } from "react";
import {
  Row,
  Col,
  Typography,
  Input,
  Button,
  Tooltip,
  Select,
  Divider,
  Space,
} from "antd";

const { Option } = Select;

function Filter({ listWork }) {
  const [items, setItems] = useState(["lọc theo nv", "lọc chưa hoàn thành"]);
  const handleFilter = (e) => {
    const aa = e.target.value;
    console.log(aa);
  };
  return (
    <div
      style={{
        display: "flex",
        width: 300,
        justifyContent: "space-evenly",
        alignItems: "center",
        margin: "20px auto 0",
      }}
    >
      <Select
        style={{ width: 200 }}
        placeholder="-- hành động --"
        size="middle"
        onChange={(e) => handleFilter(e)}
        dropdownRender={(menu) => (
          <>
            {menu}
            <Divider style={{ margin: "8px 0" }} />
          </>
        )}
      >
        <Option value="all">tất cả</Option>
        <Option value="complete">lọc theo nv</Option>
        <Option value="uncomplete">lọc theo chưa hoàn thành</Option>
      </Select>
      <Button
        className="filler"
        size="middle"
        style={{ borderRadius: 2 }}
        // onClick={() => handleFilterCLick()}
      >
        Filter <BsFilterLeft className="size" />
      </Button>
    </div>
  );
}

export default Filter;
