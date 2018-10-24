import React from 'react';
import {shallow} from 'enzyme';

import {Search} from './';

describe('Search', () => {
  test('rendering', () => {
    const wrapper = shallow(<Search />);
    expect(wrapper).toMatchSnapshot();
  });
});
