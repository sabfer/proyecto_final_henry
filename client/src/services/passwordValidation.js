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
  let val = await axios.get("http://localhost:3001/users?userEmail=" + email);
  return val.data.success;
};
