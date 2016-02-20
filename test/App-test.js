import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';

import styles from '../src/App.css'
import { App, Counter } from '../src/App.js';

test('render 2 counters component', t => {
  const wrapper = shallow(React.createElement(App));
  t.is(wrapper.find('.' + styles.container).length, 1);
});