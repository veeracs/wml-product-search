import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {fetchItems} from '../actions';

class Products extends Component {
  componentDidMount() {
    this.props.fetchItems();
  }

  render() {
    return (
      <div>Products</div>
    );
  }
}

Products.propTypes = {
  fetchItems: PropTypes.func
};

function mapStateToProps(state) {
  return {
    items: state.items
  }
}

export default {
  component: connect(mapStateToProps, {fetchItems})(Products)
};
