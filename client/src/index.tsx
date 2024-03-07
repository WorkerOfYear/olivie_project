import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import App from "App";
import { store } from "store/store";

import "static/styles/index.css";
import "static/styles/reset.css";
import "react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
