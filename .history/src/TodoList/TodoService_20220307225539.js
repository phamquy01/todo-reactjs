import axios from "axios";

const getWork = () => {
  return axios.get("https://61e26ec33050a10017682181.mockapi.io/api/todo");
};
// const addEmployee = (data) => {
//   return axios.post(
//     "https://61e26ec33050a10017682181.mockapi.io/api/employee",
//     data
//   );
// };
// const deleteEmployee = (idDelete) => {
//   return axios.delete(
//     `https://61e26ec33050a10017682181.mockapi.io/api/employee/${idDelete.id}`,
//     idDelete
//   );
// };
// const replaceEmployee = (idEdit) => {
//   return axios.put(
//     `https://61e26ec33050a10017682181.mockapi.io/api/employee/${idEdit.id}`,
//     idEdit
//   );
// };
export { getWork, addEmployee, deleteEmployee, replaceEmployee };
