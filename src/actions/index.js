export const FETCH_DATA = 'FETCH_DATA';
export const url = 'http://localhost:8081/books';

export const fetchDataAction = () => ({
  type: FETCH_DATA,
  payload: {
    url,
  },
});
