import { FETCH_DATA } from '../actions';

const axios = require('axios');

const books = async (state = {}, action) => {
  let externalDataPromise;
  let result;
  switch (action.type) {
    case FETCH_DATA:
      externalDataPromise = axios.get(action.payload.url);
      result = await externalDataPromise;
      return result.data;
    default:
      return state;
  }
};

export default books;
