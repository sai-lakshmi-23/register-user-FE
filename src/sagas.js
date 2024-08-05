import { all, select, takeEvery } from "redux-saga/effects";
import { registerAction } from "./models/dataReducer";
import { apiCall } from "./utilities";
import { doSignAction } from "./models/signReducer";
import { doSign } from "./sagaRegist";

export function* doRegister(action) {
    try {
        const { email, password } = action?.payload;
  console.log("sagas data", email, password, action);
  const response = yield apiCall({
    method: "post",
    url: "http://localhost:8080/api/register-user",
    body: { email, password },
    headers: {
      Authorization: "Bearer YOUR_TOKEN_HERE",
      Accept: "application/json",
      "Content-Type": "application/json",
      "User-Agent": "Axios - YourApp/1.0.0",
      "Cache-Control": "no-cache",
      "Accept-Encoding": "gzip, deflate",
      "X-Custom-Header": "customValue",
    },
  });
    } catch (error) {
        console.log(error);
    }
  
}
export function* doRegisterSaga() {
  yield takeEvery(registerAction, doRegister);
  yield takeEvery(doSignAction,doSign);
}
export default function* rootSaga() {
  yield all([doRegisterSaga()]);
}
