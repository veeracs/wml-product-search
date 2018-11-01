import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './index.css';

const renderItems = items => items.map(item => (
  <div key={item.itemId} className="product-card">
    <div className="product-image">
      <Link to={`/product/${item.itemId}`}>
        <img src={item.thumbnailImage} />
      </Link>
    </div>
    <div className="product-info">
      <h5>
        <Link to={`/product/${item.itemId}`}>{item.name}</Link>
      </h5>
      {item.customerRating && (
        <span>
          <img src={item.customerRatingImage} />
        </span>
      )}
      <h6>${item.salePrice}</h6>
    </div>
  </div>
));

const Results = ({ items }) => {
  return <section className="products">{renderItems(items)}</section>;
};

Results.propTypes = {
  items: PropTypes.array
};

PropTypes.defaultProps = {
  items: []
};

export default Results;
