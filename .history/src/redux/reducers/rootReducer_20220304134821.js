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
  console.log({ state, action });
  switch (action.type) {
    case "users/addUser":
      return {
        ...state,
        users: [...state.users, payload],
      };
    default:
      return state;
  }
};

export default rootReducer;
