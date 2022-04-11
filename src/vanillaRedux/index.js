import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import mainReducer from './mainReducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  main: mainReducer,
});

export default createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
