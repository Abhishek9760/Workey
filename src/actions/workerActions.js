import axios from '../api';
import {FETCH_WORKERS_LIST, FETCH_WORKER} from '../constants';

export const getWorkerList = () => async dispatch => {
  // let data = {
  //   name: 'Ram Lali',
  //   age: 13,
  //   location: 'Noida Sector 42',
  //   expertise: 'Carpenter, Painter, Piano',
  //   experience: 3,
  //   profileImg:
  //     'https://images.unsplash.com/photo-1561948955-570b270e7c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2F0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
  // };
  const response = await axios.get('labours/');
  const data = response.data;
  let newData = [];
  for (const [k, v] of Object.entries(data)) {
    v['id'] = k;
    newData.push(v);
  }
  dispatch({type: FETCH_WORKERS_LIST, payload: newData});
};

export const getCurrentWorker = id => async dispatch => {
  const response = await axios.get('/workers.json');
  const data = response.data;
  dispatch({type: FETCH_WORKER, payload: data[id]});
};
