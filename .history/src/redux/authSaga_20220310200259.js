import { login } from "./action/actions";
import rootReducer from "./reducers/rootReducer";

function* handleLogin(payload = login.payload) {}
function* handleLogout() {}
function* watchLoginFlow() {
  yield take(login);
}

export default function* authSaga() {
  const action = (login.payload = yield fork(watchLoginFlow));
  yield fork(handleLogin);
}
