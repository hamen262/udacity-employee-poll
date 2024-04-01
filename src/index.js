import React from "react";
import "./assests/index.css"; // Corrected typo in the path
import ReactDOM from 'react-dom/client';
import App from "./components/App";
import { Provider } from "react-redux";
import reportWebVitals from "./reportWebVitals";
import reducer from "./reducers";
import middleware from "./middleware";
import { BrowserRouter as Router } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";

const root = ReactDOM.createRoot(document.getElementById('root'));

const store = configureStore({
  reducer,
  middleware: ()=> [...middleware],
});

root.render(
  <React.StrictMode>
    <Provider store={store} >
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
