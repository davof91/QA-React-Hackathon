import React from 'react';
import { create } from 'react-test-renderer';
import Header from '../Components/Nav/Header';

test('Header matches snapshot', () => {
    const header = create(<Header submitPage={() => {return "Home"}}/>);
    expect(header.toJSON()).toMatchSnapshot();
  });