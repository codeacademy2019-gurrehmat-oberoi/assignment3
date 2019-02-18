import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Book.css';

const imagePath = require('../../media/cover_image.jpeg');
const heartIcon = require('../../media/Icons/heart-red.svg');

class Book extends Component {
  render() {
    const { bookData } = this.props;
    return (
      <div className="book">
        <img src={imagePath} alt="Book cover" className="bookCover" />
        <div className="bookTitle">
          {bookData.title}
        </div>
        <div className="bookAppreciation">
          <div className="bookRating">{bookData.rating}</div>
          <div className="bookLikeButton">
            <img src={heartIcon} alt="like book" />
          </div>
        </div>
      </div>
    );
  }
}

Book.defaultProps = {
  bookData: {
    title: 'Harry Potter and The Sorcerers Stone',
    rating: 4.5,
  },
};

Book.propTypes = {
  bookData: PropTypes.object,
};

export default Book;
