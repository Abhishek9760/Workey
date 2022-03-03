import {FETCH_WORKERS_LIST} from '../constants';
// import {lightTheme, darkTheme} from '../Theme';

const initialState = {
  workerList: [],
  loading: false,
};

export const workerListReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_WORKERS_LIST:
      return {...state, workerList: action.payload};
    default:
      return state;
  }
};
