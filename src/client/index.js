/* eslint-disable */
/* External Dependencies */
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {renderRoutes} from 'react-router-config';
import {applyMiddleware, createStore, compose} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';

/* Internal Dependencies */
import Routes from './routes';
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

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>{renderRoutes(Routes)}</div>
      </BrowserRouter>
    </Provider>
  );
}

ReactDOM.render(<App />, document.querySelector('#app'));

module.hot.accept();
