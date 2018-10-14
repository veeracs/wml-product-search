import React from 'react';
import ReactDOM from 'react-dom';

const App = () => (
  <div className="home">
    <h1>Minimal setup - React, Babel, Webpack</h1>
  </div>
);

const title = 'Minimal setup - React, Babel, Webpack';

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
