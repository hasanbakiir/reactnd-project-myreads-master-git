import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Book from './Book';
import * as BooksAPI from '../data/BooksAPI';


class Search extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    changeMyShelf: PropTypes.func.isRequired
  };

  state = {
    query: '',
    newMyBooks: [],
    mySearchEror: false
  };


  getBooks = event => {
    const query = event.target.value;
    this.setState({ query });

    // if user ( input ) => run the search
    if (query) {
      BooksAPI.search(query.trim(), 20).then(books => {
        books.length > 0
          ? this.setState({ newMyBooks: books, mySearchEror: false })
          : this.setState({ newMyBooks: [], mySearchEror: true });
      });

      // if (Query) is empty => reset state to default in case
    } else this.setState({ newMyBooks: [], mySearchEror: false });
  };

  render() {
    const { query, newMyBooks, mySearchEror } = this.state;
    const { books, changeMyShelf } = this.props;

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search Book by title or author"
              value={query}
              onChange={this.getBooks}
            />
          </div>
        </div>
        <div className="search-books-results">
          {newMyBooks.length > 0 && (
            <div>
              <h3>Search returned {newMyBooks.length} books </h3>
              <ol className="books-grid">
                {newMyBooks.map(book => (
                  <Book
                    book={book}
                    books={books}
                    key={book.id}
                    changeMyShelf={changeMyShelf}
                  />
                ))}
              </ol>
            </div>
          )}
          {mySearchEror && (
            <h3>No BOOK found. Try again Please!</h3>
          )}
        </div>
      </div>
    );
  }
}
export default Search; // Defualt Search 
