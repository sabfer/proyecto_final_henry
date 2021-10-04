import {} from "../actions/index";

const initialState = {
  singUpErrors: {},
  products: {},
  users: {},
  commerces: undefined,
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "REGISTER_USER":
      return {
        ...state,
        singUpErrors: payload,
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

    case "POST_PRODUCTS":
      return {
        ...state,
        products: payload,
      };

    case "DELETE_PRODUCT":
      return {
        ...state,
      };
    
    case "GET_COMMERCES":
      return {
        ...state,
        commerces: payload,
      };

    case "POST_COMMERCE":
      return {
        ...state,
        commerces: payload,
      };
    
    case "DELETE_COMMERCE":
      return {
        ...state,
      };

    case "GET_USERS":
      return {
        ...state,
        users: payload,
      };

    case "DELETE_USER":
      return {
        ...state,
      };

    default:
      return state;
  }
};
export default rootReducer;
