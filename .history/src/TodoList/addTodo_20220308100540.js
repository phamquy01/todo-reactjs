import React, { Component } from "react";
import { Row, Col, Typography, Input, Button, Tooltip } from "antd";

class addTodo extends Component {
  state = {
    title: "",
  };
  handleChangeInput = () => {
    this.setState({
      title: e.target.value,
    });
  };
  handleAdd;
  render() {
    return (
      <div>
        <div className="add">
          <Input
            value={this.state.title}
            onChange={(e) => this.handleChangeInput(e)}
          />
          <Button
            shape="round"
            onClick={() => {
              this.handleAdd;
            }}
          >
            add
          </Button>
        </div>
      </div>
    );
  }
}

export default addTodo;
