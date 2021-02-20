import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import {Provider} from 'react-redux';
import reducers from './reducers/index'
import './form.css';
import './post.css';
import './view.css';
 import { createStore, applyMiddleware, compose } from 'redux';
 import reduxThunk from 'redux-thunk';
 const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
 const store=createStore(reducers,
     composeEnhancers(applyMiddleware(reduxThunk)));
ReactDOM.render(
<Provider store={store}>
<App />
</Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
