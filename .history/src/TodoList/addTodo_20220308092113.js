import React, { Component } from "react";
import { Row, Col, Typography, Input, Button, Tooltip } from "antd";
import { useState } from "react";
function AddTodo() {
  const [title, setTitle] = useState("");
  const handleChangeInput = (e) => {
    setTitle(e.target.value);
  };
  return (
    <div>
      <div className="add">
        <Input value={title} onChange={(e) => handleChangeInput(e)} />
        <Button shape="round">add</Button>
      </div>
    </div>
  );
}

export default AddTodo;
