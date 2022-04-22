import React, { Component } from "react";
import { BsFilterLeft } from "react-icons/bs";
import { Row, Col, Typography, Input, Button, Tooltip } from "antd";

function Filter() {
  return (
    <div>
      <Button className="filler">
        Filter <BsFilterLeft className="size" />
      </Button>
    </div>
  );
}

export default Filter;
