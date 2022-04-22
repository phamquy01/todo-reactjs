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
    <div className="aa">
      <Select
        style={{ width: 300 }}
        placeholder="-- hành động --"
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
      <Button className="filler">
        Filter <BsFilterLeft className="size" />
      </Button>
    </div>
  );
}

export default Filter;
