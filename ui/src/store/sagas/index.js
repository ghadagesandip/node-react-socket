import { put, all, call, takeLatest } from 'redux-saga/effects';
import Api from './../../requests'

function* fetchMessages() {
    console.log('LOAD_MESSAGES called')
    try {
       const messages = yield call(Api.fetchMessages);
       yield put({type: "MESSAGES_FETCH_SUCCEEDED", payload: messages });
    } catch (e) {
       yield put({type: "MESSAGES_FETCH_FAILED", message: e.message});
    }
 }

function* getMessages() {
    yield takeLatest("LOAD_MESSAGES", fetchMessages);
}

export default function* rootSaga() {
    yield all([
        getMessages()
    ])
}