import axios from "../../axios";
const handleLogin = (email, password) => {
  return axios.post("/api/users");
};
export { handleLogin };
