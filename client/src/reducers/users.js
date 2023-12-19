const usersReducer = (states = [], action) => {
  switch (action.type) {
    case "FETCH_USERS":
      return action.payload;
    case "UPDATE_CURRENT_USER":
      return states.map((user) =>
        user._id === action.payload._id ? action.payload : user
      );
    default:
      return states;
  }
};

export default usersReducer;
