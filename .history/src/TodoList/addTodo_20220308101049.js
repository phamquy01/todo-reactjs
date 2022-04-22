import React, { Component } from "react";
import { Row, Col, Typography, Input, Button, Tooltip } from "antd";

class addTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
    };
  }
  handleChangeInput = (e) => {
    this.setState({
      title: e.target.value,
    });
  };
  handleAdd = () => {
    let todo = {
      id: Math.floor(Math.random() * 1000),
      work: this.state.title,
    };
    console.log(todo);
    this.props.addNewTodo(todo);
  };
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
              this.handleAdd();
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
