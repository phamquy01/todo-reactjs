import { Row, Col, Input, Button } from "antd";
import React from "react";
// import anh1 from "../assest/img/240522862_215482807260623_2926371055187927045_n.jpg";
import { FaFacebook, FaGooglePlus } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { handleLogin } from "../redux/service/userService";
import {
  HomeOutlined,
  UserOutlined,
  EyeInvisibleOutlined,
  EyeTwoTone,
  LockOutlined,
  ExportOutlined,
} from "@ant-design/icons";
import { addUser } from "../redux/action/actions";

function SingUpPage() {
  const [userName, setUserName] = useState("");
  const [passWord, setPassWord] = useState("");
  const handleChangeUser = (e) => {
    setUserName(e.target.value);
  };
  const handleChangePass = (e) => {
    setPassWord(e.target.value);
  };
  // const dispacth = useDispatch();
  // const handleSignUp = () => {
  //   dispacth(
  //     addUser({
  //       id: uuidv4(),
  //       username: userName,
  //       password: passWord,
  //     })
  //   );
  // };
  const handleSignUp = async () => {
    try {
      let res = await handleLogin(userName, passWord);
      console.log("rés", res.data.userName);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div
      style={{
        width: "80%",
        margin: "50px auto",
        height: 500,
        borderRadius: 4,
        boxShadow: "8px 8px 10px #333",
      }}
    >
      <Row>
        <Col span={16}>
          <Row style={{ marginTop: 30 }} gutter={[8, 60]}>
            <Col span={1} offset={2}>
              <HomeOutlined style={{ fontSize: 20, color: "#7924bc" }} />
            </Col>
            <Col span={15} style={{ textAlign: "left", fontSize: 16 }}>
              Todo-List
            </Col>
            <Col offset={2} span={16}>
              <h2 style={{ textAlign: "left", margin: 0 }}>
                Welcom to login system
              </h2>
              <p style={{ textAlign: "left", fontSize: 12, color: "#a5a5a5" }}>
                sign in
              </p>
            </Col>
          </Row>
          <Row>
            <Col offset={2} span={10}>
              <form action="">
                <Input
                  style={{
                    margin: "10px 0",
                    borderRadius: 30,
                    boxShadow: "1px 1px 15px #ccc",
                  }}
                  prefix={<UserOutlined style={{ margin: "0 5px" }} />}
                  placeholder="Username"
                  value={userName}
                  onChange={handleChangeUser}
                />

                <Input.Password
                  style={{
                    margin: "10px 0",
                    borderRadius: 30,
                    boxShadow: "1px 1px 15px #ccc",
                  }}
                  prefix={<LockOutlined style={{ margin: "0 5px" }} />}
                  placeholder="input password"
                  iconRender={(visible) =>
                    visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                  }
                  value={passWord}
                  onChange={handleChangePass}
                />
                <div
                  className="control"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    fontSize: 12,
                    margin: "0 10px 0 18px",
                  }}
                >
                  <div className="remember">
                    <p>
                      {" "}
                      <ExportOutlined /> Remember me
                    </p>
                  </div>
                  <p className="forgot">Forgot password?</p>
                </div>
                <div
                  className="sign-in"
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Button shape="round" type="link" style={{ color: "#333" }}>
                    Login
                  </Button>
                  <Button
                    shape="round"
                    type="primary"
                    style={{ backgroundColor: "#8d00ff", width: 190 }}
                    onClick={handleSignUp}
                  >
                    sign-up
                  </Button>
                </div>
                <div
                  style={{
                    display: "flex",
                    width: "50%",
                    justifyContent: "space-evenly",
                    margin: "10px 20px",
                  }}
                >
                  <FaFacebook
                    style={{
                      backgroundColor: "#fff",
                      color: "#0000c6",
                      fontSize: 24,
                    }}
                  />
                  <AiFillTwitterCircle
                    style={{
                      backgroundColor: "#fff",
                      color: "#29d5fa",
                      fontSize: 28,
                    }}
                  />

                  <FaGooglePlus
                    style={{
                      backgroundColor: "#fff",
                      color: "#bc0000",
                      fontSize: 24,
                    }}
                  />
                </div>
              </form>
            </Col>
          </Row>
        </Col>
        <Col span={8}></Col>
      </Row>
    </div>
  );
}

export default SingUpPage;
