import {
  SET_LOCAL,
  SET_THEME,
  SET_POPUP,
  SET_LOADING,
  GET_COUNTRY_LIST,
  SET_COUNTRY_LIST,
} from '@containers/App/constants';

import {
  setLocale,
  setTheme,
  showPopup,
  hidePopup,
  setLoading,
  getCountryList,
  setCountryList,
} from '@containers/App/actions';

describe('AppActions', () => {
  describe('setLocale', () => {
    it('should return an action with type SET_LOCAL and locale', () => {
      const locale = 'en';
      const action = setLocale(locale);
      expect(action).toEqual({ type: SET_LOCAL, locale });
    });
  });

  describe('setTheme', () => {
    it('should return an action with type SET_THEME and theme', () => {
      const theme = 'dark';
      const action = setTheme(theme);
      expect(action).toEqual({ type: SET_THEME, theme });
    });
  });

  describe('showPopup', () => {
    it('should return an action with type SET_POPUP and popup', () => {
      const title = 'title';
      const message = 'message';
      const action = showPopup(title, message);
      expect(action).toEqual({ type: SET_POPUP, popup: { open: true, title, message } });
    });
    it('should return an action with default title and message', () => {
      const action = showPopup();
      expect(action).toEqual({ type: SET_POPUP, popup: { open: true, title: '', message: '' } });
    });
  });

  describe('hidePopup', () => {
    it('should return an action wwith type SET_POPUP', () => {
      const action = hidePopup();
      expect(action).toEqual({ type: SET_POPUP, popup: { open: false, title: '', message: '' } });
    });
  });

  describe('setLoading', () => {
    it('should return an action with type SET_LOADING and loading', () => {
      const loading = true;
      const action = setLoading(loading);
      expect(action).toEqual({ type: SET_LOADING, loading });
    });
  });

  describe('getCountryList', () => {
    it('should return an action with type GET_COUNTRY_LIST', () => {
      const action = getCountryList();
      expect(action).toEqual({ type: GET_COUNTRY_LIST });
    });
  });

  describe('setCountryList', () => {
    it('should return an action with type SET_COUNTRY_LIST and countryList', () => {
      const countryList = [];
      const action = setCountryList(countryList);
      expect(action).toEqual({ type: SET_COUNTRY_LIST, countryList });
    });
  });
});
