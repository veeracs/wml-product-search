import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from '../app/pages/home-page';
import ProductPage from '../app/pages/product-page';
import NotFoundPage from '../app/pages/not-found-page';

import Header from '../app/containers/header';
import Footer from '../app/containers/footer';

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/product/:id" component={ProductPage} />
        <Route path="" component={NotFoundPage} />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
