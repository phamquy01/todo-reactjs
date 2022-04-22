import { login } from "./action/actions";
import { logout } from "./action/actions";
import rootReducer from "./reducers/rootReducer";

function* handleLogin(payload = login.payload) {}
function* handleLogout() {}
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
