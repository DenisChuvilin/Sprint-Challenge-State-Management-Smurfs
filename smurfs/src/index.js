import React from 'react';
import ReactDOM from 'react-dom';
//redux dependencies
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import {smurfReducer} from './store/reducers/smurfReducer';
import logger from 'redux-logger';

import './index.css';
import App from './App';

// redux setup
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(smurfReducer, composeEnhancers(applyMiddleware(thunk, logger)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
