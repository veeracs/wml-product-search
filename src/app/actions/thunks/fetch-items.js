import {getItems} from '../../api';

/* Actions */
export const FETCH_ITEMS_START = 'FETCH_ITEMS_START';
export const FETCH_ITEMS_FAILURE = 'FETCH_ITEMS_FAILURE';
export const FETCH_ITEMS_SUCCESS = 'FETCH_ITEMS_SUCCESS';

/* Action Creators */
const fetchItemsStart = () => ({
  type: FETCH_ITEMS_START
});

const fetchItemsFailure = (error) => ({
  type: FETCH_ITEMS_FAILURE,
  error
});

const fetchItemsSuccess = (payload) => ({
  type: FETCH_ITEMS_SUCCESS,
  payload
});

/* Thunk */
export const fetchItems = () => async (dispatch) => {
  dispatch(fetchItemsStart());

  let response;

  try {
    response = await getItems();
  } catch(error) {
    dispatch(fetchItemsFailure(error));
  }

  if (response.statusText === 'OK') {
    dispatch(fetchItemsSuccess(response.data));
  } else {
    const error = new Error('Invalid API response');

    dispatch(fetchItemsFailure(error));
  }
}
