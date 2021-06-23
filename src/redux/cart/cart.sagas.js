import { all, takeLatest, put, call } from "@redux-saga/core/effects";

import { clearCart } from "./cart.action";

import UserActionTypes from "../user/user.type";

export function* clearCartOnSignOut() {
  yield put(clearCart());
}

export function* onSignOutSuccess() {
  yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut);
}

export function* cartSagas() {
  yield all([call(onSignOutSuccess)]);
}
