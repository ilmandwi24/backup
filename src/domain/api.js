import { merge } from 'lodash';

import request from '@utils/request';

const urls = {
  countryGetAllKist: 'https://restcountries.com/v3.1/all',
};

export const callAPI = async (endpoint, method, header = {}, params = {}, data = {}) => {
  const defaultHeader = {
    'Content-Type': 'application/json; charset=UTF-8',
  };

  const headers = merge(defaultHeader, header);
  const options = {
    baseURL: endpoint,
    url: endpoint,
    method,
    headers,
    data,
    params,
  };

  return request(options).then((response) => {
    const responseAPI = response.data;
    return responseAPI;
  });
};

export const getCountryList = () => callAPI(urls.countryGetAllKist, 'get', {}, {});
