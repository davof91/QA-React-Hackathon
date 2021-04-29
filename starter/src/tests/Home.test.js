import React from 'react';
import { create } from 'react-test-renderer';
import Home from '../Components/Home/Home';
test('home matches snapshot', () => {
  const home = create(<Home />);
  expect(home.toJSON()).toMatchSnapshot();
}); 