import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reduxThunk from "redux-thunk";
import reducer from "../reducer";
import { loadState, saveState } from './localStorage';


const persistedToken = loadState();

const store = createStore(
  reducer,
  { userToken: persistedToken },
  composeWithDevTools(applyMiddleware(reduxThunk))
);

store.subscribe(() => {
  saveState(store.getState());
});

export default store;

