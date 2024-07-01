import { produce } from 'immer';
import appReducer, { initialState } from '@containers/App/reducer';

import { SET_LOCAL, SET_THEME, SET_POPUP, SET_LOADING, SET_COUNTRY_LIST } from '@containers/App/constants';

describe('AppReducer', () => {
  it('should return the initial state', () => {
    expect(appReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle SET_LOCAL', () => {
    const locale = 'en';
    const expetedResult = produce(initialState, (draft) => {
      draft.locale = locale;
    });
    expect(
      appReducer(initialState, {
        type: SET_LOCAL,
        locale,
      })
    ).toEqual(expetedResult);
  });

  it('should handle SET_THEME', () => {
    const theme = 'dark';
    const expetedResult = produce(initialState, (draft) => {
      draft.theme = theme;
    });
    expect(
      appReducer(initialState, {
        type: SET_THEME,
        theme,
      })
    ).toEqual(expetedResult);
  });

  it('should handle SET_POPUP', () => {
    const title = 'title';
    const message = 'message';
    const expetedResult = produce(initialState, (draft) => {
      draft.popup = {
        open: true,
        title,
        message,
      };
    });
    expect(
      appReducer(initialState, {
        type: SET_POPUP,
        popup: {
          open: true,
          title,
          message,
        },
      })
    ).toEqual(expetedResult);
  });

  it('should handle SET_LOADING', () => {
    const loading = true;
    const expetedResult = produce(initialState, (draft) => {
      draft.loading = loading;
    });
    expect(
      appReducer(initialState, {
        type: SET_LOADING,
        loading,
      })
    ).toEqual(expetedResult);
  });

  it('should handle SET_COUNTRY_LIST', () => {
    const countryList = [];
    const expetedResult = produce(initialState, (draft) => {
      draft.countryList = countryList;
    });
    expect(
      appReducer(initialState, {
        type: SET_COUNTRY_LIST,
        countryList,
      })
    ).toEqual(expetedResult);
  });
});
