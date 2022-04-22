import React from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";
import { BulbTwoTone } from "@ant-design/icons";

function Home() {
  return (
    <div>
      <Link to="/todo">
        <BulbTwoTone
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
        </BulbTwoTone>
      </Link>
    </div>
  );
}

export default Home;
