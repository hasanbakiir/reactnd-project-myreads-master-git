import React from 'react';
import PropTypes from 'prop-types';
import MyShelfChanger from './MyShelfChanger';
import noCover from '../images/browser.png';

const Book = props => {
  const { book, books, changeMyShelf } = props;

 
  const coverImg =
    book.imageLinks && book.imageLinks.thumbnail
      ? book.imageLinks.thumbnail
      : noCover;
  const title = book.title ? book.title : 'No title available';

  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{ backgroundImage: `url(${coverImg})` }}
          />
          <MyShelfChanger book={book} books={books} changeMyShelf={changeMyShelf} />
        </div>
        <div className="book-title">{title}</div>
        {
        book.authors &&
          book.authors.map((author, index) => (
            <div className="book-authors" key={index}>
              {author}
            </div>
          ))}
      </div>
    </li>
  );
};

Book.propTypes = {
  book: PropTypes.object.isRequired,
  books: PropTypes.array.isRequired,
  changeMyShelf: PropTypes.func.isRequired
};

export default Book;
