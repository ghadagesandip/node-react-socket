import { put, all, call, takeLatest } from 'redux-saga/effects';
import Api from './../../requests'

function* fetchMessages() {
    try {
       const messages = yield call(Api.fetchMessages);
       yield put({type: "MESSAGES_FETCH_SUCCEEDED", payload: messages });
    } catch (e) {
       yield put({type: "MESSAGES_FETCH_FAILED", message: e.message});
    }
 }

function* getMessages() {
    console.log('load message saga called')
    yield takeLatest("LOAD_MESSAGES", fetchMessages);
}

export default function* rootSaga() {
    yield all([
        getMessages()
    ])
}