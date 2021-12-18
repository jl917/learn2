import React from "react";
import { render } from "react-dom";
import Header from "./header";

const App = () => (
  <div>
    <Header />
  </div>
);

render(<App />, document.getElementById("app"));
