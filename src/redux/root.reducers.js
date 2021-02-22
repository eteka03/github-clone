import { combineReducers } from "redux";
import { user_reducer } from "./user/user.reducer";

export const rootReducer = combineReducers({
  users: user_reducer,
});
