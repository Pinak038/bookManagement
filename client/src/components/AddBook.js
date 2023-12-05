import React from 'react';
import axios from 'axios';
import BookForm from './BookForm';
const AddBook = ({ history }) => {

  const handleOnSubmit = (book) => {
    axios.post('http://localhost:3001/api/books', book)
    .then(function (response) {
      console.log(response);
      history.push('/');
    })
    .catch(function (error) {
      console.log(error);
    });
  };

  return (
    <React.Fragment>
      <BookForm handleOnSubmit={handleOnSubmit} />
    </React.Fragment>
  );
};

export default AddBook;
