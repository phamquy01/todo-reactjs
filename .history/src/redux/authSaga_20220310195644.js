import { login } from "./action/actions";

function* handleLogin(payload = login.payload) {}

export default function* authSaga() {
  console.log("auth saga");
}
