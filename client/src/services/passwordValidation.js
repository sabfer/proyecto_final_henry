import axios from "axios";

export const passwordValidation = ({ password, confirmPassword }) => {
  if (!password && !confirmPassword) {
    return false;
  }
  if (password === confirmPassword) {
    return true;
  } else {
    return false;
  }
};

export const emailValidation = async ({ email }) => {
  // console.log('antes de axios en emailValidation')
  let val = await axios.get("http://localhost:3001/users/" + email);
  // console.log('luego de axios emailValidation, val = ', val.data)
  return val.data;
};

// export const userValidation 