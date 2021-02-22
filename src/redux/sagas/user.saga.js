import { put, call, takeLatest, takeEvery } from "redux-saga/effects";
import { getAllUsers } from "../../api/userApi";
import { GET_USERS_REQUESTED, SET_LOADING, SET_USERS } from "../action.types";

function* getUsers() {
  yield put({ type: SET_LOADING });

  const users = yield call(getAllUsers);

  yield put({ type: SET_USERS, payload: users });
}

export default function* userSaga() {
  yield takeEvery(GET_USERS_REQUESTED, getUsers);
}
