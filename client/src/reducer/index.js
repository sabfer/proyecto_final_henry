import {} from "../actions/index";

const initialState = {
  signUpData: undefined,
  userToken: undefined,
  products: undefined,
  productTypes: undefined,
  productsCopy: undefined,
  users: undefined,
  commerces: undefined,
  settings: {
    show: "generales",
  },
  mesas: undefined,
  orders: {
    salonOrders: undefined,
    takeAwayOrders: undefined,
    deliveryOrders: undefined,
  },
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "REGISTER_USER":
      console.log("-------------signUpData: payload = ", payload);
      return {
        ...state,
        signUpData: payload,
      };
    case "LOGIN_USER":
      console.log("reducer LOGIN_USER, payload", payload);
      return {
        ...state,
        userToken: payload.token,
      };
    case "GET_NAME_PRODUCT":
      const allProductsInclude = state.productsCopy.filter((e) =>
        e.name.toLocaleLowerCase().includes(payload.toLocaleLowerCase())
      );
      return {
        ...state,
        products: Array.isArray(allProductsInclude)
          ? allProductsInclude
          : [allProductsInclude],
      };

    case "ORDER_BY_NAME":
      const products = state.products;
      let arrayOrderName =
        payload === true
          ? products.sort(function (a, b) {
              if (a.name > b.name) return 1;
              if (b.name > a.name) return -1;
              return 0;
            })
          : products.sort(function (a, b) {
              if (a.name > b.name) return -1;
              if (b.name < a.name) return 1;
              return 0;
            });
      return {
        ...state,
        products: arrayOrderName,
      };

    case "FILTER_PRODUCTS_TYPE":
      const array = [...state.productsCopy].filter((e) => e.productType === payload);
      return {
        ...state,
        products: array,
      };

    case "GET_PRODUCTS":
      return {
        ...state,
        products: payload,
        productsCopy: payload,
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

    case "PUT_PRODUCT":
      return {
        ...state,
        products: payload,
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

    case "CHANGE_SETTINGS":
      return {
        ...state,
        settings: payload,
      };

    case "GET_SALON_ORDERS":
      return {
        ...state,
        orders: {
          ...state.orders,
          salonOrders: payload,
        },
      };

    case "GET_MESAS":
      return {
        ...state,
        mesas: payload,
      };

    case "CHANGE_STATUS":
      const mesa = state.mesas.find((m) => {
        return m.numero === parseInt(payload.tableNumber);
      });
      mesa.isOccupated = payload.isOccupated;
      return {
        ...state,
        mesas: [...state.mesas],
      };

    case "GET_PRODUCT_TYPES":
      let sortedArray = payload.sort(function (a, b) {
        if (a.name > b.name) {
          return 1;
        }
        if (b.name > a.name) {
          return -1;
        }
        return 0;
      });
      console.log(sortedArray);
      return {
        ...state,
        productTypes: sortedArray,
      };
    case "POST_ORDER":
      if (state.orders.salonOrders) {
        return {
          ...state,
          orders: {
            ...state.orders,
            salonOrders: [...state.orders.salonOrders, payload],
          },
        };
      } else {
        return { ...state, orders: { ...state.orders, salonOrders: [payload] } };
      }

    default:
      return state;
  }
};
export default rootReducer;
