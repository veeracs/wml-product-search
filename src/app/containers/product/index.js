import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './index.css';

const Product = ({ id, info }) => {
  return (
    <section className="grid-container">
      <div className="grid-item-1">
        <section>
          <img src={info.largeImage} alt="product image" />
        </section>
      </div>
      <div className="grid-item-2">
        <h1>{info.name}</h1>
        <span>${info.salePrice}</span>
        <article dangerouslySetInnerHTML={{ __html: info.shortDescription }} />
      </div>
    </section>
  );
};

Product.propTypes = {
  id: PropTypes.string.isRequired,
  info: PropTypes.object.isRequired
};

export default Product;
