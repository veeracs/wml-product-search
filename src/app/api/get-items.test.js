import { getItems } from './get-items';
import mockAxios from 'axios-mock-adapter';
import axios from 'axios';

describe('API Calls', () => {
  let mock;
  let response;
  beforeEach(() => {
    response = {
      query: 'ipod'
    };
    mock = new mockAxios(axios);
    mock.onGet('http://localhost:3000/search/iPod').reply(200, response);
  });

  afterEach(() => {
    mock.reset();
  });

  it(' Should get products', async () => {
    const response = await getItems('iPod');
    expect(response.data).toEqual({
      query: 'ipod'
    });
  });
});
