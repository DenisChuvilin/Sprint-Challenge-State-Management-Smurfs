import {FETCH_SMURFS_START,FETCH_SMURFS_SUCCESS,FETCH_SMURFS_FAIL, } from "../actions/getSmurf";

import {POST_SMURF_START,POST_SMURF_SUCCESS,POST_SMURF_FAIL} from '../actions/postSmurf'

const initialState = {
    currentVillage: []
    ,
isFetching: false, 
fetchError: '',
isPosting: false,
postError: ''
}


export const smurfReducer = (state = initialState, action) => {
    switch (action.type){
        case FETCH_SMURFS_START:
            return {
                ...state, isFetching:true, fetchError:''
            }
        case  FETCH_SMURFS_SUCCESS:
            return {
          ...state, currentVillage: action.payload,
            }
            case FETCH_SMURFS_FAIL:
                return {
                    ...state,
                    isFetching:false,
                    fetchError:action.payload,
                }
            case POST_SMURF_START:
                return {
                    ...state,
                    isPosting:true,
                    postError: ''
                }
            case POST_SMURF_SUCCESS:
                return {
                    ...state, currentVillage: [...state.currentVillage, action.payload],
                    isPosting:false,
                    postError: ''
                }
      default: return state
    }
}