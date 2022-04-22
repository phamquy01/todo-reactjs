import axios from "../../axios";
const handleLogin = (email, password) => {
  return axios.post("/api/users", { email: email, password: password });
};
export { handleLogin };
