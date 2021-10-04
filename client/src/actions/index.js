import axios from "axios";

// ---------- REGISTRO DE USUARIO ---------- \\
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

// ---------- CREACIÓN DE PRODUCTO ---------- \\
export function postProduct(payload) {
  return async function (dispatch) {
    var json = await axios.post("http://localhost:3001/products/add", payload);
    return json;
  };
}

// ---------- BUSCAR POR NOMBRE DE PRODUCTO ---------- \\
export function getNameProducts(payload) {
  return async function (dispatch) {
    try {
      var json = await axios.get(
        "http://localhost:3001/products?name=" + payload
      );
      return dispatch({
        type: "GET_NAME_PRODUCT",
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

// ---------- OBTENER PRODUCTOS ---------- \\
export function getProducts(payload) {
  return function (dispatch) {
    axios
      .get("http://localhost:3001/commerce", payload)
      .then((data) => {
        return dispatch({ type: "GET_PRODUCTS", payload: data.data.payload });
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

// ---------- CREACIÓN DE COMERCIO ---------- \\
export function postCommerce(payload) {
  return async function (dispatch) {
    var json = await axios.post("http://localhost:3001/commerce/register", payload);
    return json;
  };
}

export function getCommerces() {
  return function (dispatch) {
    axios
      .get("http://localhost:3001/commerce")
      .then((data) => {
        return dispatch({ type: "GET_COMMERCES", payload: data.data.payload });
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

// ---------- ELIMINAR PRODUCTO ---------- \\
export function deleteProduct(payload) {
  return async function (dispatch) {
    await axios.delete(`http://localhost:3001/products/${payload}`);
    return dispatch({
      type: "DELETE_PRODUCT",
    });
  };
}

// ---------- MODIFICAR PRODUCTO ---------- \\
export function updateProduct(payload, id) {
  
  return async function (dispatch) {
    await axios.put(`http://localhost:3001/products/${id}`, payload);
    return dispatch({
      type: "PUT_PRODUCT",
    });
  };
}
