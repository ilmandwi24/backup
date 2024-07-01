import { takeLatest, call, put } from 'redux-saga/effects';

import { getCountryList } from '@domain/api';
import { setLoading, setCountryList } from '@containers/App/actions';
import { GET_COUNTRY_LIST } from '@containers/App/constants';

export function* doGetCountryList({ callbackSuccess, callbackFailed }) {
  yield put(setLoading(true));
  try {
    const response = yield call(getCountryList);
    if (response) {
      yield put(setCountryList(response));
      callbackSuccess && callbackSuccess();
    }
  } catch (error) {
    callbackFailed && callbackFailed();
  }
  yield put(setLoading(false));
}

export default function* appSaga() {
  yield takeLatest(GET_COUNTRY_LIST, doGetCountryList);
}
