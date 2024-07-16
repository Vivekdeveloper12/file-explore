// src/store/index.js
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import fileReducer from './reducers/fileReducer';

const rootReducer = combineReducers({
  fileSystem: fileReducer
});

const store = createStore(rootReducer);

export default store;
