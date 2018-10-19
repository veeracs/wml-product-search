import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './index.css';

const Product = ({id, info}) => {
  return (
    <section className="grid-container">
      <div className="grid-item-1">
        Product {id}
      </div>
      <div className="grid-item-2">
        Product Info
      </div>
    </section>
  );
};

Product.propTypes = {
  id: PropTypes.string.isRequired,
  info: PropTypes.object.isRequired
}

export default Product;
