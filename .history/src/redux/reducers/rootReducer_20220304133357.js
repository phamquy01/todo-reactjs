const initState = {
  users: [
    {
      id: 1,
      username: "quypham",
      password: "123456",
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
