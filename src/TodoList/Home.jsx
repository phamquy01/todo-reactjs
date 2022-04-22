import React from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <Link to="/todo">
        <Button
          type="primary"
          size="large"
          style={{
            borderRadius: "5px",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            boxShadow: "0px 0px 15px #ccc",
          }}
        >
          Back to Todo
        </Button>
      </Link>
    </div>
  );
}

export default Home;
