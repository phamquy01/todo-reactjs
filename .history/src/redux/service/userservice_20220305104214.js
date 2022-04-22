import axios from "../../axios";
const handleLogin = (username, password) => {
  return axios.get("/api/users", { username: username, password: password });
};
export { handleLogin };
