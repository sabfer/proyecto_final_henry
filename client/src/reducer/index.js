import {} from "../actions/index";

const initialState = {
  singUpErrors: {},
  products: {},
  commerces: {},
};

const rootReducer = (state = initialState, { type, payload } ) => {
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

    case "POST_COMMERCE":
      return {
        ...state,
        commerces: payload,
      };

    default:
      return state;
  }
};
export default rootReducer;
