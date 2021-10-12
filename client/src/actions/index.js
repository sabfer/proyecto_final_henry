import axios from "axios";
import { useSelector } from "react-redux";

// import Swal from "sweetalert2";
// import withReactContent from "sweetalert2-react-content";
// const MySwal = withReactContent(Swal);

// ---------- REGISTRO DE USUARIO ---------- \\
export function registerUser(payload) {
  console.log('estoy en registerUser, con payload: ', payload);
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
  console.log('estoy en loginUser, con payload: ', payload);
  return function (dispatch) {
    axios
      .post("http://localhost:3001/users/login", payload)
      .then((data) => {
        console.log('estoy en then para hacer un return dispatch de LOGIN_USER, con payload: ', payload);
        return dispatch({ type: "LOGIN_USER", payload: data.data });
      })
      .catch((err) => {
        console.log('estoy en catch de loginUser con err: ', err);
      });
  };
}

// ---------- OBTENER PRODUCTOS ---------- \\
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

// export function getNameProducts(payload) {
//   return async function (dispatch) {
//     try {
//       var data = await axios.get("http://localhost:3001/products?name=" + payload);
//       if (data.data.succes) {
//         return dispatch({
//           type: "GET_NAME_PRODUCT",
//           payload: data.data.payload,
//         });
//       } else {
//         MySwal.fire({
//           icon: "error",
//           title: "El producto no existe",
//           showConfirmButton: false,
//           timer: 1500,
//         });
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };
// }

// ---------- FILTRAR PRODUCTOS POR TIPO ---------- \\
export function filterProductsType(payload) {
  return {
    type: "FILTER_PRODUCTS_TYPE",
    payload,
  };
}

// ---------- CREACIÓN DE PRODUCTO ---------- \\
export function postProduct(payload) {
  return async function (dispatch) {
    var data = await axios
      .post("http://localhost:3001/products/add", payload)
      .then((data) => {
        return data;
      });
    return data;
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
    await axios.get("http://localhost:3001/products").then((data) => {
      return dispatch({
        type: "PUT_PRODUCT",
        payload: data.data.payload,
      });
    });
  };
}

// ---------- CREACIÓN DE COMERCIO ---------- \\
export function postCommerce(payload) {
  console.log(payload, "actions");
  return async function (dispatch) {
    var data = await axios.post(
      "http://localhost:3001/commerce/register",
      payload
    );
    return data;
  };
}

export function getCommerces(token) {
  console.log('el token en getCommerces es: ', token);
  let auth = {
    headers: {
      'Authorization': 'Bearer ' + token,
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
        console.log('estoy en el error del catch de getCommerces, con err: ', err);
      });
  };
}

// ---------- ELIMINAR COMERCIO ---------- \\
export function deleteCommerce(payload) {
  return async function (dispatch) {
    await axios.delete(`http://localhost:3001/commerce/${payload}`);
    return dispatch({
      type: "DELETE_COMMERCE",
    });
  };
}

// ---------- MODIFICAR COMERCIO ---------- \\
export function updateCommerce(payload, id) {
  return async function (dispatch) {
    await axios.put(`http://localhost:3001/commerce/${id}`, payload);
    return dispatch({
      type: "PUT_COMMERCE",
    });
  };
}

// ---------- OBTENER USUARIOS ---------- \\
export function getUsers(payload) {
  return function (dispatch) {
    axios
      .get("http://localhost:3001/users", payload)
      .then((data) => {
        return dispatch({ type: "GET_USERS", payload: data.data.payload });
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

// ---------- ELIMINAR USUARIOS ---------- \\
export function deleteUser(payload) {
  return async function (dispatch) {
    await axios.delete(`http://localhost:3001/users/${payload}`);
    return dispatch({
      type: "DELETE_USER",
    });
  };
}

// ---------- MODIFICAR USUARIOS ---------- \\
export function updateUsers(payload, id) {
  return async function (dispatch) {
    await axios.put(`http://localhost:3001/users/${id}`, payload);
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


// ---------- OBTENER ORDENES ---------- \\
