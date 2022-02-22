import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import FrontPage from "./views/FrontPage";
import Detail from "./views/Detail"
import Counter from "./views/Counter"

import store from './app/store'
import { Provider } from 'react-redux'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="postlist" element={<FrontPage />} />
          <Route path="detail" element={<Detail />} />
          <Route path="counter" element={<Counter />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
