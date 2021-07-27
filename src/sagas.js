import { put, takeLatest, all } from 'redux-saga/effects';
import axios from "axios";

const options = {
  method: 'GET',
  url: 'https://alpha-vantage.p.rapidapi.com/query',
  params: {function: 'DIGITAL_CURRENCY_MONTHLY', market: 'CNY', symbol: 'BTC'},
  headers: {
    'x-rapidapi-key': `${process.env.REACT_APP_API_KEY}`,
    'x-rapidapi-host': 'alpha-vantage.p.rapidapi.com'
  }
};

function* fetchNews() {

  const data = yield axios(options)
    .then(response => response.data);
    

  yield put({ type: "NEWS_RECEIVED", data: data || [{ error: data.message }] });
}

function* actionWatcher() {
  yield takeLatest('GET_NEWS', fetchNews)
}


export default function* rootSaga() {
  yield all([
    actionWatcher(),
  ]);
}
