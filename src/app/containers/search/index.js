import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {fetchItems} from '../../actions';

import SearchIcon from 'svg-react-loader?name=SearchIcon!./search.svg';
import './index.css';

export class Search extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <input aria-label="Search" className="search-input" type="search" name="query" autoComplete="off" />
        <button className="search-icon" value="Search.."><SearchIcon /></button>
      </form>
    );
  }
}

Search.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  items: PropTypes.array
};

Search.defaultProps = {
  items: []
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleSubmit: (event) => {
      event.preventDefault();
      const formData = new FormData(event.target);
      dispatch(
        fetchItems(formData.get('query'))
      );
    }
  };
};

const mapStateToProps = (state) => {
  return {
    items: state.items.payload
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
