import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {fetchProduct} from '../actions';
import {fetchRecommendations} from '../actions';

import Product from '../containers/product';
import Results from '../containers/results';

class ProductPage extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchProduct(this.props.match.params.id);
    this.props.fetchRecommendations(this.props.match.params.id);
  }

  render() {
    return (
      <main>
        <Product
            info={this.props.productInfo}
            id={this.props.match.params.id}
          />
      </main>
    );
  }
}

ProductPage.propTypes = {
  productInfo: PropTypes.object,
  match: PropTypes.object,
  fetchProduct: PropTypes.func,
  fetchRecommendations: PropTypes.func
};

function mapStateToProps(state) {
  return {
    productInfo: state.product.payload
  }
}

export default connect(mapStateToProps, {fetchProduct, fetchRecommendations})(ProductPage);
