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
function Filter() {
  const [items, setItems] = useState(["jack", "lucy"]);
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
        {items.map((item) => (
          <Option key={item}>{item}</Option>
        ))}
      </Select>
      <Button className="filler" size="middle" style={{ borderRadius: 2 }}>
        Filter <BsFilterLeft className="size" />
      </Button>
    </div>
  );
}

export default Filter;
