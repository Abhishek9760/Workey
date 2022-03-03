import {FETCH_WORKER} from '../constants';

const initialState = {
  details: {},
};

export const workerReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_WORKER:
      return {...state, details: action.payload};
    default:
      return state;
  }
};
