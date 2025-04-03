import React, {Suspense} from 'react';
import {Provider} from 'react-redux';
import type {JSX, PropsWithChildren} from 'react';
import MainNavigator from './src/navigation/MainNavigator';
import store, { persistor } from './src/redux/store';
import {PersistGate} from 'redux-persist/integration/react';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <MainNavigator />
      </PersistGate>
    </Provider>
  );
}

export default App;
