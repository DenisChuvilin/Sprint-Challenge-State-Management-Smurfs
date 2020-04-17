import axios from 'axios';

export const POST_SMURF_START = 'POST_SMURF_START';
export const POST_SMURF_SUCCESS = 'POST_SMURF_SUCCESS';
export const POST_SMURF_FAIL = 'POST_SMURF_FAIL';

export const postSmurf = (formState) => (dispatch) => {
  dispatch({ type: 'POST_SMURF_START' });
  axios.post('http://localhost:3333/smurfs', formState)
  .then( res => dispatch({ type: 'POST_SMURF_SUCCESS', payload: formState }))
  
  .catch((err) => {
    dispatch({
      type: 'POST_SMURF_FAIL',
      payload: `Could not post smurf ${err.response.data.status} ${err.response.data.error}`,
    });
  });
};
