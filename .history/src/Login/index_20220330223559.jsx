import { Row, Col, Input, Button } from "antd";
import anh1 from "../assest/img/pngtree-vector-check-list-icon-png-image_1029335.jpg";
import { FaFacebook, FaGooglePlus } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import {
  HomeOutlined,
  UserOutlined,
  EyeInvisibleOutlined,
  EyeTwoTone,
  LockOutlined,
  ExportOutlined,
} from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { login } from "../redux/reducers/rootReducer";
import { toast } from "react-toastify";
function LoginPage() {
  const [userName, setUserName] = useState();
  const [passWord, setPassWord] = useState();
  const dispatch = useDispatch();

  const handleLoginClick = () => {
    if (userName !== "quyquy" || passWord !== "123456") {
      toast.error("tài khoản hoặc mật khẩu không đúng");
    } else {
      dispatch(
        login({
          username: userName,
          password: passWord,
        })
      );
      window.location.href = "/todo";
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
      <Row style={{ height: "inherit", overflow: "hidden" }}>
        <Col span={12}>
          <Row style={{ marginTop: 50 }} gutter={[8, 80]}>
            <Col span={1} offset={3}>
              <HomeOutlined style={{ fontSize: 20, color: "#7924bc" }} />
            </Col>
            <Col
              span={10}
              style={{ paddingLeft: 10, textAlign: "left", fontSize: 16 }}
            >
              Todo-app
            </Col>
            <Col offset={3} span={16}>
              <h2 style={{ textAlign: "left", margin: 0 }}>
                Welcom to login system
              </h2>
              <p
                style={{
                  textAlign: "left",
                  fontSize: 12,
                  color: "#a5a5a5",
                }}
              >
                sign in
              </p>
            </Col>
          </Row>
          <Row>
            <Col offset={3} span={12}>
              <form>
                <Input
                  style={{
                    margin: "10px 0",
                    borderRadius: 30,
                    boxShadow: "1px 1px 15px #ccc",
                  }}
                  prefix={<UserOutlined style={{ margin: "0 5px" }} />}
                  placeholder="Username"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
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
                  onChange={(e) => setPassWord(e.target.value)}
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
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Button
                    shape="round"
                    type="primary"
                    style={{ backgroundColor: "#8d00ff", width: 190 }}
                    onClick={handleLoginClick}
                  >
                    Login
                  </Button>
                  <Button shape="round" type="link" style={{ color: "#333" }}>
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
        <Col span={12}>
          <img
            src={anh1}
            alt="anh"
            style={{ width: 400, height: 400, margin: "50px 0" }}
          />
        </Col>
      </Row>
    </div>
  );
}

export default LoginPage;
