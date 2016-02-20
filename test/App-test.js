import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';

import { App, Counter } from '../src/App.js';

test('render 2 counters component', t => {
  const wrapper = shallow(React.createElement(App));
  t.is(wrapper.find(Counter).length, 2);
});