import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import './index.css';

const renderItems = (items) => {
  return items.map(
    (item) => {
      return (
        <div key={item.itemId} className="product-card">
          <div className="product-image">
            <img src={item.thumbnailImage} />
          </div>
          <div className="product-info">
            <h5>{item.name}</h5>
            {item.customerRating && <span><img src={item.customerRatingImage} /></span>}
            <h6>${item.salePrice}</h6>
          </div>
        </div>
      );
    }
  );
};

const Results = ({items}) => {
  return (
    <section className="products">
      {renderItems(items)}
    </section>
  );
}

Results.propTypes = {
  items: PropTypes.array
};

PropTypes.defaultProps = {
    items: []
};

const mapStateToProps = (state) => {
  return {
    items: state.items.payload
  }
};

export default connect(mapStateToProps)(Results);
