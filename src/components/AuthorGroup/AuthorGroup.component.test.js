import renderer from 'react-test-renderer';
import React from 'react';
import AuthorGroup from './AuthorGroup.component';

describe('Author Group', () => {
  it('should render an author group', () => {
    const tree = renderer.create(<AuthorGroup />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
