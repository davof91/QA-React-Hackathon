import React from 'react';
import { create } from 'react-test-renderer';
import Footer from '../Components/Nav/Footer';
test('footer matches snapshot', () => {
  const footer = create(<Footer />);
  expect(footer.toJSON()).toMatchSnapshot();
}); 