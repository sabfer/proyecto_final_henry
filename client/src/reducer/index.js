import {} from "../actions/index";

const initialState = {
  singUpErrors: {},
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "REGISTER_USER":
      return {
        ...state,
        singUpErrors: action.payload,
      };
    default:
      return state;
  }
};
export default rootReducer;
