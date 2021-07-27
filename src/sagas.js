import { put, takeLatest, all } from 'redux-saga/effects';

function* fetchNews() {

  const data = yield fetch('https://newsapi.org/v1/articles?source=cnn&apiKey=0a71c46da2044ceba7c7ab06ec301d18')
    .then(response => response.json());

  yield put({ type: "NEWS_RECEIVED", data: data.articles || [{ error: data.message }] });
}

function* actionWatcher() {
  yield takeLatest('GET_NEWS', fetchNews)
}


export default function* rootSaga() {
  yield all([
    actionWatcher(),
  ]);
}
