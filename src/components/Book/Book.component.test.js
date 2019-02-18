import renderer from 'react-test-renderer';
import React from 'react';
import Book from './Book.component';

describe('Book', () => {
  it('should render a book', () => {
    const tree = renderer.create(<Book />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
