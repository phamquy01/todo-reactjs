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
        case 'users/addUser'
    }
  return state;
};

export default rootReducer;
