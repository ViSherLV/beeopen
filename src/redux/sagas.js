import { takeEvery, put, call } from 'redux-saga/effects';
export function* sagaWatcher() {
    yield takeEvery(`SHOW_LOADER`, sagaWorker)

}

function* sagaWorker() {
    const payload = yield call(fetchPosts);
    yield put({ type: "FETCH_POST", payload })
    yield setTimeout(function () { }, 3000)
    yield put({ type: 'HIDE_LOADER' })
}
async function fetchPosts() {
    function sleep(ms) {
        return new Promise(resolve => {
            setTimeout(resolve, ms);
        });
    }
    const response = await fetch('http://localhost:3001')
    await sleep(3000)
    return response.json()
}