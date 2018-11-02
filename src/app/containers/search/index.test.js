import React from 'react';
import { shallow } from 'enzyme';
import { expect as chaiExpect } from 'chai';

import { Search } from './';

import SearchIcon from 'svg-react-loader?name=SearchIcon!./search.svg';

describe('Search', () => {
  test('smoke test rendering', () => {
    const wrapper = shallow(<Search handleSubmit={() => {}} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('Should render search icon', () => {
    const wrapper = shallow(<Search handleSubmit={() => {}} />);
    chaiExpect(wrapper).to.contain(<SearchIcon />);
  });

  test('Should render search icon button', () => {
    const wrapper = shallow(<Search handleSubmit={() => {}} />);
    chaiExpect(wrapper.find('button')).to.have.className('search-icon');
  });
});
