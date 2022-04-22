const initState = {
  users: [
    {
      id: 1,
      name: "quy pham",
      // username: "pham quy",
      // password: "123456",
    },
    {
      id: 2,
      name: "quy phung",
      // username: "phung quy",
      // password: "123456",
    },
  ],
};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case "users/addUser":
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    default:
      return state;
  }
};

export default rootReducer;
