import { login } from "./action/actions";
import { logout } from "./action/actions";

function* handleLogin(payload = login.payload) {
  console.log("login", payload);
}
function* handleLogout() {
  console.log("logou");
}
function* watchLoginFlow() {
  let action = yield take(login);
  action = login.payload;
  yield fork(handleLogin, action.payload);

  yield take(logout);
  yield fork(handleLogout);
}

export default function* authSaga() {
  yield fork(watchLoginFlow);
}
