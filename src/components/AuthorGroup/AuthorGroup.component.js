import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Book from '../Book/Book.component';
import './AuthorGroup.css';

class AuthorGroup extends Component {
  render() {
    const { booksArray, author } = this.props;
    const books = booksArray.map((book, index) => (
      <Book bookData={book} key={index} />
    ));
    return (
      <div className="authorGroup">
        <div className="author">{author}</div>
        <div className="books">
          {books}
        </div>
      </div>
    );
  }
}

AuthorGroup.defaultProps = {
  booksArray: [
    {
      title: 'Harry Potter and The Sorcerers Stone',
      rating: 4.5,
    },
    {
      title: 'Harry Potter and The Sorcerers Stone',
      rating: 4.5,
    },
    {
      title: 'Harry Potter and The Sorcerers Stone',
      rating: 4.5,
    },
  ],
  author: 'JK Rowling',
};

AuthorGroup.propTypes = {
  booksArray: PropTypes.array,
  author: PropTypes.string,
};

export default AuthorGroup;
