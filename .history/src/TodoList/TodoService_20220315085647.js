import axios from "axios";

export const getWork = () => {
  return axios.get("https://61e26ec33050a10017682181.mockapi.io/api/todo");
};

export const addWork = (data) => {
  return axios.post(
    "https://61e26ec33050a10017682181.mockapi.io/api/todo",
    data
  );
};
export const deleteWork = (idDelete) => {
  return axios.delete(
    `https://61e26ec33050a10017682181.mockapi.io/api/todo/${idDelete.id}`,
    idDelete
  );
};
export const putWork = (idPut) => {
  return axios.put(
    `https://61e26ec33050a10017682181.mockapi.io/api/todo/${idPut.id}`
  );
};
