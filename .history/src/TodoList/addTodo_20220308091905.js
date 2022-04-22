import React, { Component } from "react";
import { Row, Col, Typography, Input, Button, Tooltip } from "antd";
import { useState } from "react";
function AddTodo() {
  const [title, setTitle] = useState("");
  return (
    <div>
      <div className="add">
        <Input value="" />
        <Button shape="round">add</Button>
      </div>
    </div>
  );
}

export default AddTodo;
