import { login } from "./action/actions";
import rootReducer from "./reducers/rootReducer";

function* handleLogin(payload = login.payload) {}
function* handleLogout() {}
function* watchLoginFlow() {
  let action = yield take(login);
  action = login.payload;
}

export default function* authSaga() {
  yield fork(watchLoginFlow);
}
