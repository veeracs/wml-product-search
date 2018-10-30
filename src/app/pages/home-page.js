import React from 'react';
import { connect } from 'react-redux';
import Results from '../containers/results';
import PropTypes from 'prop-types';

const HomePage = ({ items }) => (
  <main>
    <Results items={items} />
  </main>
);

HomePage.propTypes = {
  items: PropTypes.array
};

HomePage.defaultProps = {
  items: []
};

const mapStateToProps = state => {
  return {
    items: state.items.payload
  };
};

export default connect(mapStateToProps)(HomePage);
