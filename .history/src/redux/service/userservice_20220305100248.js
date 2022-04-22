import axios from "../../axios";
const handleLogin = (username, password) => {
  return axios.post("/api/users", { username: username, password: password });
};
export { handleLogin };
