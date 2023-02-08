import { configureStore, combineReducers } from "@reduxjs/toolkit";
import appReducer from "./reducers/appReducer";

const rootReducer = combineReducers({
  app: appReducer,
});

const AppStore = configureStore({ reducer: rootReducer });

export default AppStore;
