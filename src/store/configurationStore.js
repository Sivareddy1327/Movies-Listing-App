import { createStore, combineReducers } from "redux";
import moviesReducers from "../Reducers/MoviesReducers";

const configurationStore = () => {
  const store = createStore(
    combineReducers({
      moviesname: moviesReducers,
    })
  );

  return store;
};

export default configurationStore;
