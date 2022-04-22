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
  return (
    <div
      style={{
        display: "flex",
        width: 370,
        justifyContent: "space-evenly",
        alignItems: "center",
        margin: "20px auto 0",
      }}
    >
      <Button className="filler" size="middle" style={{ borderRadius: 2 }}>
        All <BsFilterLeft className="size" />
      </Button>
      <Button className="filler" size="middle" style={{ borderRadius: 2 }}>
        Acitve <BsFilterLeft className="size" />
      </Button>
      <Button className="filler" size="middle" style={{ borderRadius: 2 }}>
        Uncomplete <BsFilterLeft className="size" />
      </Button>
    </div>
  );
}

export default Filter;
