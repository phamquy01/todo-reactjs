import { DatePicker } from "antd";
import "./App.css";
import "antd/dist/antd.css";
import LoginPage from "./Login/index";
import TodoPage from "./TodoList/index";
import Home from "./TodoList/Home";
import Categories from "./TodoList/Categories";
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoutes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/category" element={<Categories />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/todo" element={<TodoPage />} />
        </Route>
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {/* Same as */}
      <ToastContainer />
    </div>
  );
}

export default App;
