import axios from "axios";
const instance = axios.create({
  baseURL: "https://61e26ec33050a10017682181.mockapi.io",
});

export default instance;
