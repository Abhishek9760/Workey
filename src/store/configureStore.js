import {createStore, combineReducers, applyMiddleware} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {workerListReducer} from '../reducers/workerListReducer';
import {workerReducer} from '../reducers/workerReducer';
import {authReducer} from '../reducers/authReducer';
// import {roomDetailReducer} from '../reducers/roomDetailReducer';

const rootReducer = combineReducers({
  workers: workerListReducer,
  currentWorker: workerReducer,
  auth: authReducer,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: [],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default () => {
  let store = createStore(persistedReducer, applyMiddleware(thunk));
  let persistor = persistStore(store);
  return {store, persistor};
};
