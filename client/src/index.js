import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import "alertifyjs/build/css/alertify.min.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { reducer } from "./components/redux/reducers";
import { createStore } from "redux";
import { Provider } from "react-redux"; 

 
const store = createStore(reducer)

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
      <App />
      </Provider>
    </Router>
  </React.StrictMode>,
  rootElement
);
