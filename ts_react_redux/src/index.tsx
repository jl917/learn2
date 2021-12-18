import * as React from "react";
import * as ReactDOM from "react-dom";
import { createStore } from 'redux'

import { ageReducer } from './redux'
import { Provider } from 'react-redux'
import App from "./App"



const store = createStore(ageReducer)


ReactDOM.render(
  <Provider store={store}>
    <App id="11" age={23} title="redux typescript" />
  </Provider>,
  document.getElementById("app") as HTMLElement
);