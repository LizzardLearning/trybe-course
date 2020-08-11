import {
  REQUEST_IMAGE,
  GET_IMAGE,
  REQUEST_FAILED,
} from '../actions/index';

const INITIAL_STATE = {
  isLoading: false,
  imagePath: '',
  error: '',
}

export const reducer = (state = INITIAL_STATE, action) => {
  switch(action.type){
    case REQUEST_IMAGE:
      return { ...state, isLoading: true };

    case REQUEST_FAILED:
      return { ...state, isLoading: false, error: action.payload };
      
    case GET_IMAGE:
      return { ...state, isLoading: false, imagePath: action.payload };
      
    default:
      return state;
  }
}
