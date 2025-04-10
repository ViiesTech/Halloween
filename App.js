import React from 'react';
import {Routes} from './src/routes/routes';
import {Provider} from 'react-redux';
import {persistor, store} from './src/redux/Store';
import Toast from 'react-native-toast-message';
import {PersistGate} from 'redux-persist/integration/react';

const App = () => {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Routes />
          <Toast />
        </PersistGate>
      </Provider>
    </>
  );
};

export default App;
