/* eslint-disable */
/* External Dependencies */
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import {applyMiddleware, createStore, compose} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';

/* Internal Dependencies */
import App from '../app';
import rootReducer from '../app/reducers';

/* CSS */
import 'normalize.css/normalize.css';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  /* preloadedState, */
  composeEnhancers(
    applyMiddleware(thunk)
  )
);

const Site = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );
}

ReactDOM.render(<Site />, document.querySelector('#wml-product-search'));

module.hot.accept();
