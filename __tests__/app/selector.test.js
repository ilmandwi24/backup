import { initialState } from '@containers/App/reducer';

import { selectLocale, selectTheme, selectPopup, selectLoading, selectCountryList } from '@containers/App/selectors';

describe('AppSelector', () => {
  describe('selectLocale', () => {
    it('should return the locale', () => {
      const result = selectLocale(initialState);
      expect(result).toEqual(initialState.locale);
    });
  });

  describe('selectTheme', () => {
    it('should return the theme', () => {
      const result = selectTheme(initialState);
      expect(result).toEqual(initialState.theme);
    });
  });

  describe('selectPopup', () => {
    it('should return the popup', () => {
      const result = selectPopup(initialState);
      expect(result).toEqual(initialState.popup);
    });
  });

  describe('selectLoading', () => {
    it('should return the loading', () => {
      const result = selectLoading(initialState);
      expect(result).toEqual(initialState.loading);
    });
  });

  describe('selectCountryList', () => {
    it('should return the countryList', () => {
      const result = selectCountryList(initialState);
      expect(result).toEqual(initialState.countryList);
    });
  });
});
