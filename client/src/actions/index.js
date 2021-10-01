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
export function postProduct(payload) {
    return async function (dispatch) {
      var json = await axios.post("http://localhost:3001/products", payload);
      //console.log(json);
      return json;
    };
  }