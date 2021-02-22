import { SET_LOADING, SET_USERS } from "../action.types";

const initial_state = {
  users: [],
  loading: false,
};
export const user_reducer = (state = initial_state, action) => {
  switch (action?.type) {
    case SET_USERS:
      return { ...state, users: action?.payload, loading: false };
    case SET_LOADING:
      return { ...state, loading: true };
    default:
      return state;
  }
};
