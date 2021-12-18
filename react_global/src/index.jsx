import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import { Provider, intlReducer } from 'react-redux'

import { getToken } from './page/constant';
import Routers from './routes';

import { scanInfoReducer, prodInfoReducer ,changeLangaugeReducer} from './page/scan/redux';
import './common/common.css';

const locales = localStorage.getItem('locales')

const app = combineReducers({
  scanInfo: scanInfoReducer,
  prodInfo: prodInfoReducer,
  // locales: () => locales ? locales : navigator.language,
  // locales: () => 'zh-CN',
  locales: changeLangaugeReducer,
  testProp: () => 'test props'
});

const store = createStore(
  app,
  applyMiddleware(promiseMiddleware()),
  
);
getToken();
render(
  <Provider store={store}>
    {
      MODE == 'local'
        ? <HashRouter><Routers /></HashRouter>
        : <BrowserRouter><Routers /></BrowserRouter>
    }
  </Provider>,
  document.getElementById('app'),
);

