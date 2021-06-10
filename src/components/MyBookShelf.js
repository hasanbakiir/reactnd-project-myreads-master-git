import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

class MyBookShelf extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    changeMyShelf: PropTypes.func.isRequired
  };

  render() {
    const { books, changeMyShelf } = this.props;

    return (
      <ol className="books-grid">
        {books.map(book => (
          <Book
            book={book}
            books={books}
            key={book.id}
            changeMyShelf={changeMyShelf}
          />
        ))}
      </ol>
    );
  }
}

export default MyBookShelf;
