import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./css/tailwind.css"
import App from "./App";
import { Provider } from 'react-redux';
import {BrowserRouter} from "react-router-dom";
import { PersistGate } from 'redux-persist/integration/react'
import reduxStore from './redux'
const { store, persistor } = reduxStore()
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
     <Provider store={store} >
      <PersistGate loading={null} persistor={persistor} >
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
