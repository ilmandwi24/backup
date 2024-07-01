import { call } from 'redux-saga/effects';
import { expectSaga } from 'redux-saga-test-plan';
import { throwError } from 'redux-saga-test-plan/providers';
import { getCountryList } from '@domain/api';

import appSaga, { doGetCountryList } from '@containers/App/saga';

import { setCountryList, setLoading } from '@containers/App/actions';
import { GET_COUNTRY_LIST } from '@containers/App/constants';

jest.mock('@domain/API', () => ({
  getCountryList: jest.fn(),
}));

const mockResponseCountryList = [
  {
    name: 'Indonesia',
    code: 'ID',
  },
  {
    name: 'Malaysia',
    code: 'MY',
  },
];

describe('appSaga', () => {
  describe('doGetCountryList', () => {
    beforeEach(() => {
      jest.resetAllMocks();
    });

    describe('doGetCountryList watcher', () => {
      it('should takeLatest GET_COUNTRY_LIST and call getCountryList', () =>
        expectSaga(appSaga).dispatch({ type: GET_COUNTRY_LIST }).silentRun());
    });
    it('should handle success scenario', () => {
      const callbackSuccess = jest.fn();
      const callbackFailed = jest.fn();
      return expectSaga(doGetCountryList, { callbackSuccess, callbackFailed })
        .put(setLoading(true))
        .provide([[call(getCountryList), mockResponseCountryList]])
        .put(setCountryList(mockResponseCountryList))
        .put(setLoading(false))
        .run()
        .then(() => {
          expect(callbackSuccess).toHaveBeenCalled();
          expect(callbackFailed).not.toHaveBeenCalled();
        });
    });

    it('should handle success scenario, without response', () => {
      const callbackSuccess = jest.fn();
      const callbackFailed = jest.fn();
      return expectSaga(doGetCountryList, { callbackSuccess, callbackFailed })
        .put(setLoading(true))
        .provide([[call(getCountryList), null]])
        .put(setLoading(false))
        .run()
        .then(() => {
          expect(callbackSuccess).not.toHaveBeenCalled();
          expect(callbackFailed).not.toHaveBeenCalled();
        });
    });

    it('should handle failed scenario', () => {
      const callbackSuccess = jest.fn();
      const callbackFailed = jest.fn();
      return expectSaga(doGetCountryList, { callbackSuccess, callbackFailed })
        .put(setLoading(true))
        .provide([[call(getCountryList), throwError('Internal server error')]])
        .put(setLoading(false))
        .run()
        .then(() => {
          expect(callbackSuccess).not.toHaveBeenCalled();
          expect(callbackFailed).toHaveBeenCalled();
        });
    });
  });
});
