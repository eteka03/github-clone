import { SET_LOADING, SET_SELECTED_USER, SET_USERS } from "../action.types";

const initial_state = {
  users: [],
  loading: false,
  selectedUser: {},
};
export const user_reducer = (state = initial_state, action) => {
  switch (action?.type) {
    case SET_USERS:
      return { ...state, users: action?.payload, loading: false };
    case SET_LOADING:
      return { ...state, loading: true };
    case SET_SELECTED_USER:
      return { ...state, loading: false, selectedUser: action?.payload };
    default:
      return state;
  }
};
