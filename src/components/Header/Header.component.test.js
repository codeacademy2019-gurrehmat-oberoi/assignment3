import renderer from 'react-test-renderer';
import React from 'react';
import Header from './Header.component';

describe('Header', () => {
  it('should render a header', () => {
    const tree = renderer.create(<Header />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
