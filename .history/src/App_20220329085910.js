import { DatePicker } from "antd";
import "./App.css";
import "antd/dist/antd.css";
import LoginPage from "./Login/index";
import TodoPgage from "./TodoList/index";
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoutes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/todo" element={<TodoPgage />} />
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
