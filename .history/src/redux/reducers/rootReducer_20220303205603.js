const initState = {
  users: [
    {
      id: 1,
      name: "quy pham",
    },
    {
      id: 2,
      name: "quy phung",
    },
  ],
};

const rootReducer = (state = initState, action) => {
  switch(action.type){
      case 'users/addUser':
          return{
              ...state,
              users: [
                  ...state.users,
                {
                  id: 3,
                  name: "quy pham",
                },
               
              ],
          }
  }
  default:
  return state;
};

export default rootReducer;
