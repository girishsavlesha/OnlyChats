import React from 'react';
import 'react-native-devsettings';
import AppNavigator from './navigators/AppNavigator';
import {Provider} from 'react-redux';
import {persistor, store} from './store/store';
import {PersistGate} from 'redux-persist/integration/react';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <AppNavigator />
      </PersistGate>
    </Provider>
  );
}

export default App;
