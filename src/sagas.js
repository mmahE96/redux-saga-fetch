import { put, takeLatest, all } from 'redux-saga/effects';
import axios from "axios"




function* fetchNews() {

    const data = yield axios(`https://newsapi.org/v1/articles?source=cnn&apiKey=${process.env.REACT_APP_API_KEY}`)
    .then(response => response.data);

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
