import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchProduct } from '../actions';
import { fetchRecommendations } from '../actions';

import Product from '../containers/product';
import Results from '../containers/results';

class ProductPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static getDerivedStateFromProps = (nextProps, prevState) => {
    if (prevState.productId !== nextProps.productId) {
      return {
        productId: nextProps.match.params.id
      };
    }
    return;
  };

  componentDidUpdate(prevProps) {
    if (this.state.productId !== prevProps.match.params.id) {
      prevProps.handleFetchProduct(this.state.productId);
    }
  }

  componentDidMount() {
    this.setState({
      productId: this.props.match.params.id
    });
    this.props.handleFetchProduct(this.props.match.params.id);
    this.props.handleFetchRecommendations(this.props.match.params.id);
  }

  render() {
    return (
      <main>
        <Product info={this.props.productInfo} id={this.state.productId} />
        <hr />
        <h2>Recommendations</h2>
        <Results items={this.props.items} />
      </main>
    );
  }
}

ProductPage.propTypes = {
  productInfo: PropTypes.object,
  items: PropTypes.array,
  match: PropTypes.object,
  handleFetchProduct: PropTypes.func,
  handleFetchRecommendations: PropTypes.func
};

function mapStateToProps(state) {
  return {
    productInfo: state.product.payload,
    items: state.recommendations.payload
  };
}

function mapDispatchToProps(dispatch) {
  return {
    handleFetchProduct: id => {
      dispatch(fetchProduct(id));
    },
    handleFetchRecommendations: id => {
      dispatch(fetchRecommendations(id));
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductPage);
