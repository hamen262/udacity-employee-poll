import React from "react";
import { render,getByTestId,fireEvent ,waitFor, queryByTestId } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import reducer from "../reducers";
import middleware from "../middleware";
import { configureStore } from "@reduxjs/toolkit";
import Login from "./Login";
import { Fragment } from "react";


jest.mock('antd', () => {
    const antd = jest.requireActual('antd');
    return {
      ...antd
    };
  });

  

const store = configureStore({
  reducer,
  middleware: () => [...middleware],
});
describe('store', () => {
  test("should render login page correctly", () => {
    var component  = render(
    
        <Provider store={store}>
          <Router>
          <Fragment>
            <Login />
        </Fragment>
            </Router>
          </Provider>
    );
  
  
    expect(component.getByTestId('username')).toBeInTheDocument();
    expect(component.getByTestId('password')).toBeInTheDocument();
    expect(component.getByTestId('submit')).toBeInTheDocument();
  });

  test("should return error message when login fail", async () => {
    var component  = render(
    
        <Provider store={store}>
          <Router>
          <Fragment>
            <Login />
        </Fragment>
            </Router>
          </Provider>
    );
  
    var username = component.getByTestId('username');
        fireEvent.change(username.querySelector('input'), { target: { value: 'sarahedo' } });
        var password = component.getByTestId('password');
        fireEvent.change(password.querySelector('input'), { target: { value: '12' } });
        var submitButton = component.getByTestId('submit');
        var submitButton = component.getByTestId('submit');
        fireEvent.click(submitButton); // Just pass the submitButton itself
        await waitFor(() => {
          expect(component.getByTestId('error')).toHaveTextContent("Login fail! Please check your username and password!");
        })
  });

  test("should login successfully", async () => {
    var component  = render(
    
        <Provider store={store}>
          <Router>
          <Fragment>
            <Login />
        </Fragment>
            </Router>
          </Provider>
    );
  
    var username = component.getByTestId('username');
        fireEvent.change(username.querySelector('input'), { target: { value: 'sarahedo' } });
        var password = component.getByTestId('password');
        fireEvent.change(password.querySelector('input'), { target: { value: '12' } });
        var submitButton = component.getByTestId('submit');
        var submitButton = component.getByTestId('submit');
        fireEvent.click(submitButton); // Just pass the submitButton itself
        await waitFor(() => {
          expect(component.queryByTestId('error')).not.toBeInTheDocument();
        })
  });

})

