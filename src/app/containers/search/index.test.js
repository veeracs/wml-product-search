import React from 'react';
import {shallow} from 'enzyme';

import {Search} from './';

describe('Search', () => {
  test('rendering', () => {
    const wrapper = shallow(<Search handleSubmit={() => {}}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
