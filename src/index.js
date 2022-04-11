import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import { store } from './vanillaRedux/store';
// import App from './vanillaRedux';
import { store } from './toolkitRedux/store';
import App from './toolkitRedux';


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
