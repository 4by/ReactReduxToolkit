import { combineReducers, configureStore } from '@reduxjs/toolkit';
import toolkitSlice from './toolkitSlice';

const rootReducer = combineReducers({
  main: toolkitSlice,
});

//это createStore с уже повешенными:
// 1) redux-devtools-extension
// 2) applyMiddleware с некоторыми модулями (например thunk)
export default configureStore({
  reducer: rootReducer,
});
