import React from 'react';
import { shallow } from 'enzyme';

import { HomePage } from './home-page';

describe('HomePage', () => {
  test('rendering', () => {
    const wrapper = shallow(<HomePage />);
    expect(wrapper).toMatchSnapshot();
  });
});
