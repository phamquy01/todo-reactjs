import Password from "antd/lib/input/Password";

const initState = {
  users: [
    {
      id: 1,
      username: "quypham",
      assword: "123456",
    },
  ],
};

export const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case "users/addUser":
      return {
        ...state,
        users: [
          ...state.users,
          {
            id: 2,
            username: "quyphung",
            assword: "123456",
          },
        ],
      };
    default:
      return state;
  }
};
