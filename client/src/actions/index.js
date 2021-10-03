import axios from "axios";

export function registerUser(payload) {
  return function (dispatch) {
    axios
      .post("http://localhost:3001/users/register", payload)
      .then((data) => {
        return dispatch({ type: "REGISTER_USER", payload: data.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

export function getProducts(payload) {
  return function (dispatch) {
    axios
      .get("http://localhost:3001/products", payload)
      .then((data) => {
        return dispatch({ type: "GET_PRODUCTS", payload: data.data.payload });
      })
      .catch((err) => {
        console.log(err);
      });
  };
}
