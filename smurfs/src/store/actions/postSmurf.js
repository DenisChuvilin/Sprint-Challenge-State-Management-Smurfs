import axios from "axios"

export const POST_SMURF_START = 'POST_SMURF_START'
export const POST_SMURF_SUCCESS = 'POST_SMURF_SUCCESS'
export const POST_SMURF_FAIL = 'POST_SMURF_FAIL'

export const postSmurf = () => dispatch => {
    dispatch({type: 'POST_SMURF_START'})
axios 
.post('http://localhost:3333/smurfs')
    dispatch({type: 'POST_SMURF_SUCCESS'})

    dispatch({type: 'POST_SMURF_FAIL'})
}