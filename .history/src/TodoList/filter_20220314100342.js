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
  const handleFilterCLick = () => {
    console.log(listWork);
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
        dropdownRender={(menu) => (
          <>
            {menu}
            <Divider style={{ margin: "8px 0" }} />
          </>
        )}
      >
        n
        {items.map((item) => (
          <Option key={item}>{item}</Option>
        ))}
      </Select>
      <Button
        className="filler"
        size="middle"
        style={{ borderRadius: 2 }}
        onClick={() => handleFilterCLick()}
      >
        Filter <BsFilterLeft className="size" />
      </Button>
    </div>
  );
}

export default Filter;