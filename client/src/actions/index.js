import axios from "axios";

// ---------- REGISTRO DE USUARIO ---------- \\
export function registerUser(payload) {
  console.log("estoy en registerUser, con payload: ", payload);
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
export function loginUser(payload) {
  console.log("estoy en loginUser, con payload: ", payload);
  return function (dispatch) {
    axios
      .post("http://localhost:3001/users/login", payload)
      .then((data) => {
        console.log(
          "estoy en then para hacer un return dispatch de LOGIN_USER, con payload: ",
          payload
        );
        return dispatch({ type: "LOGIN_USER", payload: data.data });
      })
      .catch((err) => {
        console.log("estoy en catch de loginUser con err: ", err);
      });
  };
}

// ---------- OBTENER PRODUCTOS ---------- \\
export function getProducts(token) {
  let auth = {
    headers: {
      Authorization: "Bearer " + token,
    },
  };
  return function (dispatch) {
    axios
      .get("http://localhost:3001/products", auth)
      .then((data) => {
        return dispatch({ type: "GET_PRODUCTS", payload: data.data.payload });
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

// ---------- ORDENAR PRODUCTOS POR NOMBRE ---------- \
export function orderTheProducts(payload) {
  return {
    type: "ORDER_BY_NAME",
    payload,
  };
}

// ---------- BUSCAR POR NOMBRE DE PRODUCTO ---------- \\
export function getNameProducts(payload) {
  return {
    type: "GET_NAME_PRODUCT",
    payload,
  };
}

// ---------- FILTRAR PRODUCTOS POR TIPO ---------- \\
export function filterProductsType(payload) {
  return {
    type: "FILTER_PRODUCTS_TYPE",
    payload,
  };
}

// ---------- CREACIÓN DE PRODUCTO ---------- \\
export function postProduct(payload, token) {
  let auth = {
    headers: {
      Authorization: "Bearer " + token,
    },
  };
  return async function (dispatch) {
    var data = await axios
      .post("http://localhost:3001/products/add", payload, auth)
      .then((data) => {
        return data;
      });
    return data;
  };
}

// ---------- ELIMINAR PRODUCTO ---------- \\
export function deleteProduct(payload, token) {
  let auth = {
    headers: {
      Authorization: "Bearer " + token,
    },
  };
  return async function (dispatch) {
    await axios.delete(`http://localhost:3001/products/${payload}`, auth);
    return dispatch({
      type: "DELETE_PRODUCT",
    });
  };
}

// ---------- MODIFICAR PRODUCTO ---------- \\
export function updateProduct(payload, id, token) {
  let auth = {
    headers: {
      Authorization: "Bearer " + token,
    },
  };
  return async function (dispatch) {
    await axios.put(`http://localhost:3001/products/${id}`, payload, auth);
    await axios.get("http://localhost:3001/products", auth).then((data) => {
      return dispatch({
        type: "PUT_PRODUCT",
        payload: data.data.payload,
      });
    });
  };
}

// ---------- CREACIÓN DE COMERCIO ---------- \\
export function postCommerce(payload, token) {
  let auth = {
    headers: {
      Authorization: "Bearer " + token,
    },
  };
  return async function (dispatch) {
    var data = await axios.post(
      "http://localhost:3001/commerce/register",
      payload,
      auth
    );
    return data;
  };
}

export function getCommerces(token) {
  console.log("el token en getCommerces es: ", token);
  let auth = {
    headers: {
      Authorization: "Bearer " + token,
    },
  };
  return function (dispatch) {
    axios
      // .get("http://localhost:3001/commerce?token=" + token)
      .get("http://localhost:3001/commerce", auth)
      .then((data) => {
        return dispatch({ type: "GET_COMMERCES", payload: data.data.payload });
      })
      .catch((err) => {
        console.log(
          "estoy en el error del catch de getCommerces, con err: ",
          err
        );
      });
  };
}

// ---------- ELIMINAR COMERCIO ---------- \\
export function deleteCommerce(payload, token) {
  let auth = {
    headers: {
      Authorization: "Bearer " + token,
    },
  };
  return async function (dispatch) {
    await axios.delete(`http://localhost:3001/commerce/${payload}`, auth);
    return dispatch({
      type: "DELETE_COMMERCE",
    });
  };
}

// ---------- MODIFICAR COMERCIO ---------- \\
export function updateCommerce(payload, id, token) {
  let auth = {
    headers: {
      Authorization: "Bearer " + token,
    },
  };
  return async function (dispatch) {
    await axios.put(`http://localhost:3001/commerce/${id}`, payload, auth);
    return dispatch({
      type: "PUT_COMMERCE",
    });
  };
}

// ---------- OBTENER USUARIOS ---------- \\
export function getUsers(payload, token) {
  let auth = {
    headers: {
      Authorization: "Bearer " + token,
    },
  };
  return function (dispatch) {
    axios
      .get("http://localhost:3001/users", payload, auth)
      .then((data) => {
        return dispatch({ type: "GET_USERS", payload: data.data.payload });
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

// ---------- OBTENER ID USUARIO PARA STORE ---------- \\
export function getUserId(token) {
  let auth = {
    headers: {
      Authorization: "Bearer " + token,
    },
  };
  // console.log('estoy en actions funcion getUserId');
  return async function (dispatch) {
    axios
      .get(`http://localhost:3001/getId`, auth)
      .then((data) => {
        return dispatch({
          type: "GET_USER_ID",
          payload: data.data,
        });
      })
      .catch((err) => {
        console.log("estoy en catch de axios de getUserId con err: ", err);
      });
  };
}

// ---------- ELIMINAR USUARIOS ---------- \\
export function deleteUser(payload, token) {
  let auth = {
    headers: {
      Authorization: "Bearer " + token,
    },
  };
  return async function (dispatch) {
    await axios.delete(`http://localhost:3001/users/${payload}`, auth);
    return dispatch({
      type: "DELETE_USER",
    });
  };
}

// ---------- MODIFICAR USUARIOS ---------- \\
export function updateUsers(payload, id, token) {
  let auth = {
    headers: {
      Authorization: "Bearer " + token,
    },
  };
  return async function (dispatch) {
    await axios.put(`http://localhost:3001/users/${id}`, payload, auth);
    return dispatch({
      type: "PUT_USER",
    });
  };
}

// ---------- MODIFICAR SETTINGS ---------- \\
export function changeSettings(payload) {
  return function (dispatch) {
    return dispatch({ type: "CHANGE_SETTINGS", payload: payload });
  };
}

// ---------- OBTENER ORDENES DE SALON---------- \\
export function getSalonOrders(token) {
  let auth = {
    headers: {
      Authorization: "Bearer " + token,
    },
  };
  return function (dispatch) {
    axios
      .get(`http://localhost:3001/orders/active?type=Salon`, auth)
      .then((data) => {
        return dispatch({
          type: "GET_SALON_ORDERS",
          payload: data.data.payload,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

// ---------- OBTENER ORDENES DE TAKE AWAY---------- \\
export function getTakeAwayOrders(token) {
  let auth = {
    headers: {
      Authorization: "Bearer " + token,
    },
  };
  return function (dispatch) {
    axios
      .get(`http://localhost:3001/orders/active?type=Take%20Away`, auth)
      .then((data) => {
        return dispatch({
          type: "GET_TAKE_AWAY_ORDERS",
          payload: data.data.payload,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

// ---------- OBTENER ORDENES DE DELIVERY---------- \\
export function getDeliveryOrders(token) {
  let auth = {
    headers: {
      Authorization: "Bearer " + token,
    },
  };
  return function (dispatch) {
    axios
      .get(`http://localhost:3001/orders/active?type=Delivery`, auth)
      .then((data) => {
        console.log(data);
        return dispatch({
          type: "GET_DELIVERY_ORDERS",
          payload: data.data.payload,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

// ---------- OBTENER MESAS---------- \\
export function getMesas(token) {
  let auth = {
    headers: {
      Authorization: "Bearer " + token,
    },
  };
  return function (dispatch) {
    axios.get("http://localhost:3001/mesas", auth).then((data) => {
      return dispatch({ type: "GET_MESAS", payload: data.data.payload });
    });
  };
}

// ---------- CHANGE STATUS---------- \\
export function changeStatus(payload, token) {
  let auth = {
    headers: {
      Authorization: "Bearer " + token,
    },
  };
  return function (dispatch) {
    axios
      .put(
        `http://localhost:3001/mesas/${payload.tableNumber}`,
        { isOccupated: payload.isOccupated },
        auth
      )
      .then((data) => {
        return dispatch(getMesas(token));
      });
  };
}

// ---------- MODIFICAR PRODUCTOS ORDEN ---------- \\
export function updateOrder(id, payload, token) {
  let auth = {
    headers: {
      Authorization: "Bearer " + token,
    },
  };
  return async function (dispatch) {
    await axios.put(`http://localhost:3001/orders/${id}`, payload, auth);
    return dispatch(getSalonOrders(token));
  };
}

// OBTENER CATEGORÍAS DE PRODUCTOS \\
export function getCategories(token) {
  let auth = {
    headers: {
      Authorization: "Bearer " + token,
    },
  };
  return function (dispatch) {
    axios
      .get("http://localhost:3001/productTypes", auth)
      .then((data) => {
        return dispatch({
          type: "GET_PRODUCT_TYPES",
          payload: data.data.payload,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

// CREAR CATEGORÍAS DE PRODUCTOS \\
export function postCategories(payload, token) {
  let auth = {
    headers: {
      Authorization: "Bearer " + token,
    },
  };
  return async function (dispatch) {
    var data = await axios
      .post("http://localhost:3001/productTypes/new", payload, auth)
      .then((data) => {
        return data;
      });
    return data;
  };
}

// ---------- ELIMINAR CATEGORÍAS DE PRODUCTOS ---------- \\
export function deleteCategory(payload, token) {
  console.log(payload)
  let auth = {
    headers: {
      Authorization: "Bearer " + token,
    },
  };
  return async function (dispatch) {
    await axios.delete(`http://localhost:3001/productTypes/${payload}`, auth);
    return dispatch({
      type: "DELETE_CATEGORY",
    });
  };
}

// ---------- CREACIÓN DE ORDEN ---------- \\
export function postOrder(payload, token) {
  let auth = {
    headers: {
      Authorization: "Bearer " + token,
    },
  };
  return async function (dispatch) {
    var data = await axios.post("http://localhost:3001/orders", payload, auth);
    return dispatch({
      type: "POST_ORDER",
      payload: data.data.payload,
    });
  };
}

// ---------- CREACIÓN DE ORDEN TAKE AWAY ---------- \\
export function postOrderTakeAway(payload, token) {
  let auth = {
    headers: {
      Authorization: "Bearer " + token,
    },
  };
  return async function (dispatch) {
    var data = await axios.post("http://localhost:3001/orders", payload, auth);
    return dispatch({
      type: "POST_ORDER_TAKE_AWAY",
      payload: data.data.payload,
    });
  };
}

// ---------- CREACIÓN DE ORDEN DELIVERY ---------- \\
export function postOrderDelivery(payload, token) {
  let auth = {
    headers: {
      Authorization: "Bearer " + token,
    },
  };
  return async function (dispatch) {
    var data = await axios.post("http://localhost:3001/orders", payload, auth);
    return dispatch({
      type: "POST_ORDER_DELIVERY",
      payload: data.data.payload,
    });
  };
}

// ---------- DELETE TOKEN ---------- \\
export function deleteToken() {
  return async function (dispatch) {
    return dispatch({
      type: "DELETE_TOKEN",
    });
  };
}
