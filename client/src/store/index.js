import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reduxThunk from "redux-thunk";
import reducer from "../reducer";
import { loadUserId, loadUserToken, saveState } from "./localStorage";

const persistedToken = loadUserToken();
const persistedUserId = loadUserId();

const store = createStore(
  reducer,
  {
    userToken: persistedToken,
    userId: persistedUserId,
  },
  composeWithDevTools(applyMiddleware(reduxThunk))
);

store.subscribe(() => {
  saveState(store.getState());
});

export default store;
