import {} from "../actions/index";

const initialState = {
  singUpErrors: {},
  products: {},
  commerces: undefined,
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "REGISTER_USER":
      return {
        ...state,
        singUpErrors: payload,
      };

    case "POST_PRODUCTS":
      return {
        ...state,
        products: payload,
      };

    case "GET_NAME_PRODUCT":
      return {
        ...state,
        products: payload,
      };

    case "GET_PRODUCTS":
      return {
        ...state,
        products: payload,
      };

    case "GET_COMMERCES":
      return {
        ...state,
        commerces: payload,
      };

    case "DELETE_PRODUCT":
      return {
        ...state,
      };

    case "POST_PRODUCT":
      return {
        ...state,
      };

    default:
      return state;
  }
};
export default rootReducer;
