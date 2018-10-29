import {FETCH_RECOMMENDATIONS_START, FETCH_RECOMMENDATIONS_SUCCESS, FETCH_RECOMMENDATIONS_FAILURE} from '../actions';

const defaultState = {
  payload: [],
  error: {},
  isLoading: false,
  isSuccess: false,
  isError: false
};

export default (state = defaultState, action) => {
  switch(action.type) {
    case FETCH_RECOMMENDATIONS_START:
      return {
        ...state,
        isLoading: true,
        isError: false,
        isSuccess: false
      };

    case FETCH_RECOMMENDATIONS_SUCCESS:
      return {
        ...state,
        payload: action.payload,
        isLoading: false,
        isError: false,
        isSuccess: true
      }

    case FETCH_RECOMMENDATIONS_FAILURE:
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
