import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {fetchItems} from '../actions';

class ProductPage extends Component {
  componentDidMount() {
    this.props.fetchItems();
  }

  render() {
    return (
      <main>Product</main>
    );
  }
}

ProductPage.propTypes = {
  fetchItems: PropTypes.func
};

function mapStateToProps(state) {
  return {
    items: state.items
  }
}

export default connect(mapStateToProps, {fetchItems})(ProductPage);
