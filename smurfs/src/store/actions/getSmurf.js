import axios from 'axios';

export const FETCH_SMURFS_START = 'FETCH_SMURFS_START';

export const FETCH_SMURFS_SUCCESS = 'FETCH_SMURFS_SUCCESS';

export const FETCH_SMURFS_FAIL = 'FETCH_SMURFS_FAIL';

export const getSmurf = () => (dispatch) => {
  //get smurfs api
  dispatch({ type:FETCH_SMURFS_START });
  axios
    .get('http://localhost:3333/smurfs')

    .then((res) => {
      console.log(res);

      dispatch({ type: FETCH_SMURFS_SUCCESS, payload: res.data });
    })

    .catch((err) => {
      console.log(err.response);
      dispatch({ type: FETCH_SMURFS_FAIL, payload: `Could not get smurfs: ${err.response.data.status}: ${err.response.data.error}` });
    });

    
};
