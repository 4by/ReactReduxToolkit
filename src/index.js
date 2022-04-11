import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import { store } from './toolkitRedux';
// import App from './toolkitRedux/App';
import { store } from './vanillaRedux';
import App from './vanillaRedux/App';


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
