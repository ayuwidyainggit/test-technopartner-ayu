import { combineReducers, configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import authReducer from "./login/AuthReducer";
import { HomeReducer } from "./home/HomeReducer";
import { MenuReducer } from "./menu/MenuReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  homeList: HomeReducer,
  menuList: MenuReducer,
});

const store = configureStore({
  reducer: rootReducer,

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
