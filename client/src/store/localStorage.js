export const loadUserToken = () => {
  try {
    const serializedState = localStorage.getItem("token");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.log("Catch en loadState: ", err);
    return undefined;
  }
};

export const loadUserId = () => {
  try {
    const serializedUserId = localStorage.getItem("userId");
    if (serializedUserId === null) {
      return undefined;
    }
    return JSON.parse(serializedUserId);
  } catch (err) {
    console.log("Catch en loadState: ", err);
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    const token = JSON.stringify(state.userToken);
    const userId = JSON.stringify(state.userId);
    localStorage.setItem("token", token);
    localStorage.setItem("userId", userId);
  } catch (err) {
    console.log("Catch en saveState: ", err);
  }
};
