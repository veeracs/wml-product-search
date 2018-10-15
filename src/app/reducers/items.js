import {FETCH_ITEMS_START, FETCH_ITEMS_SUCCESS, FETCH_ITEMS_FAILURE} from '../actions';

const defaultState = {
  payload: [],
  error: {},
  isLoading: false,
  isSuccess: false,
  isError: false
};

export default (state = defaultState, action) => {
  switch(action.type) {
    case FETCH_ITEMS_START:
      return {
        ...state,
        isLoading: true,
        isError: false,
        isSuccess: false
      };

    case FETCH_ITEMS_SUCCESS:
      return {
        ...state,
        payload: action.payload.items,
        isLoading: false,
        isError: false,
        isSuccess: true
      }

    case FETCH_ITEMS_FAILURE:
      return {
        ...state,
        error: action.error,
        isLoading: false,
        isError: true,
        isSuccess: false
      }

    default:
      return state;
  }
}
