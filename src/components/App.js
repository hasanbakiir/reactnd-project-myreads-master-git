import React from 'react';
import { Route, Switch } from 'react-router-dom';
import * as BooksAPI from '../data/BooksAPI';
import '../css/App.css';
import MyBookList from './MyBookList';
import { Link } from 'react-router-dom';
import Search from './Search';
import MyNotFound from './MyNotFound';

class BooksApp extends React.Component {
  state = { books: [] };

  componentDidMount() {
    // get books on load
    BooksAPI.getAll().then(books => this.setState({ books }));
  }

  changeMyShelf = (changedBook, shelf) => {
    BooksAPI.update(changedBook, shelf).then(response => {
      // set shelf for new or updated book
      changedBook.shelf = shelf;
      // update state with changed book
      this.setState(prevState => ({
        books: prevState.books
          // remove updated book from array
          .filter(book => book.id !== changedBook.id)
          // add updated book to array
          .concat(changedBook)
      }));
    });
  };

  render() {
    const { books } = this.state;

    return (
      <div className="app">
        <Switch>
          <Route
            path="/search"
            render={() => (
              <Search books={books} changeMyShelf={this.changeMyShelf} />
            )}
          />

          <Route
            exact
            path="/"
            render={() => (
              <div className="list-books">
                <div className="list-books-title">
                  <h1>MyReads</h1>
                </div>
                <MyBookList books={books} changeMyShelf={this.changeMyShelf} />
                <div className="open-search">
                  <Link to="/search">Search</Link>
                </div>
              </div>
            )}
          />
          <Route component={MyNotFound} />
        </Switch>
      </div>
      
    );
  }
}

export default BooksApp;
