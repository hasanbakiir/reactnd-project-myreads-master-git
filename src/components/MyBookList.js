import React from 'react';
import PropTypes from 'prop-types';
import MyBookShelf from './MyBookShelf';

const MyBookList = props => {
  const { books, changeMyShelf } = props;
  const shelfTypes = [
    { type: 'currentlyReading', title: 'Currently Reading' },
    { type: 'wantToRead', title: 'Want to Read' },
    { type: 'read', title: 'Read' }
  ];

  return (
    <div className="list-books-content">
      {shelfTypes.map((shelf, index) => {
        const shelfBooks = books.filter(book => book.shelf === shelf.type);
        return (
          <div className="MyBookShelf" key={index}>
            <h2 className="MyBookShelf-title">{shelf.title}</h2>
            <div className="MyBookShelf-books">
              <MyBookShelf books={shelfBooks} changeMyShelf={changeMyShelf} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

MyBookList.propTypes = {
  books: PropTypes.array.isRequired,
  changeMyShelf: PropTypes.func.isRequired
};

export default MyBookList;
