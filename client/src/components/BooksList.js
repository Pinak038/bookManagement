import React, { useEffect, useState } from 'react';
import _ from 'lodash';
import axios from 'axios';
import Book from './Book';

const BooksList = () => {
  const [ books, setBooks ] = useState([]);

  function getBooks() {
    axios.get('http://localhost:3001/api/books')
    .then(function (response) {
      // handle success
      console.log(response);
      setBooks(response.data.data);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
  }

  useEffect(() => {
    getBooks();
  }, []);

  const handleRemoveBook = (id) => {
    axios.delete(`http://localhost:3001/api/books/${id}`)
    .then(function (response) {
      // handle success
      console.log(response);
      setBooks(books.filter((book) => book._id !== id));
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
  };

  return (
    <React.Fragment>
      <div className="book-list">
        {!_.isEmpty(books) ? (
          books.map((book) => (
            <Book key={book._id} {...book} handleRemoveBook={handleRemoveBook} />
          ))
        ) : (
          <p className="message">No books available. Please add some books.</p>
        )}
      </div>
    </React.Fragment>
  );
};

export default BooksList;
