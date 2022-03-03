import React from 'react';
import {PersistGate} from 'redux-persist/integration/react';
import Index from './src/Index';
import {Provider} from 'react-redux';
import configureStore from './src/store/configureStore';

const {store, persistor} = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <Index />
      </PersistGate>
    </Provider>
  );
};
export default App;
