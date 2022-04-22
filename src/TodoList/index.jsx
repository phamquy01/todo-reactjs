import React from "react";
import { Row, Col, Typography, Checkbox, Button } from "antd";
import { useState, useEffect } from "react";
import { DeleteOutlined } from "@ant-design/icons";
import { MdOutlineLogout } from "react-icons/md";
import { BiSearchAlt } from "react-icons/bi";
import "./todo.css";
import { useDispatch } from "react-redux";
import { logout } from "../redux/reducers/rootReducer";
import { BsFilterLeft } from "react-icons/bs";
import { getWork, addWork, deleteWork, putWork } from "./TodoService";
import { Link } from "react-router-dom";

const { Text, Title } = Typography;
function TodoPage() {
  const [complete, setComplete] = useState(false);
  const [work, setWork] = useState("");
  const [listWork, setListWork] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      try {
        let res = await getWork();
        if (res) {
          setListWork(res.data);
        } else {
          console.log("loi");
        }
      } catch (e) {
        console.log(e);
      }
    }
    return fetchData();
  }, []);
  const handleAdd = async () => {
    let data = {
      work: work,
    };
    let resadd = await addWork(data);
    if (resadd && resadd.data) {
      let newList = [...listWork, resadd.data];
      setListWork(newList);
      setWork("");
    }
  };
  const handleDeleteCLick = async (deleteTodo) => {
    let dataDl = {
      id: deleteTodo.id,
    };
    let resDl = await deleteWork(dataDl);
    if (resDl) {
      const deleteTodoApi = listWork.filter(
        (item) => item.id !== resDl.data.id
      );
      setListWork(deleteTodoApi);
    }
  };
  const handleFliter = async () => {
    try {
      let resactive = await getWork();
      if (resactive) {
        const accc = resactive.data.filter((item) => {
          return item;
        });
        setListWork(accc);
      } else {
        console.log("loi");
      }
    } catch (e) {
      console.log(e);
    }
  };
  const handleFliterActive = async () => {
    try {
      let resactive = await getWork();
      if (resactive) {
        const accc = resactive.data.filter((item) => {
          return item.completed === false;
        });
        setListWork(accc);
      } else {
        console.log("loi");
      }
    } catch (e) {
      console.log(e);
    }
  };
  const handleFliterUncomplete = async () => {
    try {
      let resactive = await getWork();
      if (resactive) {
        const accc = resactive.data.filter((item) => {
          return item.completed === true;
        });
        setListWork(accc);
      } else {
        console.log("loi");
      }
    } catch (e) {
      console.log(e);
    }
  };
  const handleChheck = async (putTodo) => {
    const putTodoApi = listWork.map((item) => {
      if (item.id === putTodo.id)
        return { ...item, completed: !item.completed };
      return item;
    });
    setListWork(putTodoApi);
    let dataput = {
      id: putTodo.id,
      work: putTodo.work,
      completed: !putTodo.completed,
    };
    await putWork(dataput);
  };
  const handleLogoutCLick = () => {
    dispatch(logout());
  };
  return (
    <div>
      <div className="header-todo">
        <p
          style={{
            display: "flex",
            alignItems: "center",
            fontWeight: "bold",
            fontSize: 16,
            margin: "0 40px",
            cursor: "pointer",
          }}
        >
          <BiSearchAlt
            style={{ color: "#333", margin: "0 4px", fontSize: 20 }}
          />{" "}
          Search
        </p>
        <div className="logout">
          <Link
            to="/home"
            style={{
              display: "flex",
              alignItems: "center",
              fontWeight: "bold",
              fontSize: 14,
              cursor: "pointer",
              padding: " 5px 0",
              height: "100%",
            }}
          >
            Home
          </Link>
          <Link
            to="/category"
            style={{
              display: "flex",
              alignItems: "center",
              fontWeight: "bold",
              fontSize: 14,
              cursor: "pointer",
              padding: "5px 0",
              height: "100%",
            }}
          >
            category
          </Link>

          <Link
            to="/"
            style={{
              display: "flex",
              alignItems: "center",
              fontWeight: "bold",
              fontSize: 14,
              padding: "5px 20px",
              backgroundColor: "#5165f9",
              borderRadius: 3,
              color: "#fff",
              cursor: "pointer",
            }}
            onClick={handleLogoutCLick}
          >
            Log out <MdOutlineLogout style={{ margin: "0 4px" }} />
          </Link>
        </div>
      </div>
      <div className="todo-work">
        <div className="bgc">
          <div className="box1"></div>
          <div className="box2"></div>
        </div>
        <div className="todo-work-job">
          <Title
            style={{
              display: "flex",
              color: "#5165f9",
              margin: "10px 0",
              alignItems: "center",
              justifyContent: "center",
            }}
            level={3}
          >
            Todo List
          </Title>
          <div className="add">
            <div className="search-box">
              <input
                type="text"
                placeholder="add new todo"
                onChange={(e) => setWork(e.target.value)}
                value={work}
                required
              />
              <button className="search-btn" onClick={handleAdd}>
                add
              </button>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              width: 370,
              justifyContent: "space-evenly",
              alignItems: "center",
              margin: "20px auto 0",
            }}
          >
            <Button
              className="filler"
              size="middle"
              style={{ borderRadius: 2 }}
              onClick={() => handleFliter()}
            >
              All <BsFilterLeft className="size" />
            </Button>
            <Button
              className="filler"
              size="middle"
              style={{ borderRadius: 2 }}
              onClick={() => handleFliterActive()}
            >
              Acitve <BsFilterLeft className="size" />
            </Button>
            <Button
              className="filler"
              size="middle"
              style={{ borderRadius: 2 }}
              onClick={() => handleFliterUncomplete()}
            >
              Uncomplete <BsFilterLeft className="size" />
            </Button>
          </div>

          <Row>
            {listWork.map((item, index) => {
              return (
                <Col span={24}>
                  <div className="todo" key={item.id}>
                    <div className="name">
                      <Checkbox
                        type="checkbox"
                        checked={item.completed}
                        onChange={() => handleChheck(item)}
                      ></Checkbox>
                      <Text
                        className={
                          item.completed === true ? "complete" : "unfinished"
                        }
                      >
                        {item.work}
                      </Text>
                    </div>

                    <div className="action">
                      <DeleteOutlined
                        style={{
                          color: "red",
                          fontSize: 16,
                          cursor: "pointer",
                        }}
                        onClick={() => handleDeleteCLick(item)}
                      />
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
        </div>
      </div>
    </div>
  );
}

export default TodoPage;
