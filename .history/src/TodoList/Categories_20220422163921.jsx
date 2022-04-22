import React from "react";
import { Button } from "antd";

function Categories() {
  return (
    <div>
      <Button
        type="primary"
        size="large"
        style={{
          borderRadius: "5px",
          width: "80px",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        trở về
      </Button>
    </div>
  );
}

export default Categories;
