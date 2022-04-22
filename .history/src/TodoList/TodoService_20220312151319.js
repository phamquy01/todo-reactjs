import axios from "axios";

export const getWork = () => {
  return axios.get("https://61e26ec33050a10017682181.mockapi.io/api/todo");
};
export const addWork = (adddata) => {
  return axios.post("https://61e26ec33050a10017682181.mockapi.io/api/todo", {
    adddata: adddata,
  });
};
