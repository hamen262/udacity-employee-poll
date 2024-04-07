import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import reducer from "../reducers";
import middleware from "../middleware";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer,
  middleware: () => [...middleware],
});

test("renders login page", () => {
  const { asFragment } = render(
  
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
  );

  expect(asFragment()).toMatchSnapshot();
});
