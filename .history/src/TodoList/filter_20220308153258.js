import React, { Component } from "react";
import { BsFilterLeft } from "react-icons/bs";
import {
  Row,
  Col,
  Typography,
  Input,
  Button,
  Tooltip,
  Input,
  Select,
  Divider,
  Input,
  Typography,
  Space,
} from "antd";
import { PlusOutlined } from "@ant-design/icons";

const { Option } = Select;
let index = 0;
function Filter() {
  const [items, setItems] = useState(["jack", "lucy"]);
  const [name, setName] = useState("");
  return (
    <div>
      <Select
        style={{ width: 300 }}
        placeholder="custom dropdown render"
        dropdownRender={(menu) => (
          <>
            {menu}
            <Divider style={{ margin: "8px 0" }} />
            <Space align="center" style={{ padding: "0 8px 4px" }}>
              <Input
                placeholder="Please enter item"
                value={name}
                onChange={onNameChange}
              />
              <Typography.Link
                onClick={addItem}
                style={{ whiteSpace: "nowrap" }}
              >
                <PlusOutlined /> Add item
              </Typography.Link>
            </Space>
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
