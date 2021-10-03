import {} from "../actions/index";

const initialState = {
  singUpErrors: {},
  products: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "POST_PRODUCTS":
      return {
        ...state,
      };

    case "REGISTER_USER":
      return {
        ...state,
        singUpErrors: action.payload,
      };

    case "GET_NAME_PRODUCT":
      return {
        ...state,
        products: action.payload,
      };

    default:
      return state;
  }
};
export default rootReducer;
