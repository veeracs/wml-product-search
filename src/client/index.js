/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {renderRoutes} from 'react-router-config';
import Routes from './routes';

import 'sanitize.css/sanitize.css';

const App = () => {
  return (
    <BrowserRouter>
      <div>{renderRoutes(Routes)}</div>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.querySelector('#app'));

module.hot.accept();
