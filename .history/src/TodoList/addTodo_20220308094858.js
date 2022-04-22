import React, { Component } from "react";
import { Row, Col, Typography, Input, Button, Tooltip } from "antd";
import { useState } from "react";
function AddTodo(addNewTodo) {
  const [title, setTitle] = useState("");
  const handleChangeInput = (e) => {
    setTitle(e.target.value);
  };
  const handleAdd = () => {
    let todo = {
      id: Math.floor(Math.random() * 1000),
      title: title,
    };
    console.log(addNewTodo());
  };
  return (
    <div>
      <div className="add">
        <Input value={title} onChange={(e) => handleChangeInput(e)} />
        <Button shape="round" onClick={handleAdd}>
          add
        </Button>
      </div>
    </div>
  );
}

export default AddTodo;
