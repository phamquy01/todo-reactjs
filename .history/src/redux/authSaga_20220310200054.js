import { login } from "./action/actions";
import rootReducer from "./reducers/rootReducer";

function* handleLogin(payload = login.payload) {}
function* handleLogout() {}
function* watchLoginFlow() {
  yield take(login);
}

export default function* authSaga() {
  yield fork(watchLoginFlow);
}
