import { produce } from 'immer';

import {
  SET_LOCAL,
  SET_THEME,
  SET_POPUP,
  SET_LOADING,
  SET_COUNTRY_LIST,
  SET_YEARLY_SELECT_PLAN,
  SET_STEPNEXT,
  SET_STEPBACK,
  SET_STEP,
} from '@containers/App/constants';

export const initialState = {
  locale: 'en',
  theme: 'dark',
  popup: {
    open: false,
    title: '',
    message: '',
  },
  loading: false,
  countryList: [],
  selectPlan: {
    paket: 0,
    tahunan: false,
  },
  step: 1,
};

export const storedKey = ['locale', 'theme'];

const appReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case SET_LOCAL:
        draft.locale = action.locale;
        break;
      case SET_THEME:
        draft.theme = action.theme;
        break;
      case SET_POPUP:
        draft.popup = action.popup;
        break;
      case SET_LOADING:
        draft.loading = action.loading;
        break;
      case SET_COUNTRY_LIST:
        draft.countryList = action.countryList;
        break;
      case SET_YEARLY_SELECT_PLAN:
        draft.selectPlan = { ...draft.selectPlan, tahunan: !action.yearly };
        break;
      case SET_STEPNEXT:
        draft.step += 1;
        break;
      case SET_STEPBACK:
        draft.step -= 1;
        break;
      case SET_STEP:
        draft.step = action.step;
        break;
    }
  });

export default appReducer;
