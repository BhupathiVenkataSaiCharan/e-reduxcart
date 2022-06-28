import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from "react-router-dom";
// import Location from "./Location";
// import App1 from './mycart/App1';
import { Provider } from "react-redux";
// import { createStore } from "redux";
// import cartReducer from "./mycart/reducers/cart-reducer";
import {store} from "./Redux/store";

ReactDOM.render( 
      <>
      <BrowserRouter>
          <Provider store={store}>
        <App/>
      </Provider>
      </BrowserRouter>
      </>,
     document.getElementById("root"));

