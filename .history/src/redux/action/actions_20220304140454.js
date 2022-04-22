const addUser = (data) => {
  return {
    type: "users/addUser",
    payload: data,
  };
};

export default addUser;
