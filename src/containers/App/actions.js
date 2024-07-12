import {
  SET_LOCAL,
  SET_THEME,
  SET_POPUP,
  SET_LOADING,
  GET_COUNTRY_LIST,
  SET_COUNTRY_LIST,
  SET_STEPNEXT,
  SET_STEPBACK,
} from '@containers/App/constants';

export const setLocale = (locale) => ({
  type: SET_LOCAL,
  locale,
});

export const setTheme = (theme) => ({
  type: SET_THEME,
  theme,
});

export const showPopup = (title = '', message = '') => ({
  type: SET_POPUP,
  popup: {
    open: true,
    title,
    message,
  },
});

export const hidePopup = () => ({
  type: SET_POPUP,
  popup: {
    open: false,
    title: '',
    message: '',
  },
});

export const setLoading = (loading) => ({
  type: SET_LOADING,
  loading,
});

export const getCountryList = (callbackSuccess, callbackFailed) => ({
  type: GET_COUNTRY_LIST,
  callbackSuccess,
  callbackFailed,
});

export const setCountryList = (countryList) => ({
  type: SET_COUNTRY_LIST,
  countryList,
});
export const setStepNext = () => ({
  type: SET_STEPNEXT,
});

export const setStepBack = () => ({
  type: SET_STEPBACK,
});
