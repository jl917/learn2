import * as React from "react";
import { render } from "react-dom";
import { App } from './component/App';
import './common/style.styl';
render(React.createElement(App, null), document.getElementById("app"));
