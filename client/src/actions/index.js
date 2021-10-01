import axios from "axios";

export function postProduct(payload) {
    return async function (dispatch) {
      var json = await axios.post("http://localhost:3001/products", payload);
      //console.log(json);
      return json;
    };
  }

