import { combineReducers, configureStore } from '@reduxjs/toolkit';
import toolkitSlice from './toolkitSlice';

const rootReducer = combineReducers({
  main: toolkitSlice,
});

export default configureStore({
  reducer: rootReducer,
});
