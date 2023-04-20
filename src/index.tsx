import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createContext } from "react";

import App from "./app";
import UserStore from "./store-mobx/UserStore";
import store from "./redux/store/index";

import "./scss/app.scss";

export const Context = createContext(null);

ReactDOM.render(
  <React.StrictMode>
    <Context.Provider value={{ user: new UserStore() }}>
      <Provider store={store}>
        <App />
      </Provider>
    </Context.Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
