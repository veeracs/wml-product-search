import {getProduct} from '../api';

/* Actions */
export const FETCH_PRODUCT_START = 'FETCH_PRODUCT_START';
export const FETCH_PRODUCT_FAILURE = 'FETCH_PRODUCT_FAILURE';
export const FETCH_PRODUCT_SUCCESS = 'FETCH_PRODUCT_SUCCESS';

/* Action Creators */
const fetchProductStart = () => ({
  type: FETCH_PRODUCT_START
});

const fetchProductFailure = (error) => ({
  type: FETCH_PRODUCT_FAILURE,
  error
});

const fetchProductSuccess = (payload) => ({
  type: FETCH_PRODUCT_SUCCESS,
  payload
});

/* Thunk */
export const fetchProduct = (query) => async (dispatch) => {
  let response;

  try {
    if (query) {
      dispatch(fetchProductStart());
      response = await getProduct(query);
    }
  } catch(error) {
    dispatch(fetchProductFailure(error));
  }

  if (response.statusText === 'OK') {
    dispatch(fetchProductSuccess(response.data));
  } else {
    const error = new Error('Invalid API response');

    dispatch(fetchProductFailure(error));
  }
}
