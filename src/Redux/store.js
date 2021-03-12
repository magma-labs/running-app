import { Plugins } from '@capacitor/core';
import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import ReduxThunk from 'redux-thunk';
import rootReducer from './reducers/index';
import storage from 'redux-persist/lib/storage'

// const { Storage } = Plugins;

const persistConfig = {
  key: 'root',
  storage:  storage,
  whitelist: [
    'loginReducer',
  ],
  blacklist: [ 'BookReducer'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default () => {
  let store = createStore(persistedReducer,{}, applyMiddleware(ReduxThunk));
  let persistor = persistStore(store);

  return {
    store,
    persistor,
  };
}
