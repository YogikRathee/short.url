import { put, takeLatest, call } from 'redux-saga/effects';
import { 
  REQUEST_FAILED, 
  REQUEST_SUCCESS,
  START_LOADER,
  STOP_LOADER,
  GET_LONG_URL
} from '../actions';
import { createURL, redirectURL } from "../api"

// const time = {
//   hours: 2,
//   minutes: 45
// }

export function* createShortUrl(action) {
    yield put({ type: START_LOADER })
    action.payload.data.details = JSON.stringify(action.payload.data.details)
    const response = yield call(createURL, action.payload.data)
    if(response.status == 200 && !response.data.hasOwnProperty('errmsg'))
        yield put({ type: REQUEST_SUCCESS, payload: response.data })
    else
        yield put({ type: REQUEST_FAILED })
    yield put({ type: STOP_LOADER })
    action.payload.history.push('/details')
}

export function* getRedirectUrl(action) {
    yield put({ type: START_LOADER })
    const response = yield call(redirectURL, action.payload.url)
    if(response.status == 200 && !response.data.hasOwnProperty('errmsg'))
      yield put({ type: REQUEST_SUCCESS, payload: response.data })
    else
      yield put({ type: REQUEST_FAILED })
    yield put({ type: STOP_LOADER })

}

// export function* getTime(){
//   yield put({ type: SET_TIME, payload: time })
// }

export default function* rootSaga() {
  yield takeLatest('SEND_SHORT_URL_REQUEST', createShortUrl);
  yield takeLatest('GET_LONG_URL', getRedirectUrl)
}