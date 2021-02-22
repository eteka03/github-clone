import { put, call, takeLatest, takeEvery } from "redux-saga/effects";
import { getAllUsers, getUserByLogin } from "../../api/userApi";
import {
  GET_USERS_REQUESTED,
  GET_USER_REQUESTED,
  SET_LOADING,
  SET_SELECTED_USER,
  SET_USERS,
} from "../action.types";

function* getUsers() {
  yield put({ type: SET_LOADING });

  const users = yield call(getAllUsers);

  yield put({ type: SET_USERS, payload: users });
}

function* getUser_By_Login({ payload }) {
  yield put({ type: SET_LOADING });

  const user = yield call(getUserByLogin, payload);

  yield put({ type: SET_SELECTED_USER, payload: user });
}

export default function* userSaga() {
  yield takeEvery(GET_USERS_REQUESTED, getUsers);
  yield takeEvery(GET_USER_REQUESTED, getUser_By_Login);
}
