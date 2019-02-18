/**
 * @jest-environment node
 */

import Axios from 'axios';
import books from './books.reducer';
import { fetchDataAction } from '../actions';

describe('books reducer', () => {
  it('should fetch books from external API and return as state if action passed is FETCH_DATA', async () => {
    const expectedResponse = await Axios.get(fetchDataAction().payload.url);
    expect(await books(null, fetchDataAction()))
      .toEqual(expectedResponse.data);
  });
});
