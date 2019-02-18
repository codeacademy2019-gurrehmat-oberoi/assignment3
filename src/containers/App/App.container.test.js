import renderer from 'react-test-renderer';
import React from 'react';
import App from './App.container';

describe('App', () => {
  it('should render an App', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
