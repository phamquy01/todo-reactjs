import React from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";

function Categories() {
  return (
    <div>
      <Link to="/todo">
        <Button
          size="large"
          style={{
            borderRadius: "5px",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          Back to Todo
        </Button>
      </Link>
    </div>
  );
}

export default Categories;
