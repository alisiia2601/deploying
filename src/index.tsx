import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from "redux";
import { Provider } from "react-redux"; // import the Provider component
import { Action } from 'redux';

interface AddCashAction extends Action {
  type: 'ADD_CASH';
  payload: number;
}

interface GetCashAction extends Action {
  type: 'GET_CASH';
  payload: number;
}


type ActionTypes = AddCashAction | GetCashAction;


const defaultState = {
  cash: 0,
};

const reducer = (state = defaultState, action: ActionTypes) => {
  switch (action.type) {
    case "ADD_CASH":
      return { ...state, cash: state.cash + action.payload };
    case "GET_CASH":
      return { ...state, cash: state.cash - action.payload };
    default:
      return state;
  }
};

const store = createStore(reducer);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}> {/* wrap the App component with the Provider */}
      <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
