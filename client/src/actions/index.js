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
export function loginUser(payload) {
  return function (dispatch) {
    axios
      .post("http://localhost:3001/users/login", payload)
      .then((data) => {
        return dispatch({ type: "LOGIN_USER", payload: data.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

// ---------- OBTENER ORDENES ---------- \\
export function getOrders(token) {
  let auth = {
    headers: {
      Authorization: "Bearer " + token,
    },
  };
  return function (dispatch) {
    axios
      .get("http://localhost:3001/orders", auth)
      .then((data) => {
        return dispatch({ type: "GET_ORDERS", payload: data.data.payload });
      })
      .catch((err) => {
        console.log(err);
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

// ---------- OBTENER PRODUCTOS INVENTARIO ---------- \\
export function getProductsInv(token) {
  let auth = {
    headers: {
      Authorization: "Bearer " + token,
    },
  };

  return function (dispatch) {
    axios
      .get("http://localhost:3001/productsInv", auth)
      .then((data) => {
        return dispatch({
          type: "GET_PRODUCTS_INV",
          payload: data.data.payload,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // console.log(productsInv3)
  // return function (dispatch) {
  //       return dispatch({ type: "GET_PRODUCTS_INV", payload: productsInv3});
  //     }
}

// ---------- ORDENAR PRODUCTOS POR NOMBRE ---------- \
export function orderTheProductsInv(payload) {
  return {
    type: "ORDER_BY_NAME",
    payload,
  };
}
// ---------- ORDENAR PRODUCTOS POR NUMBERO DE ORDEN ---------- \
// export function orderOrders(payload) {
//   return {
//     type: "ORDER_BY_NUMBER",
//     payload,
//   };
// }

// ---------- ORDENAR PRODUCTOS POR NOMBRE EN INVENTARIO ---------- \
export function orderTheProducts(payload) {
  return {
    type: "ORDER_BY_NAME_INV",
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

// ---------- BUSCAR POR NOMBRE DE PRODUCTO INVENTARIO ---------- \\
export function getNameProductsInv(payload) {
  return {
    type: "GET_NAME_PRODUCT_INV",
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

// ---------- FILTRAR ORDENES POR TIPO ---------- \\
export function filterOrdersType(payload) {
  return {
    type: "FILTER_ORDERS_TYPE",
    payload,
  };
}

// ---------- FILTRAR POR NÚMERO DE ÓRDEN ---------- \\
export function filterOrdersNumber(payload) {
  return {
    type: "FILTER_ORDERS_NUMBER",
  };
}

// ---------- FILTRAR PROVEEDORES ---------- \\
export function filterProveedores(payload) {
  return {
    type: "FILTER_PROVEEDORES",
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

// ---------- CREACIÓN DE PRODUCTO INVENTARIO---------- \\
export function postProductInv(payload, token) {
  console.log(payload, "actions");
  let auth = {
    headers: {
      Authorization: "Bearer " + token,
    },
  };
  return async function (dispatch) {
    var data = await axios
      .post("http://localhost:3001/productsInv", payload, auth)
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

// ---------- ELIMINAR PRODUCTO INVENTARIO ---------- \\
export function deleteProductInv(payload, token) {
  let auth = {
    headers: {
      Authorization: "Bearer " + token,
    },
  };
  return async function (dispatch) {
    await axios.delete(`http://localhost:3001/productsInv/${payload}`, auth);
    return dispatch({
      type: "DELETE_PRODUCT_INV",
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

// /---------- MODIFICAR PRODUCTO INVENTARIO ---------- \\
export function updateProductInv(payload, id, token) {
  let auth = {
    headers: {
      Authorization: "Bearer " + token,
    },
  };
  return async function (dispatch) {
    await axios.put(`http://localhost:3001/productsInv/${id}`, payload, auth);
    // await axios.get("http://localhost:3001/productsInv/", auth).then((data) => {
    //   return dispatch({
    //     type: "PUT_PRODUCT_INV",
    //     payload: data.data.payload,
    //   });
    // });
    return dispatch(getProductsInv(token));
  };
}

// ---------- OBTENER ID USUARIO PARA STORE ---------- \\
export function getUserId(token) {
  let auth = {
    headers: {
      Authorization: "Bearer " + token,
    },
  };
  return async function (dispatch) {
    console.log('estoy en getUserId');
    axios
      .get(`http://localhost:3001/getId`, auth)
      .then((data) => {
        return dispatch({
          type: "GET_USER_ID",
          payload: data.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

// ---------- MODIFICAR SETTINGS ---------- \\
export function changeSettings(payload) {
  return function (dispatch) {
    return dispatch({ type: "CHANGE_SETTINGS", payload: payload });
  };
}

export function updateSettings(token, payload) {
  let auth = {
    headers: {
      Authorization: "Bearer " + token,
    },
  };
  console.log('payload de action updateSettings: ', payload)
  return function (dispatch) {
    axios
      .post('http://localhost:3001/postId', payload, auth)
      .then((data) => {
        // console.log('-----------data.data de axios: ', data.data)
        return dispatch({
          type: "UPDATE_SETTINGS",
          payload: data.data,
        });
      })
      .catch((err) => {
        console.log('Error en updateSettings con err: ', err);
      })
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
    return (
      dispatch(getSalonOrders(token)),
      dispatch(getDeliveryOrders(token)),
      dispatch(getTakeAwayOrders(token))
    );
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

export function getKitchenOrders(token) {
  let auth = {
    headers: {
      Authorization: "Bearer " + token,
    },
  };
  return function (dispatch) {
    axios
      .get("http://localhost:3001/orders/active", auth)
      .then((data) => {
        return dispatch({
          type: "GET_KITCHEN_ORDERS",
          payload: data.data.payload,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

export function updateOrderKitchen(id, payload, token) {
  let auth = {
    headers: {
      Authorization: "Bearer " + token,
    },
  };
  return function (dispatch) {
    axios
      .put(`http://localhost:3001/orders/${id}`, payload, auth)
      .catch((err) => {
        console.log(err);
      });
    return dispatch(getKitchenOrders(token));
  };
}
