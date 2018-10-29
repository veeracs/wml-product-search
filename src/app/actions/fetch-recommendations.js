import { getRecommendations } from '../api';

/* Actions */
export const FETCH_RECOMMENDATIONS_START = 'FETCH_RECOMMENDATIONS_START';
export const FETCH_RECOMMENDATIONS_FAILURE = 'FETCH_RECOMMENDATIONS_FAILURE';
export const FETCH_RECOMMENDATIONS_SUCCESS = 'FETCH_RECOMMENDATIONS_SUCCESS';

/* Action Creators */
const fetchRecommendationsStart = () => ({
  type: FETCH_RECOMMENDATIONS_START
});

const fetchRecommendationsFailure = error => ({
  type: FETCH_RECOMMENDATIONS_FAILURE,
  error
});

const fetchRecommendationsSuccess = payload => ({
  type: FETCH_RECOMMENDATIONS_SUCCESS,
  payload
});

/* Thunk */
export const fetchRecommendations = query => async dispatch => {
  let response;

  try {
    if (query) {
      dispatch(fetchRecommendationsStart());
      response = await getRecommendations(query);
    }
  } catch (error) {
    dispatch(fetchRecommendationsFailure(error));
  }

  if (response.statusText === 'OK') {
    console.log(query);
    console.log(response.data);
    dispatch(fetchRecommendationsSuccess(response.data));
  } else {
    const error = new Error('Invalid API response');

    dispatch(fetchRecommendationsFailure(error));
  }
};
