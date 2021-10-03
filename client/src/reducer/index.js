import {} from "../actions/index";

const initialState = {
  singUpErrors: {},
  products: {},
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "REGISTER_USER":
      return {
        ...state,
        singUpErrors: payload,
      };
    case "GET_PRODUCTS":
      return {
        ...state,
        products: payload,
      };
    default:
      return state;
  }
};
export default rootReducer;
